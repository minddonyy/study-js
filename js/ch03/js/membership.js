window.onload =init;
 function init(){
  document.getElementById('myform').onsubmit = calculate;
 }
 function calculate(){
  var type=document.getElementById('type').value;
  var years=document.getElementById('years').value;
  var cost;

  if (type!=null&& (years>=1)){
   switch(type){
	case 'basic':
	 cost=10000;
	break;
	case 'premium':
	 cost=15000;
	break;
	case 'gold':
	 cost=20000;
	break;
	case 'platinum':
	 cost=25000;
	break;
   }
   cost*=years;
   if (years>=2){
	cost*=0.8; //80%
   }
	document.getElementById('cost').value=cost;
  }
  else{
   document.getElementById('cost').value="유효한 값을 다시 입력하세요!";
  }
  return false;
 }
