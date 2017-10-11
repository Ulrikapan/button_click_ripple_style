// $(window).mousemove(function(e){
//   $('.test').html(e.clientX + ',' + e.clientY)
// })

$('#btn').click(function(e){
  var btnLeft = $('#btn').offset().left;
  var btnTop = $('#btn').offset().top;
  var curLeft = e.clientX;
  var curTop = e.clientY;
  var addCircle = "<div class='click'> </div>"
  
  $('#btn').append(addCircle) 
  $('.click').css('left', curLeft - btnLeft +'px')
            .css('top', curTop - btnTop +'px')
            .css('animation', 'ripple .5s linear');
   
});