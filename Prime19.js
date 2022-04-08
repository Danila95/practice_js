// поиск слова Pavel из переменной text
var text, myName, hits;
text = " any text any text any text any text any Pavel text any text any text any text any text any text Pavel any text any text any text";
myName = "Pavel";
hits = [];

/* За рамками этого цикла i принимает позицию вхождения первого символа из переменной myName.
В этом цикле идет перебор символов начиная от этой позиции до i + длинна переменной myName (что логично, ведь мы ищем слово опр длинны и нам нет смысла смотреть дальше этой длинны)
j с каждым прохождением цикла увеличивается на 1 , соответственно если j-i вначале будет 0 потом 1,2,3 итд.
т.е. мы берем и сравниваем каждый символ с позиции i с символами переменной myName и если символы совпали, то добавляет этот символ в массив hits. Идет сдвиг на 1 символ и все повторяется)
Тут есть недоработка в том, что если в тексте будет неполное имя или хотя бы первый символ из имени, то в массив hits этот символ(-ы) попадет) */

for (i=0; i < text.length; i++) {
    if (text[i] === myName[0]) { 
        for (var j=i; j< (myName.length +i);j++) { 
            if (text[j] === myName[j-i]) {
                hits.push (text[j]);
            }
        }
    }
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
