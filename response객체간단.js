//웹서버를 생성하고 실행
request('http').craeteServer(function (request, response){
    //응답
   response.writeHead(200,{'content-type':'text.html'});
   response.end('<h1>hello web server</h1>');
}).listen(52273, function(){
    console.log('server running');
});