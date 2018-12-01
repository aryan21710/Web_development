
var http=require('http');
var fs=require('fs');


http.createServer(function(req,res) {
	fs.watch('testdir', function(eventType,filename) {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
});
}).listen(8080);
