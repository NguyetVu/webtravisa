    $(document).ready(function(){
    // $('.blog').hide();
    // $('.mb_menu_tog').click(function(){
    //  $('.blog').show();
    // });
    $('.mb_menu_tog').click(function(){
        $('.find').toggleClass('active');
    });
    $('.mb_menu_tog').click(function(){
        $(this).toggleClass('active');
    });
    $('ul li').click(function(){
        $(this).toggleClass('active');
    });
    // $('.open_login').hide();
    $('.mb_login_tog').click(function(){
        $('.open_login').toggleClass('active');
    });
    $('.mb_login_tog').click(function(){
        $(this).toggleClass('active');
    });
    // $('.close_login_icon').click(function(){
    //  $('.open_login').hide();
    // });

    });
    var video = document.querySelector('.video');
  var btn = document.getElementById('play-pause');
  function togglePlayPause(){
    if (video.paused) {
      btn.className='pause';
      video.play();
    } else {
      btn.className = 'play';
      video.pause();
    }
  }
  btn.onclick = function(){
    togglePlayPause();
  };
  (function() {
    
      // Create input element for testing
      var inputs = document.createElement('input');
      
      // Create the supports object
      var supports = {};
      
      supports.autofocus   = 'autofocus' in inputs;
      supports.required    = 'required' in inputs;
      supports.placeholder = 'placeholder' in inputs;
    
      // Fallback for autofocus attribute
      if(!supports.autofocus) {
        
      }
      
      // Fallback for required attribute
      if(!supports.required) {
        
      }
    
      // Fallback for placeholder attribute
      if(!supports.placeholder) {
        
      }
      
      // Change text inside send button on submit
      var send = document.getElementById('signup-submit');
      if(send) {
        send.onclick = function () {
          this.innerHTML = '...Sending';
        }
      }
    var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var view = document.getElementsByClassName("view_tour");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  view[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
   slides[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000);
}
})();
