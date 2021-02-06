function showDel()
{
var parentcheck=document.getElementById("check-prod");
var childcheck=document.getElementById("cartrow");
if(parentcheck.checked){


 var ele= childcheck.getElementsByClassName("prod-check");
  for (var i =0 ; i <ele.length; i++) 
  {
  	ele[i].checked=true;
  }
}
  else if(!parentcheck.checked)
  {

 var ele= childcheck.getElementsByClassName("prod-check");
  for (var i =0 ; i <ele.length; i++) 
  {
  	ele[i].checked=false;
  }

}


}