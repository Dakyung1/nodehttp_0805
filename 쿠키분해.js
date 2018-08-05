//모듈을 추출합니다
var http = require('http');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    //쿠키 있는지 확인
    if(request.headers.cookie){
        //쿠키 추출하고 분해
        var cookie = request.headers.cookie.split(',').map(function(element){
            var element = element.split('=');
            return{
                key: element[0],
                value : element[1]
            };
        });

        //응답
        response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
    }else{
        //쿠키 생성
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['name = RintIanTta', 'region = Seoul']
        });

        //응답
        response.end('<h1>쿠키를 생성했습니다.</h1>');
    }
}).listen(52273, function(){
    console.log('server running');
});