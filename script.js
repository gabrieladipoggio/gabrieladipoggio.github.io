var arrow = document.querySelector('.arrow')

  arrow.addEventListener('mouseover', function () {
     this.classList.toggle('animate__animated')
     this.classList.toggle('animate__bounce')
    }
);

console.log("Version 3.0");

AOS.init();



var i = 0;
var txt = '<Gabriela Di Poggio>';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    if (i == 0){
      document.getElementById("left-bracket").innerHTML += txt.charAt(i);
    }
    else if (i == txt.length-1) {
      document.getElementById("right-bracket").innerHTML += txt.charAt(i);
    }
    else{
      document.getElementById("name").innerHTML += txt.charAt(i);
    }
    i++;
    window.setTimeout(typeWriter, speed);
  }
  else{
    document.getElementById('blink').style.color="#646464"
  }

}



$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});

