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
  $(".redLight").on('click', function(event){
    event.stopPropagation();
    $(this).toggleClass("red");
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(event){
    event.stopPropagation();
    $(this).toggleClass("yellow");
  });
}

function greenLight(){
  $(".greenLight").on('click', function(event){
    event.stopPropagation();
    $(this).toggleClass("green");
  });
}
