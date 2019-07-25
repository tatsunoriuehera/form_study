  function Weightcalc(myform){
    var height,weight;
    height = Number(myform.height.value);
    if(myform.sex[0].checked){
      weight=(height-80)*0.7;
    }else{
      weight=(height-70)*0.6;
    }
    //weight = (height-100)*0.9;
    myform.weight.value=weight;
  }

function openWin(){
  var win=window.open("http://google.co.jp","","resizable=no,width=500,height=500");
}
