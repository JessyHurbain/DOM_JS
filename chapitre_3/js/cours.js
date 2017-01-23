// document.getElementById('langages').innerHTML =  '';

document.querySelector('h1').textContent += " de programmation";

document.querySelector('h1').setAttribute('id','titre');

document.querySelector('h1').id = 'titre';

var titreElt = document.querySelector('h1');
titreElt.classList.remove('debut');
titreElt.classList.add('titre');
console.log(titreElt);

var pythonElt = document.createElement('li');
pythonElt.id = 'python';
pythonElt.textContent = 'Python';
document.getElementById('langages').appendChild(pythonElt);

var rubyElt = document.createElement('li');
rubyElt.id= 'ruby';
rubyElt.appendChild(document.createTextNode('Ruby'));
document.getElementById('langages').appendChild(rubyElt);

var perlElt = document.createElement('li');
perlElt.id = 'perl';
perlElt.textContent = 'Perl';

document.getElementById('langages').insertBefore(perlElt, document.getElementById('php'));

document.getElementById('langages').insertAdjacentHTML('afterBegin','<li id="javascript">JavaScript</li>');

var bashElt = document.createElement('li');
bashElt.id = 'bash';
bashElt.textContent = 'Bash';

document.getElementById('langages').replaceChild(bashElt, document.getElementById('perl'));

document.getElementById('langages').removeChild(document.getElementById('bash'));

var paragrapheElt = document.createElement('p');
paragrapheElt.id = 'montext';
paragrapheElt.innerHTML = 'En voici une <a href=" https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> complete';

document.getElementById('contenu').appendChild(paragrapheElt);
