var express = require('express'),
	fs = require('fs'),
	app = express();

var path = require('path');
// console.log(path)
// fs.existsSync('/var/log', exists=>{
// 	if(!exists) fs.mkdirSync('/var/log');
// 	fs.exists('/var/log/egenie/', exists=>{
// 		if(!exists) fs.mkdirSync('/var/log/egenie');
// 	});
// });
mkdirSync('/var/log/egenie/front-log');
// var logPath = '/var/log/egenie/';


// app.get('/api/getSomething' , function(req, res) {
               
//                 res.send('Mock.mock(text)');
//             });

// app.listen(8881, function(){
// 	console.log('start');
// });

function mkdirSync(url,mode,cb){
    var arr = url.split("/");
    mode = mode || 0755;
    cb = cb || function(){};
    if(arr[0]==="."){//处理 ./aaa
        arr.shift();
    }
    if(arr[0] == ".."){//处理 ../ddd/d
        arr.splice(0,2,arr[0]+"/"+arr[1])
    }
    function inner(cur){
    	if(cur) {
    		if(!fs.existsSync(cur)){//不存在就创建一个
            	fs.mkdirSync(cur, mode)
	        }
	        if(arr.length){
	            inner(cur + "/"+arr.shift());
	        }else{
	            cb();
	        }
    	}
       
    }
    arr.length && inner(arr.shift());
}