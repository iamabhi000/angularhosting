const mongoose=require('mongoose');

var EmployeeType=mongoose.model('EmployeeType',{
    companyname:mongoose.Types.ObjectId,
    locationname:mongoose.Types.ObjectId,
    employementtype:String,
    group1:String,
    payrollstructure:mongoose.Types.ObjectId,
    // payrollstructure:{
    //     type:mongoose.Types.ObjectId,
    //     require:true
    // },
    grppaidleave:String,
    hdnunpaiddays:String
   
})

module.exports={EmployeeType};