// генерируется таблица умножения

document.writeln(" <style> ");
document.writeln("h3 { margin: 0; padding: 0; display: flex; } ");
document.writeln("html, body, h3 { margin: 0; padding: 0; } ");
document.writeln(" </style> ");

	for (var i=2; i<=9; i++)
	{
		for (var j=1; j<=9; j++)
		{
			document.writeln(" <h3> ");
			document.writeln(i+"*"+j+"="+i*j+"</h5>"); 
			document.writeln(" <br> ");
			document.writeln(" </h3> ");
		}
		document.writeln(" <br> ");
		//document.writeln(" <style> ");
	}
