//function used to increase the font size
function fontIncrease() {
	//reads font size using DOM
	var font = document.getElementById("changeFont").style.fontSize;
	//removes the 'px' string then makes it into integer type and adds 2
	var fontArray = font.split("px");
	var currentFont = parseInt(fontArray[0]);
	//the font will increase only if the font is less than 26 else an alert will be given
	if (currentFont < 26) {
		currentFont += 2;
		//then makes it into string again adn concatenates it with 'px'
		newFont = currentFont.toString();
		newFont += "px";
		document.getElementById("textFontSize1").innerHTML = currentFont;
		document.getElementById("changeFont").style.fontSize = newFont;
	} else {
		alert("maximum font size reached")
	}
}

//function used to decrease the font
function fontDecrease() {
	//reads the font size using DOM
	var font = document.getElementById("changeFont").style.fontSize;
		//removes the 'px' string then makes it into integer type and subtracts 2
	var fontArray = font.split("px");
	var currentFont = parseInt(fontArray[0]);
	//only if the font size is greater than 14 it can be decreased else an alert will be made
	if (currentFont > 14) {
		currentFont -= 2;
			//then makes it into string again adn concatenates it with 'px'
		newFont = currentFont.toString();
		newFont += "px";
		document.getElementById("textFontSize1").innerHTML = currentFont;
		document.getElementById("changeFont").style.fontSize = newFont;
	} else {
		alert("minimum font size reached")
	}
}

// this function is used for the menu
function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		document.getElementById("scrollingNav").style.transition = "background-color 0.3s ease-in";
		document.getElementById("scrollingNav").style.backgroundColor = "rgba(0,26,51,0.3)";
		document.getElementById("navlogo").style.display="inline";
		document.getElementById("navlogotext").style.display="inline";
	
	} 
	else {
		document.getElementById("scrollingNav").style.backgroundColor = "transparent";
		document.getElementById("scrollingNav").style.transition = "background-color 0.3s ease-out";
		document.getElementById("navlogo").style.display="none";
		document.getElementById("navlogotext").style.display="none";
	}
}

//this is used in the destinations folder in the sub navigation bar
//this is the destination in links
var pageArray = [
	"../Anuradhapura/anuradhapura.html",
	"../Galle/galle1.html",
	"../Hambantota/hambantota1.html",
	"../Hikkaduwa/hikkaduwa1.html",
	"../Jaffna/jaffna1.html",
	"../Kandy/kandy1.html",
	"../Nuwara Eliya/nuwareEliya.html",
	"../Polonnaruwa/polon1.html",
	"../Sigiriya/sigiriya1.html",
	"../Trincomalee/trinco1.html"
]
//this is used in the tours folder in the sub navigation bar
//this is the tours in links
var tourpageArray = [
	"../beach/beachtour.html",
	"../cultural/culturaltour.html",
	"../safari/safaritour.html",
	"../hill-country/hillcountrytour.html",
	"../luxury/luxurytour.html",
	
]
//a value will be passed onclick then using that as an index a the appropraite page will be loaded
function loadPage(index) {
	window.location.assign(pageArray[index]);
}
function loadPage1(index){
	window.location.assign(tourpageArray[index]);
}


function openMenu() {
	document.getElementById("mainNav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeMenu() {
	  document.getElementById("mainNav").style.width = "0";
	  document.getElementById("main").style.marginLeft= "0";
}

function readmoreFunction() {
	var spanmore = document.getElementById("spanmore");
	var textmore = document.getElementById("textmore");
	var buttontext = document.getElementById("readmorebutton");

	if (spanmore.style.display === "none") {
		spanmore.style.display = "inline";
		buttontext.innerHTML = "READ MORE"; 
		textmore.style.display = "none";
	} 
	else {
		spanmore.style.display = "none";
		buttontext.innerHTML = "READ LESS"; 
		textmore.style.display = "inline";
	}
}
