const mongoose = require('mongoose');
const url = 'mongodb+srv://root:SNFmEZPU5SWifrjF@cluster0.1ixno.mongodb.net/assessment?retryWrites=true&w=majority'

//this is for connnecting MongoDB
mongoose.connect(url, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});


// requiring Schema
require('./Add_UpdateIMG');                                           