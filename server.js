const express=require('express');
const {resolve}=require('path');
const mongoose=require('mongoose'); 

const app=express();
const port=3010;

const dbURI='mongodb+srv://abhi:ramudu%40453@cluster0.vuqn8.mongodb.net/express_server?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log('MongoDB connection successful');
  })
  .catch((error)=>{
    console.error('MongoDB connection error:', error);
  });

app.use(express.static('static'));

app.get('/',(req,res)=>{
  res.sendFile(resolve(__dirname,'pages/index.html'));
});

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});
