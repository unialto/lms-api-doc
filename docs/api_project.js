define({
  "name": "LMS API Doc",
  "version": "1.0.0",
  "description": "",
  "title": "",
  "url": "",
  "header": {
    "title": "LMS API",
    "content": "<h1>서버 정보</h1>\n<table>\n<thead>\n<tr>\n<th>ENVIRONMENT</th>\n<th>HOST</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Development</td>\n<td>http://?</td>\n</tr>\n<tr>\n<td>Production</td>\n<td>https://?</td>\n</tr>\n</tbody>\n</table>\n<hr>\n<br/>\n<h1>로그인 인증</h1>\n<p>서버 세션을 사용하므로 WEB에서 서버 호출시 쿠키 공유 설정 필수!</p>\n<hr>\n<br/>\n<h1>에러 정보</h1>\n<h2>Error Body</h2>\n<table>\n<thead>\n<tr>\n<th>FIELD</th>\n<th>TYPE</th>\n<th>DESCRIPTION</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>code</td>\n<td>String</td>\n<td>에러 코드</td>\n</tr>\n<tr>\n<td>message</td>\n<td>String</td>\n<td>에러 메시지</td>\n</tr>\n</tbody>\n</table>\n<br/>\n<h2>예시</h2>\n<pre class=\"prettyprint\">HTTP/1.1 400\n{\n  \"code\": \"admin-api-9900\",\n  \"message\": \"Bad Request.\"\n}\n</code></pre>\n<br/>\n<br/>"
  },
  "footer": {
    "title": "버전이력",
    "content": "<br/>\n<br/>\n<h1>버전 이력</h1>\n<table>\n<thead>\n<tr>\n<th>VERSION</th>\n<th>DESCRIPTION</th>\n<th>DATE</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1.0.0</td>\n<td>최초 생성</td>\n<td>2024.03.12</td>\n</tr>\n</tbody>\n</table>\n<br/>\n<br/>"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2024-03-25T12:09:31.742Z",
    "url": "https://apidocjs.com",
    "version": "0.29.0"
  }
});
