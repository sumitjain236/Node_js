var http=require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.readFile('./Public/index.html', 'UTF-8', function (err, html) {
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(html);


        });

    }
    else if (req.url.match('\.jpeg$')) {
        var imagepath = path.join(__dirname, 'Public', req.url);
        var filestream = fs.createReadStream(imagepath);
        res.writeHead(200, { "Content-type": "text/html" });
        filestream.pipe(res);

    } else {
        res.writeHead(400, { "Content-type": "text/html" });
        res.end('No page Found');
    }
    
    console.log(req.url);

}).listen(3000);