
      function stopWatch(name) {
            // private/instance/own members
      	  let oldTimeStr,currTimeStr,lastTime='';
      	  let start=false;
       
              Object.defineProperty(this, 'start', {
                  get : function() {
                        return start;
                  }
              })

      }

      // prototype member startwatch of Object sw.  
      // stopWatch.prototype.startwatch=function() {
      //       console.log('INSIDE SW.START FUNCTION');
      //       if (!this.start) {
      //                   this.oldTimeStr=new Date();
      //                   this.start=true;
      //                   this.stop=false;
      //       } else {
      //                   throw new Error('STOPWATCH ALREADY STARTED');
      //       }
      //       debugger;
        
      // }


      // // prototype member stoptime
      // stopWatch.prototype.stoptime=function() {
      //             this.start=false;
      //             if (!this.start && !this.stop) {
      //                   console.log('STOPPING WATCH.');
      //                   this.currTimeStr=new Date();
      //                   this.stop=true;
      //             } else {
      //                   throw new Error('STOPWATCH ALREADY STOPPED');
      //             }
                  
      //       }

      
      // // prototype member duration
      // stopWatch.prototype.duration=function() {

      //       console.log('------------------------------------------------')
      //             if (this.start) {
      //                   this.currTimeStr=new Date();
      //                   console.log('STARTED AT:-'+this.oldTimeStr.toTimeString());
      //                   console.log('CURRENT TIME:-'+this.currTimeStr.toTimeString());
      //                   this.lastTime=Math.abs(this.currTimeStr-this.oldTimeStr)/1000;
      //                   if (this.lastTime!=undefined) {
      //                         this.lastTime=Math.abs(this.currTimeStr-this.oldTimeStr)/1000;
      //                         console.log(this.lastTime);
      //                   } 
      //             } else {
      //                   this.lastTime=Math.abs(this.currTimeStr-this.oldTimeStr)/1000;
      //                   console.log(this.lastTime);
      //             }
      //             console.log('------------------------------------------------')

      // }

      // // prototype member reset
      // stopWatch.prototype.reset=function() {

      //             this.currTimeStr=null;
      //             this.oldTimeStr=null;
      //             this.start=false;

      // }


console.log('calling stopwatch_prototype.js');
const d =new Date();
const sw = new stopWatch('false');
// sw.start='xyz';
console.log(sw.start);
// sw.startwatch();
