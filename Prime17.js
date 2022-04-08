// Нарисовать равнобедренный треугольник из символов ^.
// Высоту выбирает пользователь.

var h = 4;

for (var i = 0; i < h; i++) {
	for (var j = 1; j < h-i; j++) {
		document.writeln('&nbsp;');
	}
	for (var j=h - 2 * i; j <= h; j++) {
		document.writeln('^');
	}
	document.writeln('<br>');
}


	