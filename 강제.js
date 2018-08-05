//모듈을 추출합니다
var http = require('http');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    response.writeHead(302,{'Location':'http://www.google.com'});
    response.end();
}).listen(52273, function(){
    console.log('server running');
});