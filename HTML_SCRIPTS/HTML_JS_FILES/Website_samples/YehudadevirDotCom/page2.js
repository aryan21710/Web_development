window.onload=function() {
	var HomeLink=document.getElementById("HomeLink");
	var ShopLink=document.getElementById("ShopLink");
	var BioLink=document.getElementById("BioLink");
	var ContactLink=document.getElementById("ContactLink");
	var PFolioLink=document.getElementById("PFolioLink");
	var header=document.getElementById("header");


	header.addEventListener('click', function() {
		window.location.href="file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/Website_samples/YehudadevirDotCom/home.html";
	});

	
	if (window.location.href=="file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/Website_samples/YehudadevirDotCom/page2.html") {
		ShopLink.style.color="red";
		HomeLink.style.color="black";
		BioLink.style.color="black";
		ContactLink.style.color="black";
		PFolioLink.style.color="black";

	} else if (window.location.href=="file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/Website_samples/YehudadevirDotCom/home.html") {
		ShopLink.style.color="black";
		HomeLink.style.color="red";
		BioLink.style.color="black";
		ContactLink.style.color="black";
		PFolioLink.style.color="black";
	}


};


function AddImgCont(x) {
		var btnId=x.id;
		var nodeId=document.getElementById("ImageMainContainer");
		var mainContId=document.getElementById("MainCont");
		var imgContId= document.createElement("div");
		var comp=window.getComputedStyle(nodeId);
		var topPos=comp.getPropertyValue("top");
		// CREATE A NEW IMAGE CONTAINER TO KEEP IMAGES IN IT.
		imgContId.id="ImageMainContainer";
		imgContId.style.display="flex";
		imgContId.style.flexDirection="row";
		imgContId.style.width="84%";
		imgContId.style.height="1060px";
		// imgContId.style.marginTop="0px";
		// imgContId.style.marginBottom="0px";
		imgContId.style.position="absolute";
		imgContId.style.cursor="pointer";
		// imgContId.style.border="1px solid red";
		var newPos=parseInt(topPos)+1070;
		// alert(x+":"+topPos+":"+newPos);
		imgContId.style.top=String(newPos)+"px"; //1130px down from ImageContainer Position
		imgContId.style.left="100px";

		var imgNo=0;
		// CREATE 4 COLS AND 3 ROWS INSIDE EACH COLUMN.
		for (var i=0; i < 4; i++) {
				var colId=document.createElement("div");
				colId.id="col1";
				colId.style.flex="15%";
				colId.style.width="15%";
				colId.style.margin="10px";
				colId.style.padding="0";
				for (var j=0; j< 3; j++) {
					var divOfImg=document.createElement("div");
					//divOfImg.id="divIdOfImg"+String(i)+String(j);
					divOfImg.id="divIdOfImg";

					var divIdOfImg=divOfImg.id;
					divOfImg.style.width="250px";
					divOfImg.style.height="250px";
					divOfImg.style.position="relative";
					// divOfImg.style.border="1px solid red";

					var imgElm=document.createElement("img");
					imgElm.style.width="250px";
					imgElm.style.height="250px";
					imgElm.style.verticalAlign="Middle";
					imgElm.style.padding="0";
					// imgElm.style.border="1px solid blue";
					imgElm.src="C\:\\Users\\aryan\\Desktop\\CODING\\HTML\_SCRIPTS\\sketches\\final\\sketch" + imgNo + "\.jpg";
					divOfImg.appendChild(imgElm);

					// ADD ONMOUSEOVER AND ONMOUSELEAVE EVENTS;

					 divOfImg.addEventListener("mouseover", function() {
					    	if(event.type=="mouseover") {
					    				show(this);
					    	}
					});

					 divOfImg.addEventListener("mouseleave", function() {
					    	if(event.type=="mouseleave") {
					    				hide(this);
					    	}
					});

					colId.appendChild(divOfImg);

					// CREATE PARA FOR PRICE.

					var priceNode=document.createElement('p');
					priceNode.id='price';
					priceNode.style.textAlign="center";
					priceNode.style.fontSize="20px";
					priceNode.style.color = "red";
					priceNode.style.fontWeight="700";
					priceNode.style.paddingBottom="25px";
					var priceText=document.createTextNode('$100.00');
					priceNode.addEventListener("mouseover", function() {
					    	if(event.type=="mouseover") {
					    				show(this);
					    	}
					})

					priceNode.addEventListener("mouseleave", function() {
					    	if(event.type=="mouseleave") {
					    				hide(this);
					    	}
					});
					priceNode.appendChild(priceText);


					// CREATE PARA FOR SKETCHNAME/DESC.

					var descNode=document.createElement('p');
					descNode.id='desc';
					descNode.style.textAlign="center";
					descNode.style.fontSize="22px";
					descNode.style.color = "black";
					descNode.style.fontWeight="700";
					descNode.style.paddingTop="25px";
					descNode.style.paddingBottom="8px";
					var descText=document.createTextNode('This is My Sketch0');
					descNode.appendChild(descText);

					descNode.addEventListener("mouseover", function() {
					    	if(event.type=="mouseover") {
					    				show(this);
					    	}
					});

					descNode.addEventListener("mouseleave", function() {
					    	if(event.type=="mouseleave") {
					    				hide(this);
					    	}
					});

				

					colId.appendChild(descNode);
					colId.appendChild(priceNode);
					imgNo+=1;


			    }
			 	imgContId.appendChild(colId);
		}

		// DELETE OLD LAODMORE BUTTON AND CREATE AND APPEND A NEW LOADMORE BTN.

		var loadmore=document.getElementById("LoadMore");
		var comp=window.getComputedStyle(loadmore);
		var topPos=comp.getPropertyValue("top");
		// alert(topPos);
		while(loadmore.firstChild) {
				loadmore.removeChild(loadmore.firstChild);
		}

		var loadMore=document.createElement('div');
		loadmore.id="LoadMore"
		loadmore.style.position="absolute";
		var newPos=parseInt(topPos)+1060;
		// alert(newPos);
		loadmore.style.top=String(newPos)+ "px"; //1040px down from earlier loadmore.
		loadmore.style.left="530px";
		loadmore.style.margin="10px";

		var btn=document.createElement("BUTTON");
		btn.id="btn";
		btn.style.color="white";
		btn.style.fontSize="20px";
		btn.style.textAlign="center";
		btn.style.padding="5px";
		btn.style.background="black";
		btn.style.width="300px";
		btn.style.height="40px";
		btn.addEventListener('click',function() {
			if (event.type=="click") {
				AddImgCont(this);
			}
		});
		var text=document.createTextNode("LOAD MORE");
		btn.appendChild(text);
		loadmore.appendChild(btn);
		mainContId.insertBefore(imgContId,nodeId);
		mainContId.appendChild(loadmore);					

	}


