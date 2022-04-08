//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, …, 10 кг конфет.

function Bar( A ) {
	var result=1;
	for ( var i = 1; i < 10; i++ ) {
		result=A*i;
		document.writeln( i+" кг.="+ result );
}
	return 0;
}

A = prompt(" Введите стоимость 1 кг. конфет ","");

A=Number(A);

if ( A == 0 ) {
  alert( "Вы ничего не ввели" );
} else if ( A <= 0 ) {
	alert( "Цена не может иметь нулевое или отрицательное значение" );
} else if ( isNaN(A) ) {
	alert( "Ошибка, неправильно введены данные" );
} else {
	Bar( A );
}