

var imageHolder = ["imgs/bluem2.jpg","imgs/bmwm4.jpg","imgs/bmwm4orange.jpg","imgs/deadpoolygatitos.jpg","imgs/demonblack.jpg","imgs/demonn.jpg","imgs/redporsche.jpg","imgs/download.jpg",];

console.log(imageHolder.length)

var count = 0

$(document).ready(function(){

  //event listener
  $("#arrowRight").on("click",showNext)
  //event listener
  $("#arrowLeft").on("click",showPrevious)

  function showNext(){
    count++
    if(count == imageHolder.length){
      count = 0
      }
    $('img').attr('src',imageHolder[count])
    }
  function showPrevious(){
    count--
    if(count == -1){
      count = imageHolder.length-1
    }
      $('img').attr('src',imageHolder[count])


  }

});
