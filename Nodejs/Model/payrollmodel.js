const mongoose=require('mongoose');


var Payrollmodel=mongoose.model('Payroll',({
    companyname:{
        type:String
    },
    payrollstructurename:{
        type:String
    },
    // chkauto:{
    //     type:String
    // },
    // chkmanual:{
    //     type:String
    // },
    group1:{type:String}
}))

module.exports={Payrollmodel}