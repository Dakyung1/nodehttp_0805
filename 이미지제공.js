var fs = require('fs');
var http = require('http');

http.createServer(function (request, response){
    //html파일읽기
    fs.readFile('common.jpg', function(error, data){
        response.writeHead(200, { 'Content-TYpe':'image/jpeg'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('server running');
});