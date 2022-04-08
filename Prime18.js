// Молекула ДНК представляется в виде вектора из N целочисленных значений. 
// Проверить, не является ли какой-либо участок длины M ( M- фиксированная константа порядка 5-10) 
// повторяющимся в последовательности ДНК

var N = "ACTGAAAGGACTTTAGCCTAAGACACGTTAGGAATCTGATCCTAGACACG"; // последовательность ДНК
var M = "TAGCC"; // нужный участок ДНК
var M1 = M.length; // длинна нужного участка ДНК
var N1 = N.length // длина всей последовательности ДНК
var str = "";
var X = parseInt(N1/5); // делим на участки и округляем до целого числа
var temp = 0;

for (var i = 0; i < X; i++) {
	temp +=5;
	//document.writeln(temp);
	for (var j = temp-5; j < temp; j++) {
		str += N[j];
		document.writeln(N[j]);
		console.log(str);
	}
	document.writeln("<br>");	
}

//примечание: данная задача была решена в Prime20 

	