window.onload=function() {
//check_if_an_array() 
//clone_an_array()
//return_first_n_elements_of_an_array()
 //return_last_n_elements_of_an_array()
 //join_all_elem_of_arr_into_str()
 //insert_dashes_between_2_evenNo() '''''WRITE AGAIN''''
 //most_freq_item_of_an_arr()
 //swap_the_case_of_char_in_string()
 //print_char_of_nested_arr()
 //sum_of_squares_of_numeric_vector()
 //sum_and_prod_of_an_arr_of_int()
 //add_item_and_display_in_array()

 //remove_dup_items_from_arr()
 //removeDuplicates()
 //First_is_1st_second_is_2nd()
 //find_leap_yrs_in_range_of_years()
 //shuffle_an_array()
 //sum_of_index_value_of_two_arr()j
 //union_of_2_arr()
 //to_remove_nan_words_from_arr()
 //sort_based_on_object_value() '''''STUDY SORTING METHODS AND WRITE AGAIN''''
 //addition_of_2_no_equal_target_print_index()
 //longest_common_substr_in_set_of_str()
 // pass_by_ref(a)

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
// STRING EXCERCISES ////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
	// t=false; var t=input_is_string('i am string'); console.log ('INPUT IS STRING:-'+t);
	// function_check_string_is_blank()
	// string_to_array()
	// var j=extract_specified_numbers_from_string(4,'seemAryan'); console.log(j);
	// string_to_abbreviation()
	// hide_last_name_from_emailid()
	// parametrize_a_string()
	// first_letter_capitalize()
	// first_letter_capi_of_each_word()
	// upper_to_lower_letters_in_str()
	// uncamelize()
	// insert_string_at_a_postion()
	// subset_of_string()



}

function check_if_an_array() {
		var a=[1, 2, [4, 0]];

		if (Array.isArray(a) && a.length > 0) {
			alert('a is an ARRAY:-'+a+' WITH NUMBER OF ELEMENTS='+a.length);
		} else {
			alert ('NOT AN ARRAY:-');
		}

}

function clone_an_array() {

	//var a=new Array(11,22,33,44,'ary','sim');
	var a=[1, 2, [4, 0]];

	var b=a;

	if (Array.isArray(b)) {

		console.log('ORIGINAL ARRAY IS:-',a);

		console.log('CLONED ARRAY IS:-',b,'THE TYPE OF ARRAY IS:-',Array.isArray(b));
	} else {
		console.log('NOT AN ARRAY AFTER CLONING ITS:-',typeof(b));
	}

}

function return_first_n_elements_of_an_array() {
		//var a=new Array(11,22,33,44,'ary','sim');
				var a=[1,2,3,4];

		console.log('ORIGINAL ARRAY IS:-',a);

		if (Array.isArray(a)) {
			//var n=prompt('ENTER NO OF ELEMENTS OF AN ARRAY U WANT TO SEE:-');
			var n=-3;
			if (n) {
				if (a.length > 0) {
					if (n < a.length) {
						var b=a.slice(0,n);

						console.log('THE FIRST',n,'th ELEMENT OF THE ARRAY:-= ',b);
						console.log('ORIGINAL ARRAY AFTER THE OPERATION:-',a);

					} else {
						console.log('THE INDEX U ENTERED IS NOT VALID ON AN ARRAY:-');
					}
				} else {
					console.log('ITS AN EMPTY ARRAY:-');
				}
			} else {
				console.log('THE INDEX U ENTERED IS NOT VALID :-');

			}
		}

}


