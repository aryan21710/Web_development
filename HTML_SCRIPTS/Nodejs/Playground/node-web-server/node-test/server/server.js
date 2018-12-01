
const express=require('express');

const app=express();
const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
	res.status(200).send({
		message: 'USER LOGGED IN SUCCESSFULLY',
		statusCode : 200,
		time : `${new Date().toDateString()} ${new Date().toTimeString()}`
	});
})


app.get('/about',(req,res)=>{
	res.send([{
		name : 'aryan',
		age : 39
	},{

		name : 'sim',
		age : 28
	},{

		name : 'ryan',
		age : 8
	}])

})
app.listen(port,()=>{
	console.log(`MY SERVER LISTENING AT PORT ${port}`)
})

module.exports.app=app;