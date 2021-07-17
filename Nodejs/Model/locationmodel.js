const mongoose=require('mongoose');

var LocationDetails=mongoose.model(
    'Location',{
        companyname:mongoose.Types.ObjectId,
        locationname:String,
        ipaddress:String,
        country:String,
        state:String,
        address:String,
        companynametext:String
});

module.exports={LocationDetails};