function return_last_n_elements_of_an_array() {
		//var a=new Array(11,22,33,44,'ary','sim');
		var a=[7, 9, 0, -2];
		console.log('ORIGINAL ARRAY IS:-',a);

		if (Array.isArray(a)) {
			//var n=prompt('ENTER THE LAST FEW ELEMENTS OF AN ARRAY U WANT TO SEE:-');
			var n=3;
			if (n) {
				if (n < a.length) {
					var b=a.slice(0,n);

					console.log('THE LAST',n,'th ELEMENT OF THE ARRAY:-= ',b);
					console.log('ORIGINAL ARRAY AFTER THE OPERATION:-',a);

				} else {
					console.log('THE INDEX U ENTERED IS NOT VALID ON AN ARRAY:-');
				}
			} else {
				console.log('THE INDEX U ENTERED IS NOT VALID :-');

			}
		}

}

function join_all_elem_of_arr_into_str() {
	var a=["Red", "Green", "White", "Black"];
	var join_elem=':';
	console.log(a.join(join_elem));
}

function insert_dashes_between_2_evenNo() {
		num=254689;
		const str = num.toString();
		const result = [str[0]];
		console.log(num);

		for(var x=1; x<str.length; x++)
		{
		if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
		 {
		 	console.log('PUSHING BOTH - AND',str[x]);
		  result.push('-', str[x]);
		 }
		else
		 {
		console.log('PUSHING',str[x]);

		  result.push(str[x]);
		 }
		}
		console.log(result.join(''));

}


function most_freq_item_of_an_arr() {
	var a=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3,'a'];
	var max=0;
	for (var i=0; i < a.length; i++) {
		var cnt=0;
		var ind=0;
		for (var j=0; j < a.length; j++) {
			if (a[i]===a[j]) {
				cnt+=1;
				ind=j;
				val=a[i];
			}
		}
		if (max < cnt) {
			max=cnt;
			var out=new Array();
			out.push(val,ind,cnt);
		}

	}
	console.log('THE MOST FREQUENT ITEM IN AN ARRAY:-',out[0], 'APPEARING :-',out[2],' TIMES');
}

function swap_the_case_of_char_in_string() {
	var a='The Quick Brown Fox';

	var output=new Array();
	for (var i=0; i < a.length; i++) {
		if (a[i]==a[i].toLowerCase()) {
			output[i]=a[i].toUpperCase();
		} else if (a[i]==a[i].toUpperCase()) {
			output[i]=a[i].toLowerCase();
		}
	}
	output=output.join('');
	console.log('THE ACTUAL STRING IS:-',a);

	console.log('AFTER CONVERSION THE STRING IS:-',output.toString());
}


function print_char_of_nested_arr() {
	var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
	console.log('THE ARRAY IS:-',a);
	for (var i=0; i < a.length; i++) {
	console.log("Row",i);

	for (var j=0; j < a[i].length; j++) {
		console.log('"',a[i][j],'"');
	}
	console.log('------------------');
	}

}

function sum_of_squares_of_numeric_vector() {
	var a=[0,1,2,3,4];
	var out=0;

	for(var i=0; i < a.length; i++) {
		out+=a[i]*a[i];
	}
	
	console.log(out);
	

}

function sum_and_prod_of_an_arr_of_int() {
	var a=[1,2,3,4,5,6];
	var sum=0, prod=1;

	for(var i=0; i < a.length; i++) {
		sum+=a[i];
		prod*=a[i];
	}
	
	console.log('SUM:-',sum,'PROD:-',prod);
	

}

