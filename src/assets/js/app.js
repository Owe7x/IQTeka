console.log('file 1');
$(document).ready(function($){

  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

})


 function sliderHandler(price) {
    // calculate
    if (price === undefined) {
      price = srvPrices;
    }
    var check = price.totalS2
    var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;
    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
    document.getElementById("s3").innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") ;
    
    if(price.totalS2 == 0) {
      document.querySelector(".result-check").innerHTML = 'в основном книги';
    } else if (price.totalS2 == 1) {
      document.querySelector(".result-check").innerHTML = 'в основном наборы для творчества';
    } else if (price.totalS2 == 2) {
      document.querySelector(".result-check").innerHTML = 'в основном логические игры';
    } else if (price.totalS2 == 3) {
      document.querySelector(".result-check").innerHTML = 'в основном конструкторы';
    } else if (price.totalS2 == 4) {
      document.querySelector(".result-check").innerHTML = 'в основном роботы';
    }
  }
  var srvPrices = {}
  var c1 = document.getElementById("s3-check1");
  var c2 = document.getElementById("s3-check2");
 
 
  $(".range1").ionRangeSlider({
    from: 1,
    grid: false,
    values: [0,1,2,3,4],
    onChange: function (data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    }
  });  
  $(".range2").ionRangeSlider({
    from: 2,
    grid: false,
    values: [0,1,2,3,4],
    onChange: function (data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    },
  });  
  $(".range3").ionRangeSlider({
    from: 3,
    grid: false,
    values: [0,1,2,3],
    onChange: function (data) {
      srvPrices.totalS3 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS3 = data.from_value;
      sliderHandler(srvPrices)
    }
  });  