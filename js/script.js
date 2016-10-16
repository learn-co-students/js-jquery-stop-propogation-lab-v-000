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
  });
}

function redLight(){
  $(".redLight").on('click', function(){
    $(this).toggleClass("red");
    event.stopPropagation();
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(){
    $(this).toggleClass("yellow");
    event.stopPropagation();
  });
}

function greenLight(){
  $(".greenLight").on('click', function(){
    $(this).toggleClass("green");
    event.stopPropagation();
  });
}

