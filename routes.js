const fs = require('fs');//contain all inbuild file func and obj


const requestHandler = (req, res) => {
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
            return req.on('end', () =>{
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.writeFile('message.txt',message,(err) => {
                    res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
                });
            });
          
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello User</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;       