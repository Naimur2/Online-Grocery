function showMod(){

	$('#confirm').modal('show');

}

function showModal(modalid){
  	$('#confirmd').modal('show');

}






var modal=document.getElementById('preview');





//name
function my1fun(){
	var p_name=document.getElementById('p_name');
	var prodname =modal.getElementsByClassName('product_name');
	prodname[0].innerHTML=p_name.value;
}

//weight
function my2fun(){
	var p_weight=document.getElementById('p_weight');
	var prodweight =modal.getElementsByClassName('product_weight');
	prodweight[0].innerHTML=p_weight.value;
}
// price
function my3fun(){
var p_price=document.getElementById('p_price');
var prodcurr =modal.getElementsByClassName('product_curr_price');
prodcurr[0].innerHTML=p_price.value;

}
