window.onload=function() {
	var HomeLink=document.getElementById("HomeLink");
	var ShopLink=document.getElementById("ShopLink");
	var BioLink=document.getElementById("BioLink");
	var ContactLink=document.getElementById("ContactLink");
	var PFolioLink=document.getElementById("PFolioLink");


	if (window.location.href=="file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/Website_samples/YehudadevirDotCom/page2.html") {
		ShopLink.style.color="red";
		HomeLink.style.color="black";
		BioLink.style.color="black";
		ContactLink.style.color="black";
		PFolioLink.style.color="black";

	} else if (window.location.href=="file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/Website_samples/YehudadevirDotCom/home.html") {
		// alert(window.location.href);
		ShopLink.style.color="black";
		HomeLink.style.color="red";
		BioLink.style.color="black";
		ContactLink.style.color="black";
		PFolioLink.style.color="black";
	}
};

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
