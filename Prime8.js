//Дано целое число N (> 0). Найти сумму
//N^2 + (N + 1)^2 + (N + 2)^2 + … + (2·N)^2
//(целое число).

function Bar( N ) {
	var result=Math.pow(N,2);
	var count=N
	var result2=Math.pow(2*N,2)
	for ( var i = 1; i < count; i++ ) {
		result+=Math.pow((N+i),2);
		document.writeln( result+";" );
}	
	result=result+result2;
	document.writeln( result+";" );
	
	return 0;
}

N = prompt(" Введите значение N ","");

N=Number(N);

if ( N == 0 ) {
  alert( "Вы ничего не ввели" );
} else if ( N < 0 ) {
	alert( "N не может иметь отрицательное значение" );
} else if ( isNaN(N) ) {
	alert( "Ошибка, неправильно введены данные" );
} else {
	Bar( N );
}