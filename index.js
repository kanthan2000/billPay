const express = require("express")
const mongoose = require("mongoose")


const memberRoute = require("./Route/MemberRoute")
const app = express()
app.use(express.json())
app.use("/",memberRoute)

const uri ="mongodb+srv://iam-user:iam-user@cluster0.f1i0kpf.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    })
    
    .then(() => {
      console.log('Connected to database !!');
    })
    .catch((err)=>{
      console.log('Connection failed !!'+ err.message);
    });
    app.listen(3000);