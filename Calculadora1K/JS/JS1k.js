

let pantalla = document.querySelector('#screen-result');

let value;
coma=0;
op=0;
function getData(ref)
{ 
  
   value =ref.value;
   if(value=="1"|| value=="2" || value=="3" || value=="4" || value=="5"|| value=="6"|| value=="7"|| value=="8"|| value=="9"|| value=="0"){
    pantalla.value+=value;
    op=0;
  }
  else if(value=="."&& coma==0){//si escribimos una coma decimal pòr primera vez
    pantalla.value+=value;
    coma=1;
    op=1;
  }
  else if(value=="." && coma==1){} //si intentamos escribir una segunda coma decimal no realiza ninguna acción.

 else if ((value =="-" || "+" || "*" || "/" ) && op==0)
 {
     pantalla.value+=value;
     coma=0;
     op=1;
  }
    
}
  



function clean()
{
     pantalla.value = "";
     coma=0;
    
}

function calculadora()
{
     try{
         pantalla.value = eval(pantalla.value);
         if (pantalla.value % 1 != 0) {
            coma=1;
        } else {
         coma=0;
        }
     }
     catch(error){
         pantalla.value = 'Error';
         setTimeout(() =>{clean();},500);
     }

}
