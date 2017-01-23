var pElt = document.querySelector('p');
pElt.style.color = 'red';
pElt.style.margin = '50px';
pElt.style.fontFamily = 'Arial';
pElt.style.backgroundColor = 'Black';


var paragrapheElt = document.getElementsByTagName('p');
console.log(paragrapheElt[0].style.color);
console.log(paragrapheElt[1].style.color);
console.log(paragrapheElt[2].style.color);

var stylePara =getComputedStyle(document.getElementById('para'));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
