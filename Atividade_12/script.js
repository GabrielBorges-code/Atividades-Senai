const button = document.querySelector('input');
button.addEventListener('click', reviverBarata);

function mataBarata(){
    var kill = document.getElementById("barataViva");
    kill.style.display="none";
    var morta = document.getElementById("barataMorta");
    morta.style.display="";
    document.getElementById("msg").innerHTML = "MATOOOOOOOO";
    
}

function reviverBarata() {
    document.location.reload(true);

}
