const express=require('express');
 var router=express.Router();
 var { registeration }=require('../Model/registeration');


 router.post('/save',(req,res)=>
 {
     console.log('1degde');
     var reg= new registeration({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
     })
     console.log(reg);
     reg.save((err,result)=>
     {
        if(!err)
        {
            console.log(result);
            return res.send(result);
        }
        else
        {
            console.log('Data Are Not Inserted',err);
        }
     })
 }) 

 router.get('/Email:email',(req,res)=>
 {
     console.log(req.params.email);
     let email=req.params.email;
    registeration.find({email},(err,docs)=>{
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

 router.post('/Validate',(req,res)=>
 {
     console.log(req.body.signinemail);
     console.log(req.body);
    // let email=Object.values(req.body)[0];
     let email=req.body.signinemail;
    registeration.find({email},(err,docs)=>
    {
                if(!err && docs.length)
                {
                    let password=req.body.signinpassword;
                    registeration.find({email,password},(err,docs)=>
                    {
                        if(!err && docs.length)
                        {
                            return res.send(docs);
                            
                        }
                        else
                        {
                            return res.send({error: "Wrong Password"})
                        }
                    })
                }
                else
                {
                    return res.send({error: "Wrong Email"})
                }
       
        
    }) 
 })

 module.exports=router;