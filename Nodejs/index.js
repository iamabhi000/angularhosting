const express= require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
var PORT=process.env.Port || 3000
const {mongoose}=require('./db.js');
var employeecontroller=require('./controller/employeeController');
var registerationcontroller=require('./controller/registerationController');
var companydetailscontroller=require('./controller/companydetailscontroller');
var payrolldetailscontroller=require('./controller/payrollcontroller');
var LocationController=require('./controller/LocationController');
let EmployeeTypeController=require('./controller/emptypecontroller');
let DesignationTypeController = require('./controller/Designationcontroller')
let ForgotPasswordController = require('./controller/forgotcontroller')
let app=express();

app.use(bodyparser.json());
app.use(cors());    
app.use('/employee',employeecontroller);
app.use('/register',registerationcontroller);
app.use('/company',companydetailscontroller);
app.use('/payroll',payrolldetailscontroller);
app.use('/Location',LocationController);
app.use('/Employeetype',EmployeeTypeController);
app.use('/Designation',DesignationTypeController);
app.use('/ForgotPassword',ForgotPasswordController);

app.listen(PORT,()=>
{
    console.log('Server Start Port at:3000');
});

