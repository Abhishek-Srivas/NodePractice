const http = require('http'); //const because we are not gonna change it, reuire is simply a way how you import file in js and http will search for global if i would have written / or ./ http then it would search file in local


const server = http.createServer((req , res) => {   // this will be called when ever a request reaches node js server
    const url = req.url;
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form acton="/messages" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();        
    }
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello User</h1></body>');
    res.write('</html>');
    res.end();
});// request listner recives a request and gives us a object response to return a response  

//oon running it will give nothing beacause createserver return a server so we have to store it and then listen it,listen will not terminate the code and will wait and listen  
server.listen(3000);