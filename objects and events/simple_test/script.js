function test() {
	result = 0;
	if (a[1].checked)
		result++;
	if ((b[0].checked) && (b[1].checked) && (!b[2].checked))
		result++;
	if (c.value == 3)
		result++;
	result = Math.round(result*5/3);
	alert("Ваша оценка: " + result)
}