function add_item_and_display_in_array() {

	function add(x) {
		var inpId=document.getElementById('inpId');
		console.log(inpId);
		var v=inpId.value;
		a.push(v);
		inpId.value='';
		console.log('ADDED TO TEXTAREA:-',v,' ARRAY NOW :-',a);

	}

	function show() {
		var b=document.body;
		console.log('ARRAY A IN show:-',a);

		for(var i=0; i < a.length; i++) {
			var out='ELEMENT ';

			var p=document.createElement('p');
			out+=parseInt(i)+'='+a[i];
			var t=document.createTextNode(out);
			p.appendChild(t);
			b.appendChild(p);



		}

	}
	var inp=document.createElement('INPUT');
	var a=new Array();
	inp.setAttribute('type','text');
	inp.id='inpId';
	inp.style.width='200px';
	inp.style.height='30px';

	var btn=document.createElement('button');
	btn.style.width='60px';
	btn.style.height='30px';
	var text=document.createTextNode('ADD');
	btn.addEventListener('click',function() {
		add(this);		

	});
	btn.appendChild(text);



	var dis=document.createElement('button');
	dis.style.width='100px';
	dis.style.height='30px';
	var text=document.createTextNode('DISPLAY');
	dis.addEventListener('click',function() {
		show()
	});
	dis.appendChild(text);

	var b=document.body;

	b.appendChild(inp);
	b.appendChild(btn);
	b.appendChild(dis);
	var br=document.createElement('hr');
	br.style.width='400px';
	br.style.margin='10px 0px';
	b.appendChild(br);




}

function remove_dup_items_from_arr() {
	var a=[1,2,3,'sim','ary',10,'aryan','ary',3];
	var dup=new Array();
	console.log('ORIGINAL ARRAY:-',a);

	for (var i=0; i < a.length; i++) {
		for (j=i+1; j < a.length; j++) {
			if (a[i]==a[j]) {
				dup.push(a[j]);
				console.log('NEW Item ADDED:-',a[j]);
				break;
			} 

		}
	}
	console.log('DUP ARRAY:-',dup);
	for (var i=0; i < dup.length; i++) {
			for (var j=0; j < a.length; j++) {
				if (dup[i]==a[j]) {
					console.log('DELETE NOW:-',dup[i]);
					a.splice(j,1);
					console.log('NEW ARRAY AFTER DELE:-',a);
					break;
				}
			}

	}
	console.log('ARRAY WITH NO DUP ELEMENTS:-',a);
}


function removeDuplicates() {
 var num = [1,2,3,'sim','ary',10,'aryan','ary',3];
 	console.log('ORIGINAL ARRAY:-',num);

 var  noDup=new Array();

 for (i in num) {
 	if (noDup.indexOf(num[i])==-1) {
 		noDup.push(num[i]);
 	}
 }
 
 console.log('ARRAY WITH NO DUP ELEMENTS:-',noDup);


}

function First_is_1st_second_is_2nd() {
	var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
	var o = ["th","st","nd","rd"];
	var out=''
	console.log('COLOR ARRAY:-',color);
	for (var i=0; i < color.length; i++) {
		for (var j=0; j < o.length; j++) {
			switch(i) {
				case 0: 
					if (o[j]=='st') {
						out=String(i+1)+'st'+' CHOICE IS :-'+color[i]
						console.log(out); 
					}
					break;

				case 1:  
					if (o[j]=='nd') {
						console.log(String(i+1),'nd','CHOICE IS :-',color[i]); 
					}
					break;
				case 2:  
					if (o[j]=='rd') {
						console.log(String(i+1),'rd','CHOICE IS :-',color[i]); 
					}
					break;

				default :
					console.log(String(i+1),'th','CHOICE IS :-',color[i]); 
					break;


			}
		}
	}
}

function find_leap_yrs_in_range_of_years() {
	var start=1800;
	var end=1910;

	console.log('LEAP YEAR IN THE RANGE:-',start, ' AND ',end);
	for(var i=start; i < end; i++) {
		if (i % 4 == 0) {
			if (i % 100==0) {
				if (i % 400==0) {
					console.log(i,'IS A LEAP YEAR');
					continue;
				} 
			} else {
				console.log(i,'IS A LEAP YEAR')
				continue;
			}

		} 
	}

}

function shuffle_an_array() {
	var a = [1,2,3,4,5,6,7,8,9];
	var min=a[0];
	var max=a[0];
	for (i in a) {

		if (a[i] > max) {
			max=a[i];
		} else if (a[i] < min) {
			min=a[i];
		} 

	}

	console.log('THE ARRAY:-',a);

	console.log('THE MAX NO:-',max,' AND THE MIN NO:-',min);
	var rand=0;
	var n=new Array();
	while(n.length != a.length) {
		rand=Math.floor(Math.random() * (max-min+1) + min);
		if (n.indexOf(rand)==-1) {
			n.push(rand)
		}

	}

	console.log('THE SHUFFLED ARRAY:-',n);

}


