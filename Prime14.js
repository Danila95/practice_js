// перевернуть двумерный массив Поменять последнюю строку с первой, предпоследнюю со второй и т. д.
// Условие: матрица должна быть квадратной.

function Trans(Array,n) {
	for (var i = 0, j = n-1; i < j; i++,j--) {
        for (var k = 0; k < n; k++) {
            temp = Array[i][k];
            Array[i][k] = Array[j][k];
            Array[j][k] = temp;
        }
	}
	// вывод полученного массива
	for (var i=0; i<n; i++){
		document.writeln(Array[i]);
		document.writeln("<br>");
    }
	return Array
}


var Array=[[1,2,3,4],[4,5,6,4],[7,8,9,4],[-1,-2,-3,5]];
var n=Array.length; // кол-во строк и столбцов
var temp=0;
document.writeln("<p>");
for (var i=0; i<n; i++){
	document.writeln(Array[i]);
	document.writeln("<br>");
	}
	
document.writeln("<p>");
Array=Trans(Array,n);

