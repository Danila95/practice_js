//изучение вложенных циклов
// нарисовать прямоугольник размером 5 х 15 из символов @.

var Arr = new Array
for (var i=0; i<5; i++) // этот цикл отвечает за кол-во строк
{
	for (var j=0; j<15; j++) // этот - за кол-во символов в каждой строке
	{
		document.writeln("@");
	}
		document.writeln("<br>");
}