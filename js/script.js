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
  $(".redLight").on('click', function(e){
    $(this).toggleClass("red");
    e.stopPropagation();
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(e){
    $(this).toggleClass("yellow");
    e.stopPropagation();
  });
}

function greenLight(){
  $(".greenLight").on('click', function(e){
    $(this).toggleClass("green");
    e.stopPropagation();
  });
}
