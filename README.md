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
[예제](./server객체.js)<br>

-server 객체의 메서드<br>>

|메서드 이름|설명|
|--|--|
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

##server 객체의 이벤트
server객체에서 중요한 것은 메서드보다 이벤트.<br>
EventEmitter 객체를 기반으로 만들어졌으므로 이벤트를 연결할 수 있다.<br>

-자주 사용하는 server객체 이벤트<br>

|이벤트 이름|설명|
|--|--|
|request|클라이언트가 요청할 때 발생|<br>
|connection|클라이언트가 접속할 때 발생|<br>
|close|서버가 종료될 때 발생|<br>
|checkContinue|클라이언트가 지속적인 연결하고 있을 때 발생|<br>
|upgrade|클라이언트가 HTTP 업그레이드 요청할 때 발생|<br>
|clientError|클라이언트에서 오류가 발생할 때 발생|<br>

[예제](./server이벤트.js) <br>

## 6.3 response 객체
-response 객체의 메서드 <br>

|메서드 이름|설명|
|--|--|
|writeHead(statusCode[, statusMessage][, headers])|응답 헤더를 작성|<br>
|end([data][,encoding][, callback])|응답 본문을 작성|<br>

[예제](./response객체간단.js) <br>

## 6.3.1 File System 모듈을 사용한 HTML 페이지 제공
File System 모듈을 사용해 서버에 존재하는 html페이지를 클라이언트에게 제공<br>
[예제](./file사용.js) <br>

## 6.3.2 이미지와 음악 파일 제공
이미지, 음악, 동영상 파일도 다운로드 가능하다.
[예제](./이미지제공.js) <br>
-MIME형식의 예시 <br>

|Content Type|설명|
|--|--|
|text/plain|기본적인 텍스트|<br>
|text/html|HTML 문서|<br>
|text/css|CSS 문서|<br>
|text/xml|XML 문서|<br>
|image/jpeg|JPG/JPEG 그림 파일|<br>
|image/png|PNG 그림 파일|<br>
|video/mpeg|MPEG 비디오 파일|<br>
|audio/mp3|MP3 음악파일|<br>

## 6.3.3 쿠키 생성
쿠키: 키와 값이 들어 있는 작은 데이터 조각 - 이름, 값, 파기 날짜, 경로 정보<br>
-쿠키는 서버와 클라이언트에서 모두 저장하고 사용 가능<br>
-일정 기간 동안 데이터를 저장 가능 ->페이스북 등에서 로그인 상태 일정 시간 동안 유지 가능하다.<br>

-response 객체를 사용하면 클라이언트에 쿠키를 할당 가능하다 ->Set-Cookie 속성을 사용한다.<br>
Set-Cookie 속성 : Name = Value; Expires = 날짜; Domain = 도메인; Path = 경로; Secure<br>
[예제](./쿠키.js) <br>

## 6.3.4 페이지 강제 이동
Location 속성 사용<br>
[예제](./강제.js) <br>

-HTTP Status Code 예<br>

|HTTP Status Code|설명|예|<br>
|--|:--|:--|<br>
|1xx|처리 중|100 Continue|<br>
|2xx|성공|200 OK|<br>
|3xx|리다이렉트|300 Multiple Choices|<br>
|4xx|클라이언트 오류|400 Bad Request|<br>
|5xx|서버 오류|500 Internal Server Error|<br>

[예제](./401.js) <br>

## 6.4 request객체
-request 객체의 속성<br>

|속성 이름|설명|
|--|--|
|method|클라이언트의 요청 방식을 나타냄|<br>
|url|클라이언트가 요청한 URL을 나타냄|<br>
|headers|요청 메시지 헤더를 나타냄|<br>
|trailers|요청 메시지 트레일러를 나타냄|<br>
|httpVersion|HTTP 프로토콜 버전을 나타냄|<br>

## 6.4.1 URL속성을 사용한 페이지 구분
요청 메시지의 url에 따라 서로 다른 웹페이지를 제공한다. <br>
url모듈을 사용해 pathname을 추출하고 조건물을 사용해 페이지 구분한다.<br>
[예제](./app.js) <br>

## 6.4.2 method 속성을 사용한 페이지 구분
request의 mehod속성을 사용하면 GET/POST 구분이 가능하다.<br>
[예제](./구분.js) <br>
이건 GET방식으로  요청 받았을 경우 매개변수를 추출하는 방법<br>

## 6.4.4 POST 요청 매개변수 추출
POST 방식은 데이터를 더 많이 담을 수 있고 보안 측면에서도 더 좋다.<br>
[예제](./request.post.js) <br>

## 쿠키 추출
쿠키는 request 객체의 headers 속성 안 cookies 속성에서 추출할 수 있다.</br>
[예제](./쿠키추출.js) <br>
[예제](./쿠키분해.js) <br>