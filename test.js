window.onload = init;

function init() {
	 var mylabel = document.getElementById("test_label");
	console.log(localStorage.length);
	mylabel.value = localStorage.length;
	
	var myselect = document.getElementById("test_select");
	myselect.onchange = ItemSelect;
	
	var mybtn = document.getElementById("button");
	mybtn.onclick = ButtonCommit;
}

function ItemSelect(){
	var myselect = document.getElementById("test_select");
	var idx = myselect.selectedIndex;		
	console.log(myselect.options[idx].value);
}
/*
function ItemSelect(myselect){

	var idx = myselect.selectedIndex;		
	console.log(myselect.options[idx].value);
}
*/
function ButtonCommit(){
	console.log("ButtonCommit");
}
