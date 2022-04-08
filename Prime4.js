//Даны два целых числа A и B (A < B). 
//Вывести в порядке возрастания все целые числа, расположенные между A и B 
//(включая сами числа A и B), а также количество N этих чисел.

function Bar( A, B ) {
	for ( var i = A; i <= B; i++ ) {
		document.writeln(  i );
}
 N=B-A+1;
 document.writeln( "N=", N );
}

A = prompt(" Введите целое число A ","");
B = prompt(" Введите целое число B ","");

A=Number(A);
B=Number(B);

if ( A < B ) {
	Bar( A,B );
} else if ( isNaN(A) || isNaN(B) ) {
	alert( "Ошибка, неправильно введены данные" );
} else {
	alert( "Введите такое B, чтобы было больше A (A<B)" );
}