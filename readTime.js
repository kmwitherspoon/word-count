


/*var myPara = document.querySelectorAll('p')[0,1,2,3,4,5,6,7,8,9,10,11,12,13].textContent.length;
var myParaArray = myPara / 200;
console.log(myParaArray);
*/

// Thanks Paul Draper for the whitespace hint

function wordCount(wpm) {
    var myPara = document.body.textContent;
    var myParaArray = myPara.split(" ");
    var myParaArrayPara = myParaArray.filter(function(str) {
        return /\S/.test(str);
    })
    var wpm = 230;
    var letsRead = myParaArrayPara.length / wpm;
    letsRead = Math.round(letsRead);
    timeToRead = document.getElementsByClassName('time-to-read');
    timeToRead[0].innerHTML = letsRead + " minutes to read";
};

function wordCountUser(wpm) {
    var myPara = document.body.textContent;
    var myParaArray = myPara.split(" ");
    var myParaArrayPara = myParaArray.filter(function(str) {
        return /\S/.test(str);
    })
    var letsRead = myParaArrayPara.length / wpm;
    letsRead = Math.round(letsRead);
    timeToRead = document.getElementsByClassName('time-to-read');
    timeToRead[0].innerHTML = letsRead + " minutes to read";
};
