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
    $(this).toggleClass("red");
    stopProp(event);
  });
}


function yellowLight(){
  $(".yellowLight").on('click', function(event){
    $(this).toggleClass("yellow");
    stopProp(event);
  });
}

function greenLight(){
  $(".greenLight").on('click', function(event){
    $(this).toggleClass("green");
    stopProp(event)
  });
}

function stopProp(event) {
  return event.stopPropagation();
}
