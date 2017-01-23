console.log(document.body.childNodes[5].childNodes[1]);

var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);

// tous les elements ayant la classe merveilles

var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
  console.log(merveillesElts[i]);
}

// Element portant l'identifiant nouvelles
console.log(document.getElementById("nouvelles"));

// Tous les elements fils de l'element d'identifiant antiques ayant la classe existe

console.log(document.getElementById('antiques').getElementsByClassName('existe').length);

// Tous les paragraphes
console.log(document.querySelectorAll('p').length);

console.log(document.querySelectorAll('#contenu p').length);

console.log(document.querySelectorAll('.existe').length);

console.log(document.querySelectorAll('#antiques > .existe').length);

console.log(document.querySelector('p'));

console.log(document.getElementById('contenu').innerHTML);

console.log(document.getElementById('contenu').textContent);

console.log(document.querySelector('a').getAttribute('href'));

console.log(document.querySelector('ul').id);

console.log(document.querySelector('a').href);

if(document.querySelector('a').hasAttribute('target')) {
  console.log('Le premier lien possede l attribut target');
} else {
  console.log('Le premier lien de ne possede pas l attribut target');
}

// Liste des classes de l'element identifie par antiques

var classes = document.getElementById('antiques').classList;
console.log(classes.length);
console.log(classes[0]);

if (document.getElementById('antiques').classList.contains('merveille')) {
  console.log('l element identifie par antiques possede la classe merveille');
} else {
  console.log('Lelement identifie par antiques ne possede pas la classe merveille');
}
