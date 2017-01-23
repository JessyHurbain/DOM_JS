var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (var i = 0; i < journaux.length; i++) {
  var liensElt = document.createElement('a');
  liensElt.textContent = journaux[i];
  liensElt.href = journaux[i];

  document.getElementById('contenu').appendChild(liensElt);
  document.getElementById('contenu').appendChild(document.createElement('br'))
}
