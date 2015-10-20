

var myPara = document.body.textContent;
var myParaArray = myPara.split(" ");
var myParaArrayPara = myParaArray.filter(function(str) {
    return /\S/.test(str);
});

wordCount();
