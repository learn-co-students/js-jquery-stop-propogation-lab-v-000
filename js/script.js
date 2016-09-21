$(document).ready(function() {

  lightActive();
  redLight();
  yellowLight();
  greenLight();


});

function lightActive(){
  $('.light').on('click', function(){
      $(this).toggleClass("active");
      console.log("background purple")
      event.stopPropagation();
  });
}

function redLight(){
  $(".redLight").on('click', function(){
    $(this).toggleClass("red");
    lightActive();
    event.stopPropagation();
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(){
    $(this).toggleClass("yellow");
    lightActive();
    event.stopPropagation();
  });
}

function greenLight(){
  $(".greenLight").on('click', function(){
    $(this).toggleClass("green");
    lightActive();
    event.stopPropagation();
  });
}
