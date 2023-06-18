const express=require('express');

const app=express();

app.use((req,res,next) => {
    console.log("in the middleware");
    next();// this makes the request to continue to next middleware in line
});

app.use((req,res,next) => {
    console.log("in another middleware");
    res.send('<h1>Hello form express</h1>');
});

// const server= http.createServer(app);

// server.listen(3000); //3000 is port no.

app.listen(3000);