//1.close메서드

//모듈을 추출합니다
var http = require('http');
//웹 서버를 생성합니다.
var server = require('http').createServer();
//웹 서버를 실행합니다.
server.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
//10초 후 함수 실행
var test = function(){
    //서버 종료
    server.close();
};
setTimeout(test,10000);


//2.이벤트

//모듈을 추출합니다
var http = require('http');
//웹 서버를 생성합니다.
var server = require('http').createServer();
//server객체에 이벤트 연결
server.on('request', function(code){
    console.log('Request On');
});

server.on('connection', function(code){
    console.log('Connection On');
});

server.on('close', function(code){
    console.log('Close On');
});

//listen메서드 실행
server.listen(52273);



//+requset 이벤트 리스너는 별도 on()없이 craeteServer()메서드의 매개변수로 입력 가능
//웹서버를 생성하고 실행
//request('http').craeteServer(function (request, response){
//    response.writeHead(200,{'content-type':'text.html'});
//    response.end('<h1>hell</h1>');
//}).listen(52273);
