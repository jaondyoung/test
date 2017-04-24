"use strict";
//可以创建一个HTTP服务器
var http = require("http");

//创建一个服务
var server = http.createServer(function(request,response){
	var url = request.url;
	switch(url){
		case '/login':
			login(request,response);
			break;
		case '/error':
			error(request,response);
			break;
		default:
			response.writeHead(404,{});
			response.end();
			break;
	}
});

//启动服务
server.listen(8080,function(error){
	console.log('成功监听8080端口');
});

function login(request,response){
	console.log('进入登录页面');
	response.end();	
}

function error(request,response){
	console.log('错误');
	response.end();
}