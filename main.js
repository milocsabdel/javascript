//exo1
//let num = 1;
//if (num == 1) {
 //   alert('vrai')
//} else {
 //  alert ('faux')
//}
//console.log(num);

//exo2
//let prenom = prompt("entrez un prenom");
//let taille = prenom.lenght;
//if (prenom.length < 5 ) {
 //  alert('prenom trop court')
//} else {
//   alert('parfait')
//}

//EXO 3

//let addition = parseInt(prompt ("5+5"));
//if (addition === 10) {
 //   alert('bravo')
//} else {
 //   alert('dommage reessaye')
//}

//EXO 4

//let multi = parseInt(prompt('3*3'));
//if (multi === 9) {
//    alert('la réponse est bien 9')
//} else {
 //   alert(`vous avez raté de : ${Math.abs(multi -9)} unités`);
//}

// EXO 5
//let jour = prompt('quel jours est-il?');
//if (jour == "lundi" || jour == "mardi" || jour == "mercredi") {
    //alert('vous êtes en ealerning')
//} else if(jour == "jeudi" || jour == "vendredi") {
    //alert('vous êtes en présentiel');
    //}else {
    //alert("demande érroné");
//}

// EXO 6

//let temps = prompt('quelle temps fais-t-il ?');
//let soleil = "soleil";
//let pluie = "pluie";
//let vent = "vent";
//let neige = "neige";
//if (temps == soleil) {
    //console.log('il fais beau');
//} else if(temps == pluie) {
    //console.log('il pleut');
//} else if(temps == vent){
    //console.log("y'a du vent");
//} else if (temps == neige){
    //console.log("il neige");
//} else {
    //console.log("je n'ai pas compris");
//}




//EXO 7

//let age = parseInt(prompt('quel est votre age ?'));

//if (age > 100) {
    //alert('vous ne pouvez pas réserver tes trop vieux!');
//} else if(age < 0){
    //alert("vous ne pouvez pas reservé car vous n'êtes pas encore né");
//} else if(age < 18){
    //alert('vous ne pouvez pas réservé car vous êtes mineur');
//} else if (age == 18){
    //alert("vous pouvez reserver car vous venez d'être majeur");
//} else if(age > 18){
    //alert('vous pouvez reservez car vous êtes majeur')
 //}


 
 //EXO 8

//let reponse = prompt('quel est ton prénom ?');

//if (reponse === "") {
    //let prenom = prompt('veuillez réinsérer un prénom');
    
    //if (prenom === "") {
        //alert('ciao');
      
    //}
    //else {
        //alert('bienvenue ' + prenom + "!");
    //}
//}
//else {
    //alert('bienvenue ' + reponse + "!")
//}

//EXO 9

//let couleur = prompt('couleur?')
//let ville = prompt('ville?')

//let rep1 = "rouge";
//let rep2 = "bx";
//if (couleur !== rep1 && ville !== rep2) {
    //alert('aucune des réponses valides')
//}

// let ask = prompt("Quel est ta couleur préférée ?")
// let ask2 = prompt ("Quel est ta ville préférée ?")
// let rep1 = "Bleu"
// let rep2 = "New York"
// if (ask != rep1 && ask2 != rep2) {
//         alert("Aucune des 2 réponses est valide");
//     } else if (ask != rep1 && ask2 == rep2) {
//         alert("Tu es presque !");
//     } else if (ask == rep1 && ask2 != rep2) {
//         alert("Tu es presque !");
//     } else if (ask == rep1 && ask2 == rep2) {
//         alert("Bien joué !");
//     };

//let color = prompt('couleur?');
//let ville = prompt('ville?');

//let rep1 = "rouge";
//let rep2 = "bx";
//if (color == rep1 && ville == rep2) {
    //alert('tous est bon')
    
//}  else if (color !== rep1 && ville !== rep2) {
    //alert('tout est faux')
//} else {
    //alert('presque')
//}

//EXO 10

//let premierNombre = parseInt(prompt("Mettez un premier nombre:"));

//let deuxiemeNombre = parseInt(prompt("Mettez un deuxième nombre:"));

//let troisiemeNombre = parseInt(prompt("Mettez un troisième nombre:"));

//let some = premierNombre + deuxiemeNombre

//if (somme < troisiemeNombre) {
    //alert("la somme des 2 premiers nombres est plus petit que le troisième");
//}else if



// EXO 11

// let texteSaisi = prompt("Tapez ici");
// if (texteSaisi === null || texteSaisi === "") {
//     alert("Tu n'as pas répondu à la question");
// } else {
//     alert("Merci pour votre réponse!");

//     console.log("Longueur du texte saisi : " + texteSaisi.length);

//     let longueurAttendue = prompt("Combien de caractères pensez-vous avoir dans votre phrase ?");
//     if (longueurAttendue === null || longueurAttendue === "") {
//         alert("Tu n'as pas répondu à la question");
//     } else {
//         let longueurAttendueNum = parseInt(longueurAttendue);

//         if ((longueurAttendueNum)) {

//             if (longueurAttendueNum === texteSaisi.length) {
//                 alert("Félicitations! Vous avez deviné correctement.");
//             } else {

//                 let difference = Math.abs(longueurAttendueNum - texteSaisi.length);
//                 alert("Désolé, vous avez une différence de " + difference + " caractère(s) par rapport à la longueur réelle du texte.");
//             }
//         } else {

//             alert("La réponse n'est pas un nombre");
//         }
//     }
// }

// var x = ++ (prompt ("x:"))
// var y = ++ (prompt ("y"))
// var z = x + y 
//  .document.write("z")

// document.getElementById("demo").innerHTML = "Hello World!";















