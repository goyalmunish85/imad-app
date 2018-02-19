console.log('Loaded!');


var element = document.getElementById("main-text");

element.innerHTML = "new value";


var im = document.getElementById("madi");

var marginLeft = 0;
function marginRight(){
	marginLeft = marginLeft + 10;
	im.style.marginLeft = marginLeft +  "px";
}
im.onclick = function(){
	var interval = setInterval(marginRight,100);
	
}