

function check() {
    var saldo = document.getElementById("saldo").value;

    if(saldo<25) {
        document.getElementById("tekst").innerHTML = "Je bent tering arm kom maar terug als je geld hebt minderwaardige kech!" ;
    }
    else {
        document.getElementById("tekst").innerHTML = "U heeft veel geld chapeau!";
    }
    

}