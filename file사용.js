var fs = require('fs');
var http = require('http');

http.createServer(function (request, response){
    //html파일읽기
    fs.readFile('htmlpage.html', function(error, data){
        response.writeHead(200, { 'Content-TYpe':'text/html'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('server running');
});