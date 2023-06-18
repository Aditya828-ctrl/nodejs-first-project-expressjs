const express=require('express');

const app=express();

app.use('/add-product',(req,res,next) => {
    console.log("in another middleware");
    res.send('<h1>Hello form add-product page</h1>');
});

app.use('/',(req,res,next) => {
    console.log("in another middleware");
    res.send('<h1>Hello form express</h1>');
});

// const server= http.createServer(app);

// server.listen(3000); //3000 is port no.

app.listen(3000);