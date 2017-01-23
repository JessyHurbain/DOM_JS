var couleurTexte = prompt('Entrez la couleur du texte :');
var couleurFond = prompt('Entrez la couleur du fond');

var divsElt = document.getElementsByTagName('div');
for (var i = 0; i < divsElt.length; i++) {
  divsElt[i].style.color = couleurTexte;
  divsElt[i].style.backgroundColor = couleurFond;
}
