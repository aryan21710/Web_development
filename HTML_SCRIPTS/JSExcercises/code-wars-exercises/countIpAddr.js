// https://www.codewars.com/kata/count-ip-addresses/train/javascript

function ipsBetween(start, end) {
    if (typeof (start) == 'string' && typeof (end)=='string') {
        // console.log('BOTH START AND END ARE STRING');
        const start1 = start.split('.').filter((v) => !isNaN(v) && (v >=0 && v < 255));
        // console.log('start1:-' + start1.length); // [10,0,0,0]   
        const end1 = end.split('.').filter((v) => !isNaN(v) && (v >= 0 && v < 255));
        // console.log('end1:-' + end1);
        if (start1.length == 4 && end1.length == 4) {
            let diff=0;
            for (let i=0; i < start1.length;i++) {
                if (i<3) {
                    debugger;
                    diff += (end1[i] - start1[i]) >= 0 ? (end1[i] - start1[i]) * 256 : (start1[i] - end1[i]);
                } else if (i==3) {
                    debugger;
                    // console.log('intial diff:-'+diff);
                    // console.log((end1[i] - start[i]));
                    diff += (end1[i] - start1[i]) >= 0 ? (end1[i] - start1[i]) : (end1[i]-start1[i]);
                    console.log('new diff:-'+diff);
                }

            }

            console.log(`difference between "${start1}" & "${end1}" :- "${diff}"`);
            // return diff;
        } else {
            console.log('PLEASE ENTER VALID IP ADDRESS');
        }
    } else {
        console.log('PLEASE ENTER VALID IP ADDRESS');
    }

    
}


function ipsBetween(start, end) {
    if (typeof (start) == 'string' && typeof (end) == 'string') {
        const start1 = start.split('.').filter((v) => !isNaN(v) && (v >= 0 && v < 255));
        const end1 = end.split('.').filter((v) => !isNaN(v) && (v >= 0 && v < 255));
        if (start1.length == 4 && end1.length == 4) {
            let diff = 0;
            for (let i = 0; i < start1.length; i++) {
                if (i < 3) {
                    diff += (end1[i] - start1[i]) >= 0 ? (end1[i] - start1[i]) * Math.pow(256 , (start1.length-1-i)) : (start1[i] - end1[i]);
                } else if (i == 3) {
                    diff += (end1[i] - start1[i]) >= 0 ? (end1[i] - start1[i]) : (end1[i] - start1[i]);
                }
            }
            console.log(diff);
            return diff;
        } else {
            console.log('PLEASE ENTER VALID IP ADDRESS');
        }
    } else {
        console.log('PLEASE ENTER VALID IP ADDRESS');
    }
}

ipsBetween("20.0.10.10", "20.1.11.250")


