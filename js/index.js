//ACHAT//

//ticket jaune
var numbre1 = 0;

function add1() {
    numbre1++;
    document.getElementById('num1').innerHTML = numbre1;
}
function remove1() {
    if (numbre1<1) {
        numbre1 = 0;
    }
    else {
        numbre1--;
        document.getElementById('num1').innerHTML = numbre1;
    }
}

//ticket vert
var numbre2 = 0;

function add2() {
    numbre2++;
    document.getElementById('num2').innerHTML = numbre2;
}
function remove2() {
    if (numbre2<1) {
        numbre2 = 0;
    }
    else {
        numbre2--;
        document.getElementById('num2').innerHTML = numbre2;
    }
}

//ticket violet
var numbre3 = 0;

function add3() {
    numbre3++;
    document.getElementById('num3').innerHTML = numbre3;
}

function remove3() {
    if (numbre3<1) {
        numbre3 = 0;
    }
    else {
        numbre3--;
        document.getElementById('num3').innerHTML = numbre3;
    }
}

//ENREGISTRE
function enregistre() {
    localStorage.setItem('jaune',numbre1);
    localStorage.setItem('vert',numbre2);
    localStorage.setItem('violet',numbre3);
}
function panier() {
    var jaune = localStorage.getItem('jaune');
    var vert = localStorage.getItem('vert');
    var violet = localStorage.getItem('violet');

    document.getElementById('jaune').innerHTML = jaune + ' ticket jaune dans le panier';
    document.getElementById('vert').innerHTML = vert + ' ticket vert dans le panier';
    document.getElementById('violet').innerHTML = violet + ' ticket violet dans le panier';

}

