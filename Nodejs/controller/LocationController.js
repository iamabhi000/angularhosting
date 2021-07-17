const express=require('express');
var router=express.Router();
var {LocationDetails}=require('../Model/locationmodel');
var objectid=require('mongoose').Types.ObjectId;
const { json } = require('body-parser');

router.post('/add',(req,res)=>
{
    var Location=new LocationDetails({
        companyname:req.body.companyname,
        locationname:req.body.locationname,
        ipaddress:req.body.ipaddress,
        country:req.body.country,
        state:req.body.state,
        address:req.body.address,
        companynametext:req.body.companynametext

    })
    Location.save((err,result)=>
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
    
    LocationDetails.find((err,result)=>
    {
        
      if(!err)
      {
       
        LocationDetails.aggregate(  [
            {
              $lookup:
                {
                  from: "companydetails",
                  localField: "companyname",
                  foreignField: "_id",
                  as: "location_docs",
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
      else{
          console.log(err);
      }
    })
})
router.delete('/delete:id',(req,res)=>
{
    if(!objectid.isValid(req.params.id))
    {
        return res.status(400).send(`No Record with given ID ${req.params.id}`)
    }
    else
    {
        LocationDetails.findByIdAndRemove(req.params.id,(err,result)=>
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
        return res.status(400).send(`No Record with given ID ${req.params.id}`)
    }
    else
    {
        var locationdetails={
            companyname:req.body.companyname,
            locationname:req.body.locationname,
            ipaddress:req.body.ipaddress,
            country:req.body.country,
            state:req.body.state,
            address:req.body.address,
            companynametext:req.body.companynametext
        }
        LocationDetails.findByIdAndUpdate(req.params.id,{$set:locationdetails},{new:true},(err,result)=>{
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
module.exports=router;