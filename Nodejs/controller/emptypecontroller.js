const express= require('express');
let router=express.Router();

let {EmployeeType}=require('../Model/emptype');
let objectid=require('mongoose').Types.ObjectId;

router.post('/save',(req,res)=>
{
  let emptype;
  if(req.body.payrollstructure=="0")
  {
     emptype=new EmployeeType(
      {
        companyname:req.body.companyname,
        locationname:req.body.locationname,
        employementtype:req.body.employementtype,
        group1:req.body.group1,
        grppaidleave:req.body.grppaidleave,
        hdnunpaiddays:req.body.hdnunpaiddays,
      })
  }
  else
  {
     emptype=new EmployeeType(
      {
        companyname:req.body.companyname,
        locationname:req.body.locationname,
        employementtype:req.body.employementtype,
        group1:req.body.group1,
        payrollstructure: req.body.payrollstructure,
        grppaidleave:req.body.grppaidleave,
        hdnunpaiddays:req.body.hdnunpaiddays,
      })
  }

  
      emptype.save((err,result)=>
      {
         if(!err)
         {
             res.send(result);
         }
         else
         {
             console.log(err);
         }
      })
      
})

router.get('/',(req,res)=>{
    EmployeeType.find((err,result)=>
    {
        if(!err)
        {
            EmployeeType.aggregate(  [
                {
                  $lookup:
                    {
                      from: "companydetails",
                      localField: "companyname",
                      foreignField: "_id",
                      as: "company_docs",
                    }
               },
               {
                $lookup:
                {
                  from: "locations",
                  localField: "locationname",
                  foreignField: "_id",
                  as: "location_docs",
                }
               },
               {
                $lookup:
                {
                  from: "payrolls",
                  localField: "payrollstructure",
                  foreignField: "_id",
                  as: "payroll_docs",
                }
               }
             ])
              .exec((err, joinres)=>{
                if (err) {
                    console.log("error" ,err)
                }
                if (joinres) {
                    console.log((JSON.stringify(joinres)));
                    res.send(joinres);
                }
      });
        }
    })
})

router.delete('/delete:id',(req,res)=>
{
  if(!objectid.isValid(req.params.id))
  {
      return res.status(400).send(`No Record with given ID ${req.params.id}`)
  }
  EmployeeType.findByIdAndRemove(req.params.id,(err,result)=>
  {
    if(!err)
    {
      res.send(result)
    }
    else
    {
      console.log(err)
    }
  })
})
module.exports=router;