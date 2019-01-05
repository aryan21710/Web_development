const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
// ALSO AFTER SETTING THE MONGODB_URI USING HEROKU CONFIG SET WHILE ADDING THE ADDONS IN HEROKU, 
// MONGODB_URI WILL BE PART OF process.env.URI. YOU CAN CHECK THE SAME USING 
// heroku config --app calm-coast-43317
// heroku config:set MONGOLAB_URI="mongodb://aryan:aryan21710@ds123664.mlab.com:23664/arytodo" --app calm-coast-43317

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TODO', { useNewUrlParser: true });

module.exports= {
	mongoose
}
