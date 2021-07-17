const express=require('express');
var router=express.Router();

var {Employee}=require('../Model/employee');
var objectid=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>
{
Employee.find((err,docs)=>{
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
    var emp=new Employee({
        name:req.body.name,  
        position:req.body.position,  
        office:req.body.office,  
        salary:req.body.salary,  
    })
    emp.save((err,docs)=>{
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
    Employee.findById(req.body._id,(err,docs)=>
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
    var emp={
        
        name:req.body.name,  
        position:req.body.position,  
        office:req.body.office,  
        salary:req.body.salary,  
    }
    console.log(emp);
    Employee.findByIdAndUpdate(req.body._id,{$set:emp},{new:true},(err,docs)=>
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
 Employee.findByIdAndRemove(req.params.id,(err,docs)=>
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