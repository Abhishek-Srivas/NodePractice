const http = require('http'); //const because we are not gonna change it, reuire is simply a way how you import file in js and http will search for global if i would have written / or ./ http then it would search file in local
const fs = require('fs'); //contain all inbuild file func and obj


const server = http.createServer((req , res) => {   // this will be called when ever a request reaches node js server
    const url = req.url;
    const method = req.method;
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();        
    }
    //process.exit();
    if(url === '/message' && method === 'POST'){
        
        const body = []; // beacause it will read the request body 
        req.on('data',(chunk) => {
            body.push(chunk);
        }); // fired when a new chunk is ready to be reaad in stream
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello User</h1></body>');
    res.write('</html>');
    res.end();
});// request listner recives a request and gives us a object response to return a response  

//oon running it will give nothing beacause createserver return a server so we have to store it and then listen it,listen will not terminate the code and will wait and listen  
server.listen(3000);