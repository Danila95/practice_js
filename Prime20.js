// Молекула ДНК представляется в виде вектора из N целочисленных значений. 
// Проверить, не является ли какой-либо участок длины M ( M- фиксированная константа порядка 5-10) 
// повторяющимся в последовательности ДНК
var text, M, hits;
var count = 0;
text = "ACTGAAAGGACTTTAGCCTAAGACACGTTAGGAATCTGATCCTAGACACGTAGCC";
M = "TAGCC";
hits = [];

for (i=0; i < text.length; i++) {
    if (text[i] === M[0] & text[i+1] === M[1] & text[i+2] === M[2] & text[i+3] === M[3] & text[i+4] === M[4]) {
    	count += 1;
        for (var j=i; j< (M.length +i);j++) { 
            if (text[j] === M[j-i]) {
                hits.push (text[j]);
            }
        }
        console.log("обнаруженно "+count+" ДНК");
    }
}

if (hits.length === 0) {
	console.log("Your ДНК wasn't found!");
} else {
	console.log(hits);
}
