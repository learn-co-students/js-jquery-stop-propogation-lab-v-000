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
  });
  $('.redLight').on('click', function(event){
    event.stopPropagation();
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(){
    $(this).toggleClass("yellow");
  });
  $('.yellowLight').on('click', function(event){
    event.stopPropagation();
  });
}

function greenLight(){
  $(".greenLight").on('click', function(){
    $(this).toggleClass("green");
  });
  $('.greenLight').on('click', function(event){
    event.stopPropagation();
  });
}
