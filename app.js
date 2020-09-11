const http = require('http'); //const because we are not gonna change it, reuire is simply a way how you import file in js and http will search for global if i would have written / or ./ http then it would search file in local

const express = require('express');

const app = express();

app.use( (req, res, next) =>{
    console.log("in the middleware");
    next(); // Allow the req to continue to the next middleware
})

app.use( (req, res, next) => {
    console.log("in the next middleware")
    res.send('<h1>Hello From Express!</h1>'); //allow us to send response
})

/*const server = http.createServer(app);   // this will be called when ever a request reaches node js server
// request listner recives a request and gives us a object response to return a response  

//oon running it will give nothing beacause createserver return a server so we have to store it and then listen it,listen will not terminate the code and will wait and listen  
server.listen(3000); */
app.listen(3000);