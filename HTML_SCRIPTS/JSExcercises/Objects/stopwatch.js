
function stopWatch() {

	  let oldTimeStr,currTimeStr,lastTime='';
	  let start,stop=false;
 
      this.start = function() {
      	if (!start) {
      		oldTimeStr=new Date();
      		start=true;
      		stop=false;
      	} else {
      		throw new Error('STOPWATCH ALREADY STARTED');
      	}
  

      }

      this.stop = function() {
      	start=false;
      	if (!start && !stop) {
      		console.log('STOPPING WATCH.');
      		currTimeStr=new Date();
      		stop=true;
      	} else {
      		throw new Error('STOPWATCH ALREADY STOPPED');
      	}
      	
      }

 	  
 	  this.duration = function() {
 	  	console.log('------------------------------------------------')
      	if (start) {
      		currTimeStr=new Date();
 	 		console.log('STARTED AT:-'+oldTimeStr.toTimeString());
      		console.log('CURRENT TIME:-'+currTimeStr.toTimeString());
      		lastTime=Math.abs(currTimeStr-oldTimeStr)/1000;
      		if (lastTime!=undefined) {
      			lastTime=Math.abs(currTimeStr-oldTimeStr)/1000;
      			console.log(lastTime);
      		} 
      	} else {
      		lastTime=Math.abs(currTimeStr-oldTimeStr)/1000;
      		console.log(lastTime);
      	}
      	console.log('------------------------------------------------')

    }


    this.reset = function() {
 	  	currTimeStr=null;
 	  	oldTimeStr=null;
 	  	start=false;
 	  	duration=0;
 	  }
}



const d =new Date();
const sw = new stopWatch();
sw.start();