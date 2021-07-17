const express=require('express');
var router =express.Router();

var {CompanyDetails}=require('../Model/companydetails');
var objectid=require('mongoose').Types.ObjectId;
router.post('/add',(req,res)=>
{
    var company=new CompanyDetails({
        organizationname:req.body.organizationname,
        companyname:req.body.companyname,
        mobileno:req.body.mobileno,
        email:req.body.email,
        website:req.body.website,
        country:req.body.country,
        state:req.body.state,
        address:req.body.address ,
        noofemployee:req.body.noofemployee,
        codestartswith:req.body.codestartswith,
        biocodestartrange:req.body.biocodestartrange,
        biocodeendrange:req.body.biocodeendrange,
        companyregisterationnumber:req.body.companyregisterationnumber,
        gstnumber:req.body.gstnumber,
        chkbiometric:req.body.chkbiometric,
        chkgps:req.body.chkgps,
        chkManual:req.body.chkManual,
        myfile:req.body.myfile,
        chkpp:req.body.chkpp,
        chkESIC:req.body.chkESIC,
        chkpt:req.body.chkpt,
        chkLWF:req.body.chkLWF,
        chkTDS:req.body.chkTDS   

    })
    company.save((err,result)=>
    {
        if(!err)
        {
            return res.send(result);
        }
        else{
            console.log(err);
        }
    })
});

router.get('/',(req,res)=>
{
    CompanyDetails.find((err,result)=>
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
    
});

router.put('/getDetailsforParticular',(req,res)=>
{
 if(!objectid.isValid(req.body.id))
 {
     return res.status(400).send(`No Record Found With given ID ${req.body.id}`)
 }
 else
 {
     CompanyDetails.findById(req.body.id,(err,result)=>
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
    var companydetails={
        organizationname:req.body.organizationname,
        companyname:req.body.companyname,
        mobileno:req.body.mobileno,
        email:req.body.email,
        website:req.body.website,
        country:req.body.country,
        state:req.body.state,
        address:req.body.address ,
        noofemployee:req.body.noofemployee,
        codestartswith:req.body.codestartswith,
        biocodestartrange:req.body.biocodestartrange,
        biocodeendrange:req.body.biocodeendrange,
        companyregisterationnumber:req.body.companyregisterationnumber,
        gstnumber:req.body.gstnumber,
        chkbiometric:req.body.chkbiometric,
        chkgps:req.body.chkgps,
        chkManual:req.body.chkManual,
        myfile:req.body.myfile,
        chkpp:req.body.chkpp,
        chkESIC:req.body.chkESIC,
        chkpt:req.body.chkpt,
        chkLWF:req.body.chkLWF,
        chkTDS:req.body.chkTDS   
    }
    console.log(companydetails);
    CompanyDetails.findByIdAndUpdate(req.params.id,{$set:companydetails},{new:true},(err,result)=>
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
router.delete('/delete:id',(req,res)=>
{console.log(req.params.id);
    if(!objectid.isValid(req.params.id))
{
    return res.status(400).send(`No Record with given ID ${req.params.id}`)
}
    CompanyDetails.findByIdAndRemove(req.params.id,(err,result)=>
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

module.exports=router;