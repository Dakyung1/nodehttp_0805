//모듈을 추출합니다
var http = require('http');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    //변수선언
    var date = new Date();
    date.setDate(date.getDate()+7);

    //쿠키 입력
   response.writeHead(200,{
       'content-type':'text.html',
       'Set-Cookie' : ['breakfast = toast;Expires = '+date.toUTCString(),
        'dinner = chicken']
    });

    //쿠키 출력
    response.end('<h1>'+request.headers.cookie + '<h1>');
}).listen(52273, function(){
    console.log('server running');
});