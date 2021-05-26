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
 
    var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;
    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
    // document.getElementById("s1").innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
    // document.querySelector(".polzunok__value").innerHTML = price.totalS1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") ;
    // document.querySelector(".polzunok__value-one").innerHTML = price.totalS2;
  }
 
  var srvPrices = {}
  var c1 = document.getElementById("s3-check1");
  var c2 = document.getElementById("s3-check2");
 
 
  $(".range1").ionRangeSlider({
    from: 25,
    grid: false,
    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    onChange: function (data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    }
 });  
 