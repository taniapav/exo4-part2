//Fonction pour effacer les valeurs des champs
function wipeOff(){
 //value='' ca efface les données des champs du formulaire//
 document.getElementById('lastname').value = '';
 document.getElementById('firstname').value = '';
 document.getElementById('city').value = '';
}

//fonction qui permet de remettre les valeurs par défaut
function resetValues(){
 document.getElementById('informations').reset();
}
