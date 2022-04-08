  var x=null; //основание 
  var n=null; //степень
  
// функция которая возводит x в степень n
 function pow(x, n) {
   var result=1;

   for (var i = 0; i < n; i++) {
	result*=x;
   }

   return result;
 }

x=prompt("Введите значение основания x=","");
n=prompt("Введите значение степени n=","");

document.writeln("x=",x);
document.writeln("n=",n);

//x=Number(x);
//n=Number(n);

if ( x == 0 && n == 0 ) {
  alert( "Вы ничего не ввели" );
} else if ( x == 0) { 
  alert(" При основании равное нулю значение ( при любой степени ) будет равняться 0" );
} else  if  ( n == 0 ) {
  alert( "Любое значение при нулевой степени будет равняться 1" );
}
  else  if  ( (isNaN(x)) || (isNaN(n)) ) {
  alert("Ошибка, неправильно введены данные");
}
 else { 
	alert( "Результат="+ pow(x, n) ); 
}