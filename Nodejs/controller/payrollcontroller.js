const express=require('express');
var router=express.Router();
var {Payrollmodel}= require('../Model/payrollmodel');
var objectid=require('mongoose').Types.ObjectId;

router.post('/add',(req,res)=>
{
     var payrollmodel=new Payrollmodel({
         companyname:req.body.companyname,
         payrollstructurename:req.body.payrollstructurename,
        //  chkauto:req.body.chkauto,
        //  chkmanual:req.body.chkmanual,
        group1:req.body.group1,
     })
     payrollmodel.save((err,result)=>
     {
         if(!err)
         {
             res.send(result);
         }
         else{
             console.log(err);
         }
     })
})

router.get('/',(req,res)=>
{
    Payrollmodel.find((err,result)=>
    {
        if(!err)
        {
            res.send(result);
        }
        else{
            console.log(err);
        }
    })
    
})
router.delete('/delete:id',(req,res)=>
{
    if(!objectid.isValid(req.params.id))
    {
        res.status(400).send('No Record Found With The Given ID'+req.params.id);
    }
    else
    {
        Payrollmodel.findByIdAndRemove((req.params.id),(err,result)=>
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
    }
})
router.put('/GetDataForPayroll:id',(req,res)=>
{
    if(!objectid.isValid(req.params.id))
    {
        res.status(400).send('No Record With This Given ID'+req.params.id);
    }
    else
    {
        Payrollmodel.findById(req.params.id,(err,result)=>
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
    }
})
router.put('/update:id',(req,res)=>
{
    if(!objectid.isValid(req.params.id))
    {
        res.status(400).send('No Record Has Been Found from The Given Id'+req.params.id)
    }
    var PayrollDetails={
        companyname:req.body.companyname,
        payrollstructurename:req.body.payrollstructurename,
        group1:req.body.group1,
    }
    Payrollmodel.findByIdAndUpdate(req.params.id,{$set:PayrollDetails},{new:true},(err,result)=>
    {
        if(!err)
        {
            res.send(result)
        }
        else
        {
            console.log(err);
        }
    }   
    )
})

module.exports=router;