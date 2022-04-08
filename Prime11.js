// тоже, что и предыдущее задание Prime10, только усложненное

function Bar( symbol, lines, symbInLines ) {

	for (var i=1; i<=lines; i++)
	{
		if (i==1 || i==lines) // 1-я и последняя строка
		{
			for (var j=1; j<=symbInLines; j++)
				document.writeln(symbol); // сплошная из символов
		}
		else // все строки между первой и заключительной
		{
			document.writeln(symbol);// показать один символ
			for (var j=1; j<=symbInLines - 2; j++)
			{
				document.writeln( "&ensp;" ); // пробелы в строке (symbInLines - 2) раз
			}
			document.writeln(symbol);// показать один символ
		}
		document.writeln(" <br> ");
	}
	return 0;
}

symbol = prompt(" Введите символ: ","");
lines = prompt(" Количество строк: ","");
symbInLines = prompt(" Количество символов в строке: ","");

//lines=Number(lines);
//symbInLines=Number(symbInLines);

if ( symbol == 0 || lines == 0 || symbInLines == 0 ) {
  alert( "Вы ничего не ввели" );
} else if ( lines < 0 || symbInLines < 0 ) {
	alert( "Данное значение может иметь отрицательное значение" );
} else if ( isNaN(lines) || isNaN(symbInLines) ) {
	alert( "Ошибка, неправильно введены данные" );
} else {
	Bar( symbol, lines, symbInLines );
}