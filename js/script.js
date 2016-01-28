$(document).ready(function() {

  lightActive();
  redLight();
  yellowLight();
  greenLight();

  
});

function lightActive(){
  $('.light').on('click', function(){
      $(this).toggleClass("active");
  });
}

function redLight(){
  $(".redLight").on('click', function(){
    $(this).toggleClass("red");
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(){
    $(this).toggleClass("yellow");
  });
}

function greenLight(){
  $(".greenLight").on('click', function(){
    $(this).toggleClass("green");
  });
}

