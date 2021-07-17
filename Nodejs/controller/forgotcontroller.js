const express=require('express');
 var router=express.Router();
 var { registeration }=require('../Model/registeration');
var nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    auth : {
        api_key:'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'
        }
});

var mailoptions = {
    from:'abhishekpandey2911@gmail.com',
    to:'phandsome123@gmail.com',
    subject:'Sendm',
    text:'hello'
}


 router.post('/UpdatePassword',(req,res)=>
 {
     console.log(req.body.email)
    let email=req.body.email;
    registeration.find({email},(err,docs)=>
    {
        console.log(err);
        console.log(docs.length);
                if(!err && docs.length)
                {
                    if(req.body.password!=null && req.body.password.length > 0)
                    {
                      console.log(req.body)
                        let password=req.body.password;
                        let confirmpassword=req.body.confirmpassword
                        console.log(password);
                        registeration.findOneAndUpdate({email},{password,confirmpassword},{new:true},(err,result)=>
                        {
                                return res.send(result);
                        })
                    }
                    else
                    {
                        // transporter.sendMail({
                        //     from:'abhishekpandey2911@gmail.com',
                        //     to:'phandsome123@gmail.com',
                        //     subject:'Sendm',
                        //     text:'hello'
                        // }).then(result =>{
                        //     res.send(docs);
                        // })
                        // .catch(err=>{
                        //     console.log(err)
                        // })
                       
                    }
                }
                else
                {
                    return res.send({error: "Wrong Email"})
                }
    }) 
 }
 )
 module.exports=router;