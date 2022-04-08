// транспонирование матрицы
// условие: квадратная матрица

function Trans(Array,N) {
    for (var n = N, i = 0; i < n; i++)
        for (var j = i + 1; j < n; j++) {
            var temp = Array[i][j];
            Array[i][j] = Array[j][i];
            Array[j][i] = temp;
        }
    return Array
};

   var Array = [[11,12,13],[21,22,23],[31,32,33]];// alert(a.join('\n'))
   var N = Array.length;
   
   for (var i=0; i<N; i++){
		document.writeln(Array[i]);
		document.writeln("<br>");
	}
   //alert(Trans(Array,N).join('\n'));
   
	Array=Trans(Array,N);
	document.writeln("<p>");
	for (var i=0; i<N; i++){
		document.writeln(Array[i]);
		document.writeln("<br>");
	}