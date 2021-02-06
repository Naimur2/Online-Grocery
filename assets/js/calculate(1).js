


function calculatetotal(cartid,price){
var min=0;
var prodid=document.getElementById(cartid);
var a=price;
var qty=prodid.getElementsByClassName("quantity-input");

var b=Number(qty[0].value);

var tot=a*b;
var out=document.getElementById("totaltaka");
out.value=0;


var final=out.value;

if(b>min){
out.value=Number(final)+Number(tot);
min=b;
}
else if(b<min){
out.value=Number(final)-Number(tot);
min=b;
}





}





