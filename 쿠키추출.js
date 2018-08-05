//모듈을 추출합니다
var http = require('http');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    //GET 쿠키
    var cookie = request.headers.cookie;

    //SET 쿠키
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['name = RintIanTta', 'region = Seoul']
    });

    //응답
    response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(52273, function(){
    console.log('server running');
});