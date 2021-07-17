const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://Abhishek0786:India123@cluster0.vph7a.mongodb.net/CrudApp?retryWrites=true&w=majority',
{ useNewUrlParser: true },
err =>
{
    if(!err)
    {
        console.log('Connection Established');
    }
    else
    {
        console.log('Error In DB Connection',JSON.stringify(err));
    }
});
mongoose.set('useFindAndModify', false);

module.exports=mongoose;
