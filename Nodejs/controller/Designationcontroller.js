const express=require('express');
var router=express.Router();

var {Designation}=require('../Model/Designation');
var objectid=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>
{
Designation.find((err,docs)=>{
    if(!err)
    {
        return res.send(docs);
    }
    else
    {
        console.log(err);
    }
})

});

router.post('/add',(req,res)=>
{
    var des=new Designation({
        companyname:req.body.companyname,  
        locationname:req.body.locationname,  
        departmentname:req.body.departmentname,  
        designationname:req.body.designationname,  
        noticeperiod:req.body.noticeperiod,
        chkcompoffyes:req.body.chkcompoffyes,
        chkcompoffno: req.body.chkcompoffno
    })
    des.save((err,docs)=>{
    if(!err)
    {
        return res.send(docs);
    }
    else
    {
        console.log(err);
    }
})

});

router.put('/getParticular',(req,res)=>
{ 
    if(!objectid.isValid(req.body._id))
    {
        return res.status(400).send(`No Record with given ID ${req.body._id}`)
    }
    Designation.findById(req.body._id,(err,docs)=>
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log(err);
        }
    })
})

router.put('/update',(req,res)=>
{ 
if(!objectid.isValid(req.body._id))
{
    return res.status(400).send(`No Record with given ID ${req.body._id}`)
}
    var des={
        
        companyname:req.body.companyname,  
        locationname:req.body.locationname,  
        departmentname:req.body.departmentname,  
        designationname:req.body.designationname,  
        noticeperiod:req.body.noticeperiod,
        chkcompoffyes:req.body.chkcompoffyes,
        chkcompoffno: req.body.chkcompoffno
    }
    console.log(des);
    Designation.findByIdAndUpdate(req.body._id,{$set:emp},{new:true},(err,docs)=>
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
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
Designation.findByIdAndRemove(req.params.id,(err,docs)=>
 {
     if(!err)
     {
         res.send(docs);
     }
     else
     {
         console.log(err);
     }
 })
})
module.exports=router;