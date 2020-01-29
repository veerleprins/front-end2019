var x = 0;
var tekst = "Hoi! Hier komt jouw input tekst te staan. Vul het formulier maar in! :)"
var snelheid = 50;

getypteTekst();

function getypteTekst() {
    // BRON: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
    if (x < tekst.length) {
        document.getElementById("typeMessage").innerHTML += tekst.charAt(x);
        x++;
        setTimeout(getypteTekst, snelheid);
    }
}

function changeColor() {
    var x = document.getElementById("name").value;
    document.querySelector("#kleur").classList.add('change');
    document.getElementById("typeMessage").innerHTML = "Jouw naam: " + x;
};

function changeColor1() {
    var x = document.getElementById("surname").value;
    document.querySelector("#kleur").classList.add('change1');
    document.getElementById("typeMessage").innerHTML = "Jouw achternaam: " + x;
};

function changeColor2() {
    var x = document.getElementById("mail").value;
    document.querySelector("#kleur").classList.add('change2');
    document.getElementById("typeMessage").innerHTML = "Jouw e-mailadres: " + x;
};

function changeColor3() {
    var x = document.getElementById("phonenumber").value;
    document.querySelector("#kleur").classList.add('change3');
    document.getElementById("typeMessage").innerHTML = "Jouw Telefoonnummer: " + x;
};