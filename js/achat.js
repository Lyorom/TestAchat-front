//ACHAT//


//PRIX
var prix1 = 2.50;
var prix2 = 3;
var prix3 = 3.50;



//recupe prix pour afficher
function prix(){
    document.getElementById('prix1').innerHTML = prix1 + '€';
    document.getElementById('prix2').innerHTML = prix2 + '€';
    document.getElementById('prix3').innerHTML = prix3 + '€';
}
//ticket jaune
var nombre1 = 0;

function add1() {
    nombre1++;
    document.getElementById('num1').innerHTML = nombre1;
}
function remove1() {
    if (nombre1<1) {
        nombre1 = 0;
    }
    else {
        nombre1--;
        document.getElementById('num1').innerHTML = nombre1;
    }
}

//ticket vert
var nombre2 = 0;

function add2() {
    nombre2++;
    document.getElementById('num2').innerHTML = nombre2;
}
function remove2() {
    if (nombre2<1) {
        nombre2 = 0;
    }
    else {
        nombre2--;
        document.getElementById('num2').innerHTML = nombre2;
    }
}

//ticket violet
var nombre3 = 0;

function add3() {
    nombre3++;
    document.getElementById('num3').innerHTML = nombre3;
}

function remove3() {
    if (nombre3<1) {
        nombre3 = 0;
    }
    else {
        nombre3--;
        document.getElementById('num3').innerHTML = nombre3;
    }
}

//set localStorage
function save() {
    localStorage.setItem('jaune', nombre1);
    localStorage.setItem('vert', nombre2);
    localStorage.setItem('violet', nombre3);
}
//PANIER
function panier() {

    //affiche nombre de ticket
    document.getElementById('jaune').innerHTML = jaune + ' ticket jaune a '+ prix1 +'€ dans votre panier';
    document.getElementById('vert').innerHTML = vert + ' ticket vert a '+ prix2 +'€ dans votre panier';
    document.getElementById('violet').innerHTML = violet + ' ticket violet a '+ prix3 +'€ dans votre panier';

    //affiche prix
    document.getElementById('total1').innerHTML = 'TOTAL: ' + total1 +'€';
    document.getElementById('total2').innerHTML = 'TOTAL: ' + total2 +'€';
    document.getElementById('total3').innerHTML = 'TOTAL: ' + total3 +'€';

    document.getElementById('totalfinal').innerHTML = 'TOTAL: ' + totalfinal +'€';
}

//GET LOCALSTOARAGE
var jaune = localStorage.getItem('jaune');
var vert = localStorage.getItem('vert');
var violet = localStorage.getItem('violet');

//TOTAL
var total1 = prix1 * jaune;
var total2 = prix2 * vert;
var total3 = prix3 * violet;
//PRIX FINAL
var totalfinal = total1 + total2 + total3;