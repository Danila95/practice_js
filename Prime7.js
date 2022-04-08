// Дано целое число N (> 0). Найти сумму
// 1 + 1/2 + 1/3 + … + 1/N
// (вещественное число). 

function Bar( N ) {
	var result=1;
	var count=N
	for ( var i = 1; i < count; i++ ) {
		result+=1/N;
		N=N-1;
}
	//result=Math.floor(result);
	document.writeln( result.toFixed(2)+";" );
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