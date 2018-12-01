//UNCOMMENT THE CODE, AS ITS A TEST CODE FOR SOME SAMPLE
// JAVASCRIPT EXAMPLES. THIS WILL CHANGE THE LOOK AND BEHAVIOR
// OF LOGINFORM.HTML WEBPAGE.
var title=document.body
console.log(document);
console.log(document.all);
//document.title="dummy title";
//console.log(document.getElementById("header h1"));
var x=document.getElementById("header");
//x.innerHTML="<h2>THIS IS H2 </h2>"
console.log(document.links[0].href);

x.style.border="10px solid black";
var elem=document.createElement("p");
elem.setAttribute("class","c1");
elem.style.border="5px solid red";
var node=document.createTextNode('ADDED BY JAVASCRIPT');
elem.appendChild(node);
x.appendChild(elem);

console.log(document.all);

var plist=document.querySelectorAll("p");
console.log(plist.length);

var p1=document.querySelector("#id1");
console.log(p1.parentNode);

var inp=document.querySelector('input[type="button"]');

console.log(inp.parentNode);

var inp1=document.querySelector("#header p");
console.log(inp1);

var frm=document.forms["test"];
for (var i=0; i < frm.length; i++) {
    console.log(frm.elements[i].name);
}

console.log(document.querySelector("#header").nodeName);
console.log(document.querySelectorAll("p")[0].innerHTML);
//console.log(document.getElementById("p1id").childNodes[0].innerHTML);

var para=document.createElement("p");
var lineBreak=document.createElement("br")
var tnode=document.createTextNode("ADDED BY insertBefore FUNCTION");
para.style.color="orange";
para.style.fontSize="30px";
para.setAttribute("id", "paraId");
para.appendChild(tnode);

var p1Id=document.getElementById("p1id");
var head=document.getElementById("header");
head.insertBefore(lineBreak,p1Id);
head.insertBefore(para,p1Id);

lineBreak.parentNode.removeChild(lineBreak);
/*
var n=prompt('ENTER YOUR NAME:-');

if(n==null||n=="") {
  console.log('name not entered...')
} else {
  console.log('the name entered is:-' + n)
}
*/

/* BELOW CODE, WILL START THE ANIMATION. WILL CHANGE THE WIDTH OF THE MAIN CONTAINER DIV TO 900 AND WILL STOP.*/
function f1() {
  x1=document.querySelector("#container");
  comp=window.getComputedStyle(x1);
  w=comp.getPropertyValue("width");
  var pos = w.search("px");
  var end="px".length;
  var a= parseInt(w.slice(0,pos));

  if (a <= 900 && a >= 700 ) {
  //alert(b+"px");
    x1.style.width=a+1+"px";
  }

}

