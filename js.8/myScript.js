function myFunction() {
    var txt = document.getElementById("oi").value;
    var alo = txt.length;
    var gaga = txt.toUpperCase()

    document.getElementById("vinz").innerHTML = alo;
    document.getElementById("maiusculo").innerHTML = gaga;
    document.getElementById("palavra").innerHTML = txt
}