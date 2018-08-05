//모듈을 추출합니다
var http = require('http');
var fs = require('fs');
var url = require('url');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    //변수 선언
    var pathname = url.parse(request.url).pathname;

    //페이지 구분
    if(pathname == '/'){
        fs.readFile('index.html', function(error, data){
            //응답
            response.writeHead(200, { 'Content-TYpe':'text/html'});
            response.end(data);
        });
    }else if(pathname == '/otherpage'){
        //otherpage 읽기
        fs.readFile('otherpage.html', function(error, data){
            //응답
            response.writeHead(200, { 'Content-TYpe':'text/html'});
            response.end(data);
    });
    }
}).listen(52273, function(){
    console.log('server running');
});