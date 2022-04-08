  var x=null; //факториал
  
// функция которая находит факториал числа
 function factorial(x) {
   var result=1;

   for (var i = 0; i < x; i++) {
	 result=x*i;
   }

   return result;
 }

x=prompt("Введите значение основания x=","");

document.writeln("x=",x);

if ( x == "" ) {
  alert( "Вы ничего не ввели" );
} else if ( x == 0) { 
  alert(" !0=1 " );
} else  if  ( x == 1 ) {
  alert( " !1=1 " );
}
  else  if  ( (isNaN(x)) ) {
  alert("Ошибка, неправильно введены данные");
}
 else { 
	alert( "!"+x+"="+ factorial(x) ); 
}