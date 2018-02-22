//hero text animation
$(document).ready(function(){
  function changeText(cont1,cont2,speed,delay){
    delay = delay / 100;
    var appendTextForDelay = "";
    while (delay>0) {
      appendTextForDelay += " ";
      delay--;
    }
    var Otext = cont1.text();
    Otext = appendTextForDelay.concat(Otext);

    var Ocontent = Otext.split("");
    var i = 0;
    function show(){
      if (i < Ocontent.length) {  
          cont2.append(Ocontent[i]);
          i = i + 1;
      };
    };
    var Otimer = setInterval(show,speed);
  };
  changeText($(".hero h2"),$(".text-animation"),100, 1500);   
}); 

//smooth scrolling
$(document).ready(function(){
	$("a").on('click', function(event) {
    	if (this.hash !== "") {
      		event.preventDefault();
      		var hash = this.hash;
      		$('html, body').animate({
        	scrollTop: $(hash).offset().top
      		}, 800, function(){
        	window.location.hash = hash;
      		});
    	}
  	});
});

//icon "goTop"
window.onscroll = function() {scrollFunction()};
 	function scrollFunction() {
    	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        	document.getElementById("goTop").style.display = "block";
    	} else {
        	document.getElementById("goTop").style.display = "none";
    	}
  	}

