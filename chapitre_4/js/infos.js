// var styleElement = getComputedStyle(document.getElementById('contenu'));
// var listElt = document.createElement('ul');
// var longueurElt = document.createElement('li');
// longueurElt.textContent = 'Longueur :' + styleElement.width;
// var hauteurElt = document.createElement('li');
// hauteurElt.textContent = 'Hauteur :' + styleElement.height;
// listElt.appendChild(hauteurElt);
// listElt.appendChild(longueurElt);
// document.getElementById('infos').appendChild(document.createTextNode('Informations sur l element'));
// document.getElementById('infos').appendChild(listElt);

var farine = document.createElement("li");

farine.id = "Farine";

farine.textContent = "farine";

document.getElementById("courses").appendChild(farine);
