describe('Traffic Lights', function() {

  beforeEach(function() {

    setFixtures(' <body><h1> Traffic Light </h1><div class="light"><span class="redLight"></span><span class="yellowLight"></span><span class="greenLight"></span></div><div class="light"><span class="redLight"></span><span class="yellowLight"></span><span class="greenLight"></span></div><div class="light"><span class="redLight"></span><span class="yellowLight"></span><span class="greenLight"></span></div><style>.active {background-color: purple;} .red {background-color: red;} .yellow {background-color: yellow;} .green { background-color: green;} .light {box-shadow: 0 0 5px rgba(0,0,0, .8); overflow: hidden;padding: 0 0 4px;width: 120px;display: inline-block;}.light span{border-radius: 100px;border-style: solid;border-color: black;border-width: 5px;display: block;height: 100px;margin: 4px auto 0; width: 100px;}</style></body>');
      spyOn(console, 'error');
  });

  it('#redLight binds a click event to the red lights', function() {
    redLight();
    var red = $('.redLight')[0];
    var redLightClickEvent = $._data(red, "events");
    var myKey = [];
    for (var key in redLightClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#redLight turns light red', function() {
    lightActive();
    redLight();
    $('.redLight:first').click();
    expect($('.redLight:first')[0].className).toEqual("redLight red");
    expect($('.light:first')[0].className).toEqual("light");

  });

  it('#lightActive binds a click event to the traffic light fixture', function() {
    lightActive();
    var light = $('.light')[0];
    var lightClickEvent = $._data(light, "events");
    var myKey = [];
    for (var key in lightClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#lightActive turns background color to purple', function() {
    lightActive();
    $('.light:first').click();
    expect($('.light:first')[0].className).toEqual("light active");
  });

  it('#yellowLight binds a click event to the yellow lights', function() {
    yellowLight();
    var yellow = $('.yellowLight')[0];
    var yellowLightClickEvent = $._data(yellow, "events");
    var myKey = [];
    for (var key in yellowLightClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#yellowLight turns light yellow', function() {
    lightActive();
    yellowLight();
    $('.yellowLight:first').click();
    expect($('.yellowLight:first')[0].className).toEqual("yellowLight yellow");
    expect($('.light:first')[0].className).toEqual("light");

  });

  it('#greenLight binds a click event to the green lights', function() {
    greenLight();
    var green = $('.greenLight')[0];
    var greenLightClickEvent = $._data(green, "events");
    var myKey = [];
    for (var key in greenLightClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#greenLight turns light green', function() {
    lightActive();
    greenLight();
    $('.greenLight:first').click();
    expect($('.greenLight:first')[0].className).toEqual("greenLight green");
        expect($('.light:first')[0].className).toEqual("light");

  });


  



});
