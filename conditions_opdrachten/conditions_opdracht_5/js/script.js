
calculate = function()
{
    var resources = document.getElementById('a1').value;
    var minutes = document.getElementById('a2').value; 
    document.getElementById('a3').value = parseInt(resources)*parseInt(minutes);
     
   }