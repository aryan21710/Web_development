//https://www.codewars.com/kata/simple-web-framework-number-1-create-a-basic-router/train/javascript


var Router = function () {
    this.route=[];
 
    this.bind = (url, method, action)=> {
        this.url=url;
        this.method=method;
        this.action=action;
        this.methodAction=[];

        // if (this.route.includes(this.url))
          
        if (this.route.length>0) {

            for (let i = 0; i < this.route.length; i++) {
                // console.log(JSON.stringify(this.route[i]) + ':' + Object.keys(this.route[i]));
                // console.log(this.route[i][this.url]);

                if (Object.keys(this.route[i]) == this.url) {
                    this.route[i][this.url][0][this.method] = this.action();
                    break;
                } else {
                    let obj = {}
                    obj[this.method] = this.action();
                    this.methodAction.push(obj);
                    obj = {}
                    obj[this.url] = this.methodAction;
                    this.route.push(obj);

                }
            } 

        } else {
            let obj = {}
            obj[this.method] = this.action();
            this.methodAction.push(obj);
            obj = {}
            obj[this.url] = this.methodAction;
            this.route.push(obj);
        }
        // console.log('route entries are:-' + JSON.stringify(this.route));

    
    }

    this.runRequest=(x,y)=>{
        // console.log('---------------------------------------------------');
        // console.log('route entries are:-' + JSON.stringify(this.route));
        let output='';
        for (let i=0; i<this.route.length; i++) {
            console.log(Object.keys(this.route[i])==x);
            if (Object.keys(this.route[i]) == x) {
                console.log(this.route[i][x][0][y]);
                output = this.route[i][x][0][y];
                break;
            } 
        }
        // console.log(x + ':' + output);
        if(output.length > 1) {
            return console.log(output);
        } else {
            return console.log('Error 404: Not Found');
        } 
    }
}


class Router1 {

    constructor() {
        this.routes = new Map();
    }

    bind(url, method, action) {
        console.log(' before this.routes:-'+JSON.stringify(this.routes));
        this.routes.set(url + ":" + method, action);
        console.log(' after this.routes:-' + JSON.stringify(this.routes));
        console.log('size of map:-'+this.routes.size);
        console.log(this.routes.key);

    }

    runRequest(url, method) {
        if (!this.routes.has(url + ":" + method)) {
            return "Error 404: Not Found";
        }
        console.log('this.routes.get(url + ":" + method)():-' + this.routes.get(url + ":" + method)());
        return this.routes.get(url + ":" + method)();
    }

}
 const router=new Router1;
router.bind('/page', 'GET', function () { return 'First binding.'; });
router.bind('/page', 'GET', function () { return 'Modified binding.'; })

router.runRequest('/page', 'GET');
// router.runRequest('/login', 'POST');

// router.runRequest('/this-url-does-not-exist', 'GET');