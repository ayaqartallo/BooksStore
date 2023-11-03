const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bookStore:book123@cluster0.sn3ozlt.mongodb.net/crudop?retryWrites=true&w=majority').then(()=> {
    console.log("Connected")
})