function sum_of_index_value_of_two_arr() {
	var array1 = [1,0,2,3,4];
	var array2 = [3,5,6,7,8,13];

	var out=new Array();
	if (array2.length > array1.length) {
		for (var i=0; i < array2.length; i++) {
				if (array1[i]) {
					out.push(array2[i]+array1[i]);
				} else {
					out.push(array2[i]);

				}
		}

	} else {

		for (var i=0; i < array1.length; i++) {
				if (array2[i]) {
					out.push(array2[i]+array1[i]);
				} else {
					out.push(array1[i]);

				}
		}

	}

	console.log('ORIGINAL ARRAY A:-',array1);
	console.log('ORIGINAL ARRAY B:-',array2);
	console.log('FINAL OUT:-',out);

}

function union_of_2_arr() {
	var a=[1,2,3];
	var b=[100,2,1,10];
	var out=new Array();
	var dup=false;
	for (var i=0; i < a.length; i++) {
		for (var j=0; j < b.length; j++) {
			if (a[i]==b[j]) {
				dup=false;
				break;
			} else {
				dup=true;
			}
		}
		if (dup) {
			out.push(a[i]);
		}
	}

	for (i in b) {
		out.push(b[i]);
	}

	console.log('ORIGINAL ARRAY A:-',a);
	console.log('ORIGINAL ARRAY B:-',b);
	console.log('UNINON ARRAY:-',out);
}


function to_remove_nan_words_from_arr() {
	var a=[NaN, 0, 15, false, -22, '',undefined, 47, null];
	var b=new Array();

	for (i in a) {
		if (Number(a[i])) {
			b.push(a[i]);
		}
	}

	console.log('THE NEW ARRAY:-',b);
}

