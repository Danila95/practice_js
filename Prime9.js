//перевернуть одномерный массив

	var temp=0;
	var array=[2,4,6,8,10];
	var n=array.length;
	document.writeln( array );
	
	for (var i=0, j=n-1; i<j; ++i, --j)
{
	temp=array[i];
	array[i]=array[j];
	array[j]=temp;
}
	document.writeln( "<br>" );
	document.writeln( array );
	
	