//var n = 30
//for (var i = 0; i < n; i++) {
//	x = Math.round(Math.random()*document.documentElement.clientHeight;
//	y = Math.round(Math.random()*document.body.clientHeight);
//	document.write('<img id="img'+i+'" src="img/1.png" style="position:absolute; left:'+x+'; top:'+y+';">');
//}

document.addEventListener("DOMContentLoaded", function(){
	var kol = 30
	document.write('<img src="img/winter-night.jpg" style="height: 600px; width: 1300px">');
	for (var i = 0; i < kol; i++) {
		x = Math.round(Math.random()*document.body.clientHeight);
		y = Math.round(Math.random()*document.body.clientHeight);
		n = Math.round(Math.random()*2+4);
		document.write('<img id="img'+i+'" src="img/'+n+'.png" style="position:absolute; left:'+x+'; top:'+y+'; Width:30px;">');
	}
	
	function move() {
		for (i = 0; i < kol; i++) {
			sn = document.getElementById('img'+i);
			y = parseInt(sn.style.top)+5;
			if (y > document.body.clientHeight-50)
				sn.style.top = "0 px"
			else
				sn.style.top = y+" px"
		}
	setTimeout('move()', 100)
	}
	
});