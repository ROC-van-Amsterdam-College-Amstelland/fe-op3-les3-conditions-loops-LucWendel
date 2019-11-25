
function check() {
    var saldo = document.getElementById("saldo").value;

    if(saldo == 500) {
        document.getElementById("tekst").innerHTML = "Baas is weer blij met je jongedame!";
    }

    else if (saldo < 500) {
        document.getElementById("tekst").innerHTML = "Je bent tering arm kom maar terug als je geld hebt minderwaardige kech!";
    }

    else {
        document.getElementById("tekst").innerHTML = "TERING RIJK";
    }
}