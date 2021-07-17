const mongoose=require('mongoose');

var Designation=mongoose.model('Designation',{
    companyname:{
        type:mongoose.Types.ObjectId
    },
    locationname:{
        type:mongoose.Types.ObjectId
    },
    departmentname:{
        type:String
    },
    designationname:{
        type:String
    },
    noticeperiod:{
        type:Number
    },
    chkcompoffyes:{
        type:String
    },
    chkcompoffno:{
        type:String
    }
});

module.exports={Designation};