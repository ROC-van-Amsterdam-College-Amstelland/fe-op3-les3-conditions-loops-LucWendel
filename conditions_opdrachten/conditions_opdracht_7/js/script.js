//javascript code
innit = function() { 
    var udata = 2;
    var element = document.getElementById("centerbox1");
    if (udata >= 70)
        element.style.backgroundColor = 'white';
    else if (udata >= 51 && udata.value <70)  
        element.style.backgroundColor = 'green'; 
    else if (udata <=50)  
        element.style.backgroundColor = 'red';
}