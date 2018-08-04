# 모던웹을 위한 node.js

## CHAPTER 6 http모듈

### 무엇을 배우나요?
- http 모듈을 사용하는 방법
- http 모듈을 응용해서 기본적인 웹 서버의 기능 구현

### 꼭 알아둘 개념
|개념|설명|
|--|--|
|요청|웹 페이지에 접속하려고 하는 어떤 요청을 말합니다.|
|응답|요청을 받아 이를 처리하는 작업을 말합니다.|
|http 모듈|HTTP 웹 서버와 관련된 모든 기능을 담은 모듈입니다.|
|server 객체|웹 서버를 생성하는 데 꼭 필요한 객체입니다.|
|response 객체|응답 메시지를 작성할 때 request 이벤트 리스너의 두 번째 매개변수로 전달되는 객체입니다.|
|request 객체|응답 메시지를 작성할 때 request 이벤트 리스너의  번째 매개변수로 전달되는 객체입니다. |
|||

## 6.1 요청과 응답
요청하는 대상 = 클라이언트(사용자)<br>
응답하는 대상 = 서버(제공자)<br>

클라이언트가 서버로 보내는 편지 = 요청 메시지<br>
-요청 메시지를 사용해야 사용자에게 적절한 웹페이지를 제공할 수 있다.<br>
서버가 클라이언트로 보내는 편지 = 응답 메시지<br>
-쿠키를 저장하거나 추출할 수 있고, 강제로 웹 페이지를 이동시킬 수 있다.br>
전송 될 때는 스트림을 사용한다. (스트림은 프로그램과 프로그램 외부가 통신할 때 사용되는 것)

## 6.2 server 객체
http모듈에서 가장 중요한 객체<br>
http모듈의 createServer() 메서드를 사용하면 server 객체를 생성할 수 있다.<br>
<pre><code> 
//모듈을 추출합니다
var http = require('http');
//웹 서버를 생성합니다.
var server = http.createServer();
//웹 서버를 실행합니다.
server.listen(52273);
</code>
</pre><br>
(./node0805/server객체.js)<br>

###server 객체의 메서드
|listen(port[, callback]))|서버 실행|<br>
|close([callback])|서버 종료|
<pre>
<code>
//서버 생성
var server = require('http').createServer();
//서버 실행
server.listen(52273, funtion(){
    console.log('Server Running at http://127.0.0.1:52273');
});

//10초 후 함수 실행
var test - function(){
    //서버 종료
    server.close();
};
setTimeout(test,10000);
</code>
</pre>

###server 객체의 이벤트
server객체에서 중요한 것은 메서드보다 이벤트.<br>
EventEmitter 객체를 기반으로 만들어졌으므로 이벤트를 연결할 수 있다.<br>
-자주 사용하는 server객체 이벤트<br>
|request|클라이언트가 요청할 때 발생|<br>
|connection|클라이언트가 접속할 때 발생|<br>
|close|서버가 종료될 때 발생|<br>
|checkContinue|클라이언트가 지속적인 연결하고 있을 때 발생|<br>
|upgrade|클라이언트가 HTTP 업그레이드 요청할 때 발생|<br>
|clientError|클라이언트에서 오류가 발생할 때 발생|<br>

## 6.3
<pre><code>removeListener(eventName, handler) : 특정 이벤트의 리스너를 제거
removeAllListeners(eventName) : 모든 이벤트 리스너를 제거 </code>
</pre>
[이벤트제거 예제](./5.event/이벤트제거.js) <br>
[이벤트를 한번만 연결하고 싶은 경우](./5.event/once.js)

## 5.4 이벤트 강제 발생
<pre><code>emit(eventName[,arg1][...]) : emit 메서드는 이벤트를 강제로 발생시킴
하지만 이벤트 리스너만 실행됨.</code>
</pre>
[이벤트 강제 발생 예제](./5.event/이벤트강제발생.js)

## 5.5 이벤트 생성
``` 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다. 
EventEmitter 객체는 events 모듈안에 있음. process객체에도 있음.
```
[이벤트 생성 예제](./5.event/이벤트생성.js)