function increase(id){

	var r=document.getElementById(id);
	var element=r.getElementsByClassName("ranged");
	var max=element[0].getAttributeNode("max").value;

	var n=Number(element[0].value);
	//price-cart
	//total_tk

	if(n!=max)
{
	element[0].value=n+1;

}

}
function decrease(id){

	var r=document.getElementById(id);
	var element=r.getElementsByClassName("ranged");
	var min=element[0].getAttributeNode("min").value;

	var n=Number(element[0].value);

	if(n!=min)
{
	element[0].value=n-1;
}

}


function disablebtn(btntype){
	var home=document.getElementById("homeset");
	var office=document.getElementById("officeset");
	
	if (btntype=="home") {
	home.disabled = true;
	office.disabled = false;
	}

	if (btntype=="office") {
	home.disabled = false;
	office.disabled = true;
	}

}

var parentcheck=document.getElementById("check-prod");
var childcheck=document.getElementById("cartrow");
if(parentcheck.checked){
	alert("checked");
 var ele= childcheck.getElementsByClassName("prod-check");
  for (var i =0 ; i <ele.length - 1; i++) {
  	ele[i].checked=true;
  }

}

