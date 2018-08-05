//모듈을 추출합니다
var http = require('http');

//웹서버를 생성하고 실행
http.createServer(function (request, response){
    if(request.method == 'GET'){
        console.log('get입니다');
    }else if(request.method =='POST'){
        console.log('post입니다');
    }
}).listen(52273,function(){
    console.log('server running');
});