/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/



/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/

	function show(x) {
		var parNodeId=x.id;
		// alert(parNodeId);
		if (parNodeId=="divIdOfImg" ) {
			var parNode=x;
		} else if (parNodeId == "desc" || parNodeId == "price") {
				while (parNodeId != "divIdOfImg") {
					x=(x.previousSibling);
					parNodeId=x.id;
				}
		}
		
		
		var nodeId=document.getElementById("hoverView");
		// x.style.border="1px solid blue";
		if (!nodeId) {
			var node=document.createElement("p");
			var text=document.createTextNode("QUICK VIEW");
			node.id="hoverView";
			node.style.position="absolute";
			node.style.bottom="0px";
			node.style.color="black";
			node.style.background="rgb(255,255,255,0.5)";
			node.style.width="100%";
			node.style.height="50px";
			node.style.margin="0";
			node.style.padding="15px";
			node.style.textAlign="center";
			node.style.fontSize="20px";
			node.appendChild(text);
			//alert(node.id + ' IS APPENDED TO '+ x.id);
			x.appendChild(node);

	
		}
	}
	


/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/

	function hide(x) {

		var parNodeId=x.id;
		var hoverId=document.getElementById("hoverView");

		//alert(parNodeId);
		if (parNodeId=="divIdOfImg") {
			var parNode=x;
			parNode.removeChild(hoverId);
		} else {
				while (parNodeId != "divIdOfImg") {
					x=(x.previousSibling);
					parNodeId=x.id;
				}
			var parNode=x;
			parNode.removeChild(hoverId);

		}
	
	}

/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/


	function expand(x) {
		var shpdrpdwn=document.getElementById("ulShopListDrpDwn");
		var pfoliodrpdwn=document.getElementById("ulPortfolioDrpDwn");

		var shpliNode=shpdrpdwn.getElementsByTagName("li");
		var pfolioliNode=pfoliodrpdwn.getElementsByTagName("li");

		for (var i=0 ; i < shpliNode.length; i++) {
			if (i > 0 ) {
	
			var shpANode=shpliNode[i].querySelector('a');
			shpANode.style.display="none";
	
			}
		}


		for (var j=0; j < pfolioliNode.length ; j++) {
			if (j > 0) {
	

			var pfolioANode=pfolioliNode[j].querySelector('a');
			pfolioANode.style.display="none";
			}
		}


		var ulnode=x.querySelector('ul');

		var ulnodeId=ulnode.getAttribute('id');
		// alert(nodeId);
		var liNode=ulnode.getElementsByTagName("li");
		for (var i=0; i < liNode.length; i++) {
			var aNode=liNode[i].querySelector('a');
			aNode.style.display="block";
		}
	}

/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/



	function shrink() {
		var shpdrpdwn=document.getElementById("ulShopListDrpDwn");
		var pfoliodrpdwn=document.getElementById("ulPortfolioDrpDwn");
		var shpliNode=shpdrpdwn.getElementsByTagName("li");
		var pfolioliNode=pfoliodrpdwn.getElementsByTagName("li");
		for (var i=0 ; i < shpliNode.length; i++) {
			if (i > 0 ) {
			var shpANode=shpliNode[i].querySelector('a');
			shpANode.style.display="none";
			}
		}
		for (var j=0; j < pfolioliNode.length ; j++) {
			if (j > 0) {
			var pfolioANode=pfolioliNode[j].querySelector('a');
			pfolioANode.style.display="none";
			}
		}
	}
