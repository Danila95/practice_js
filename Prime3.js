//Даны целые числа K и N (N > 0). Вывести N раз число K.

K = prompt(" Введите целое число K ","");
N = prompt(" Введите целое число N ","");

if ( N > 0 ) {
  for ( var i = 0; i < N; i++ ) {
      document.writeln( " = " , K );
  }
} else {
  alert ( " N должно быть больше нуля ");
}