function sort_based_on_object_value() {
	var library = [ 
	   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

   
   	function compare(x,y) {
   		if (x.title < y.title) {
   			return -1
   		} else if (x.title > y.title) {
   			return 1
   		}
   	}
   	console.log(library.sort(compare))
	}


function addition_of_2_no_equal_target_print_index() {
	var a=[10,20,10,40,50,30,70];
	var target=50;
	console.log('ORIGINAL ARRAY A:-',a);
	for (var i=0; i < a.length; i++) {
		for (var j=i+1; j < a.length; j++) {
		if (a[i]+a[j]==50) {
			console.log('ADDITION OF :-',a[i],a[j],' = 50. ITS INDICES ARE:-',i,j);
		}
		}
	}
}

function longest_common_substr_in_set_of_str() {
	var target='SQLTutorial';
	var a='SQLInjection';
	var cnt=0
	for (var i=0 ; i < a.length; i++) {
			if (a[i]==target[i]) {
				cnt+=1;
				console.log(cnt,a[i]);
			}		
	}
	console.log(a,':-PRESENT IN ',target,':',cnt,' times ');	
}

function pass_by_ref(a) {
	console.log('VALUE OF THIS KEYWORD:-'+ this);
	console.log('intial value of a:-'+a);
	a[0]=100;
	console.log('changed value of a:-'+a);


}

var b=[10,11,12];
console.log('intial value of b:-'+b);
pass_by_ref(b);
// value of b is also changed coz of pass by ref.
console.log('changed value of b:-'+b);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
// STRING EXCERCISES ////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

function input_is_string(inp) {

	if (typeof(inp)=='string') {
		return true;
	} else {
		return false;
	}

}

function function_check_string_is_blank() {
	var inp=' ';
	if (inp.length > 0) {
		console.log('STRING IS NOT BLANK');
	} else {
		console.log('STRING IS BLANK');

	}
}

function string_to_array() {
	var inp='lets go to gym' ;
	var arr= inp.split(' ');
	if (Array.isArray(arr)) {
		console.log(inp+' IS NOW AN ARRAY:-'+arr)
	} else {
		console.log('not an array still');
	}

}

function extract_specified_numbers_from_string(inp,s) {
	console.log('STRIN IS:='+s);
 	if(inp <= s.length) {
 		return ('NEW STRING IS'+s.substr(0,inp));
 	} else {
 		return ('inputted number is greater than string length');
 	}
}

function string_to_abbreviation() {
	var inp='aryan sharma';
	console.log (inp.substr(0,inp.indexOf(' ')+2));
}

function hide_last_name_from_emailid() {
	var a='xyz_abc223@gmail.com' 
	var end=a.search(/@/);
	var st=	a.search('_');
	var b=a.slice(a.search('_'),a.search(/@/));
	console.log(a.replace(b,'...'));
}

function parametrize_a_string() {
		var inp='aryan 8133 seema 8051';
		var b=inp.replace(/ /g,'-');
		console.log(b.toUpperCase());

}
function first_letter_capitalize() {
		var inp='aryan 8133 seema 8051';
		console.log(inp.charAt(0).toUpperCase()+inp.substr(1,inp.length+1));

}

function first_letter_capi_of_each_word() {
		var inp='aryan 8133 seema 8051';
		var arr=inp.split(' ');
		var c='';
		for (var i=0; i < arr.length; i++) {
			b=arr[i].toString();
			c=c+b.charAt(0).toUpperCase()+b.substr(1,b.length+1)+ ' ';
		}	
		console.log(c.trim()+' '+ inp.length+' '+c.trim().length);
}

function upper_to_lower_letters_in_str() {
	var inp='This iS a sTrInG';
	var out='';
	for (var i=0; i < inp.length; i++) {
		if (inp.charAt(i).charCodeAt() < 97) {
			out+=inp.charAt(i).toLowerCase();
		} else {
			out+=inp.charAt(i).toUpperCase();
		}
	}
	console.log('inp:-'+inp+ ' AND OUT:-'+ out);
}


function uncamelize() {
	var a='helloWorldFromAryan'; 
	var delim='-';
	var out=''
	for (var i=0; i < a.length; i++) {
		if (i > 0) {
			if ((a.charAt(i).charCodeAt() > 64) && (a.charAt(i).charCodeAt() < 91)) {
				out+=delim+a.charAt(i).toLowerCase();
			} else {
				out+=a.charAt(i);
			}
		} else {
			out=a.charAt(i);
		}
	}
	console.log('inp:-'+a+ ' AND OUT:- '+ out);
}


function insert_string_at_a_postion() {
		var a='hello World From Aryan'; 
		var pos=17;
		var sub='seema ';
		var b=a.substr(0,pos)+sub+a.substr((pos),a.length);
		console.log(b);

}
function subset_of_string() {
	var a='dog';
	var arr=new Array();
	for (var i=0; i < a.length; i++) {
		var out=''
		for (var j=i; j < a.length; j++) {
					out+=a.charAt(j);
					alert(j+':'+a.charAt(j)+':'+out);
					if (arr.indexOf(out)==-1) {
						arr.push(out);
						alert('arr:-'+arr);
			}

		}
	}
	alert(arr);
}

// BELOW FUNCTION RETURNS FUNCTION WHEN CALLED.

function makeMultiplier(multiplier) {
				console.log('INSIDE makeMultiplier');

	var func = function (no) {
			console.log('INSIDE FUNC:-'+multiplier);
			return multiplier*no;
	}
	return func;

}

var triple=makeMultiplier(10); // triple is a function
console.log('triple:- '+triple(3));

var double=makeMultiplier(10);
console.log('double:- '+double(2));

// FOLLOWING CODE PASSES FUNCTION AS AN ARGUMENT.
function doMathsOperation(no,operation) {
	console.log('INSIDE doMathsOperation');

	return operation(no);
}

console.log(doMathsOperation(2,double));



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
// OBJECT EXCERCISES ////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
 // list_prop_of_obj();
// delete_prop_from_obj();
//div_object();
	// array_of_obj()
	calculate_vol_of_cylinder()
 // find_subset_of_string()
 // create_a_clock_update_every_sec()
// object_to_list_of_value_key_pair()
// new_obj_value_is_key_and_key_is_value()
function list_prop_of_obj() {
		var apt= {
			aptname : 'pt',
			flatno : '8133',
			towerno : 8,
			location : 'blr',
			func : function() {
				return this.aptName + this.flatno;
			}
		};
		var a=new Array();

		// FOLLOWING ARE THE 3 DIFFERENT WAYS TO ACCESS THE PROPERTIES IN OBJECT.
		console.log(apt.aptname+':'+apt.flatno+':'+apt.towerno+':'+apt.location);
		console.log('prop of object:-'+ Object.keys(apt)+ ' values of obj:- ' +
		Object.values(apt)+ ' length:-'+Object.keys(apt).length);
		console.log('THIS WILL PRINT ALL METHODS AND PROPERTIES OF AN OBJECT:-' +
			Object.getOwnPropertyNames(a));
		for (keys in apt) {
			console.log(keys);
			a.push(keys);

		}

		console.log('LENGTH OF OBJECT:-'+a.length);
}

function delete_prop_from_obj() {
	var apt= {
			aptname : 'pt',
			flatno : '8133',
			towerno : 8,
			location : 'blr',
		};

		console.log('BEFORE DELETING THE PROP:-'+Object.keys(apt));
		delete(apt.towerno);
		console.log('AFTER DELETING THE PROP:-'+Object.keys(apt));
		console.log(apt.length);
		for (x in apt) {
			console.log('x:-'+x+' and apt[x]:-'+ apt[x]);
		}
}

function div_object() {
		function createDiv(name,width,height,background,margin,padding,color) {
			this.Name=name;
			this.Width=width;
			this.Height=height;
			this.Background=background;
			this.Margin=margin;
			this.Padding=padding;
			this.Color=color;
			this.create=function() {
				this.Name=document.createElement('div');
				this.Name.style.width=this.Width;
				this.Name.style.height=this.Height;
				this.Name.style.background=this.Background;
				this.Name.style.margin=this.Margin;
				this.Name.style.padding=this.Padding;
				this.Name.style.color=this.Color;
				this.Name.style.boxSizing='border-box';
				return this.Name;
			}

			this.text=function(t) {
				var textNode=document.createTextNode(t);
				return textNode;
			}
		}

		var mainCont=new createDiv('mainCont','300px','300px','red','10px','0px','white');
		var smallCont=new createDiv('smallCont','100px','100px','black','30px','20px','white');

		var b=document.getElementById('outerCont');
		var big=mainCont.create();
		var small=smallCont.create();
		var bigt=mainCont.text('THIS IS BIG DIV');
		var smallt=smallCont.text('THIS IS SMALL DIV');

		big.appendChild(bigt);
		big.appendChild(small);

		small.appendChild(smallt);
		b.appendChild(big);
}

function array_of_obj() {
	var Library=[
		{
			movie: 'DDLJ',
			actor : 'SRK',
			year : '1990'
		},
		{
			movie:'SHOLAY',
			actor : 'BigB',
			year : '1978'
		},
		{
			movie : 'SANJU',
			actor : 'RANBIR',
			year : '2018'
		}
	]

	for (var i=0; i < Library.length; i++) {
			console.log('"MOVIE:-"'+Library[i].movie +' "WAS RELEASED IN" ' + 
				Library[i].year + ' "STARRING ACTOR" '+ Library[i].actor)
	}


}

function calculate_vol_of_cylinder() {
	function vol_of_cylinder(rad,height) {
		this.radius=rad;
		this.height=height;
		this.vol=function() {
			return 3.1415*this.radius*this.radius*this.height
		}
	}

	var cylinder=new vol_of_cylinder(5,10);
	console.log(cylinder.vol()); 
	console.log('KEYS:-'+Object.keys(cylinder));
	for ( let i in cylinder) {
		console.log(i+':'+cylinder[i]);
	}



}


function find_subset_of_string() {
	function subset_str(string) {
		this.s=string;
		this.subset=function() {
		this.arr=new Array();
			for (var i=0; i < this.s.length; i++) {
				this.out='';
				for (var j=i; j < this.s.length; j++) {
					this.out+=this.s.charAt(j);
					if (this.arr.indexOf(this.out)==-1) {	
						this.arr.push(this.out);
					} 
				}
			}
			return this.arr
		}
	}

	var s=new subset_str('aryan');
	var j=s.subset();
	console.log(j);
}


function create_a_clock_update_every_sec() {
	function clock() {
		this.Time=function() {
			this.d=new Date();
			console.log(this.d.getHours()+':'+this.d.getMinutes()+':'+this.d.getSeconds());
		}
	}

	var c=new clock();
	setInterval(c.Time,1000);
}


function object_to_list_of_value_key_pair() {
		function createDiv(name,width,height,background,margin,padding,color) {
			this.Name=name;
			this.Width=width;
			this.Height=height;
			this.Background=background;
			this.Margin=margin;
			this.Padding=padding;
			this.Color=color;
		}

        var mainarr=[];
        var obj=new createDiv('mainCont','300px','300px','red','10px','0px','white')
        for (key in obj) {
        	 var a=[];
        	a.push(key);
        	a.push(obj[key]);
        	mainarr.push(a);
        }

        console.log(mainarr);

 }

 function new_obj_value_is_key_and_key_is_value() {

 	function createDiv(name,width,height,background,margin,padding,color) {
			this.Name=name;
			this.Width=width;
			this.Height=height;
			this.Background=background;
			this.Margin=margin;
			this.Padding=padding;
			this.Color=color;
		}

        var obj=new createDiv('mainCont','300px','300px','red','10px','0px','white');
        var obj1=new Object();

        for (key in obj) {
        	k=obj[key];  
        	obj1[k]=key;
        }

        for (key in obj) {
        	if (key=='Width') {
        		console.log('CONTAINS PROPERTY:-'+key);
        	}
        }

        console.log('OLD OBJECT:-'+' KEYS:-'+Object.keys(obj)+' \n VALUES ARE:- '+Object.values(obj));
        console.log('NEW OBJECT:-'+ ' KEYS:-'+ Object.keys(obj1)+' \n  VALUES ARE:- '+Object.values(obj1));


 }

var x=2
f1();
function f1() {
var a=5;
		// console.log('value of a='+a);

f2();

	
}

function f2() {
		// var a='inside f2 scope';
		console.log('value of x='+x+5);
	}

function makeMulty(multiplier,no) {
			// console.log(multiplier + no);
   this.m=multiplier;
   this.n= no;
	this.func = function () {
		return(this.m + this.n);
	}
	

}
var a=new makeMulty(10,3);

// console.log(a.func);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
// ARROW FUNCTION EXCERCISES //////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisibleByThrreeES5 = array.filter(function (v){
  return v % 3 === 0;
});

console.log('ES5:-'+divisibleByThrreeES5);

//ES6

var divisibleByThrreeES5=array.filter(v=> v%3==0);
console.log('ES6:-'+divisibleByThrreeES5);


const smartPhones=[
	{'name': 'Note8', 'Price':50000},
	{'name': 'Note7', 'Price':40000},
	{'name': 'Note6', 'Price':40000}
]

smartPhones.forEach((val,ind,arr)=>{
	console.log(`${val.name} HAS COST OF =  ${val.Price}`);
});

