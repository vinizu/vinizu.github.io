const img = document.querySelector('img');
const container = document.getElementById('container');

if (new Date().getHours() < 24){
    img.src='noite.jpg'
    document.querySelector('p').innerHTML = "Good Evening"
    container.style.backgroundColor='#364f6b'  
}

if (new Date().getHours() < 18){
    img.src='tarde.jpg'
    document.querySelector('p').innerHTML = "Good Afternoon"
    container.style.backgroundColor='#ff9f68'  
}

if (new Date().getHours() < 12){
    img.src='dia.jpg'
    document.querySelector('p').innerHTML = "Good Morning"
    container.style.backgroundColor='#ace7ef'  
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function(){ startTime() }, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  

  