// формирования двумерного массива (матрицы) с указанной размерностью

function matrixArray(row,columns){
	var arr= new Array();
	for(var i=0; i<row; i++){
		arr[i]=new Array();
		for (var j=0; j<columns; j++){
			arr[i][j] = i+j+1; //вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
		}
	}
	return arr
}

var row = 0;
var columns = 0;

row = prompt(" Введите кол-во строк ","");
columns = prompt(" Введите кол-во столбцов ","");

if ( row == 0 || columns == 0 ) {
  alert( "Вы ничего не ввели" );
} else if ( row < 0 || columns < 0 ) {
	alert( "данное значение не может иметь отрицательное значение" );
} else if ( isNaN(row) || isNaN(columns) ) {
	alert( "Ошибка, неправильно введены данные" );
} else {
	var myMatrix=matrixArray(row,columns)
}

document.writeln( myMatrix );