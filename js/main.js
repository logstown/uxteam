$( "#arrow" ).click(function() {
  $( "#main" ).show();
  $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 1000);
  
});
