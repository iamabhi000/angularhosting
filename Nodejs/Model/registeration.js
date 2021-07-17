const mongoose=require('mongoose');

var registeration=mongoose.model('Registeration',
    {
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        confirmpassword:{
            type:String
        }
    });

    module.exports= { registeration }