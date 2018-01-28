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
  $(".light .redLight").on('click', function(event){
    $(this).toggleClass("red");
    event.stopPropagation();
  });
}


function yellowLight(){
  $(".light .yellowLight").on('click', function(event){
    $(this).toggleClass("yellow");
    event.stopPropagation();
  });
}

function greenLight(){
  $(".light .greenLight").on('click', function(event){
    $(this).toggleClass("green");
    event.stopPropagation();
  });
}
