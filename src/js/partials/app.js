

$('#slider .content').slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  appendDots: $('#slider .dots'),
  adaptiveHeight: true,

  customPaging : function(slider, i) {
  var title = $(slider.$slides[i]).data('title');
  var thumb = $(slider.$slides[i]).data('thumb');
            
  return '<div class="dot-trumb"><a class="pager__item"><img class="dot__img" src="'+thumb+'"><span class="dot__desc">'
  + title +'</span></a></div>';
  
},
  responsive: [
    {
      breakpoint: 992,
      settings: {
        prevArrow: '<div class="prev"></div>',
nextArrow: '<div class="next"></div>',
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1,
         customPaging : function(slider, i) {
  var title = $(slider.$slides[i]).data('title');
  var thumb = $(slider.$slides[i]).data('thumb');
            
  return '<div class="dot-trumb"><a class="pager__item"><img class="dot__img" src="'+thumb+'"><span class="dot__desc">'
  + title +'</span></a></div>';
  
}, 
      }
    },
  ]




});




$(function(){                       
   $('.test__btn').click(function(){
        $('.channel__menu').slideToggle('250');
        $('.btn__append').append( $('.price') );
    });
});

 

//  $(document).ready(function(){
//   $(".arrow").click(function () {
//               if ($(".channel__menu").is(":hidden")) {

//                       $(".channel__menu").$(this).parent().show();

//               } else {

//                       $(".channel__menu").$(this).parent().show().hide();

//               }
//  return false;

//  
// });
// });





$(".arrow").click(function(e) {
  e.preventDefault();
  $("arrow").removeClass('active');
  $(this).addClass('active');
})






// btn "выбрать"
function showPackage(){
   var $this=$(this); 
    var $parent=$this.closest('.container');
    var $detailBox=$parent.find('.channel__menu')
}

function selectPackage(){
 
  var $this=$(this);  
  var $parent=$this.closest('.container');
  $('.package__container--selected').removeClass('package__container--selected');
  $(".package__main-btn").removeClass('package__main-btn--selected');
  $this.addClass('package__main-btn--selected');
  $parent.addClass('package__container--selected')
}

// изменение кнопки "добавить"
function showDetail(){
   var $this=$(this); 
    var $parent=$this.closest('.container');
    var $detailBox=$parent.find('.channel__menu')
}

function selectBox(){
  
  var $this=$(this);  
  var $parent=$this.closest('.container');
  $('.package__container--selected').removeClass('package__container--selected');
  $(".package__add-btn").removeClass('package__add-btn--selected');
  $this.addClass('package__add-btn--selected');
  $parent.addClass('package__container--selected')
}

function ready(){
  $('.arrow-container').on('click',showDetail);
  $('.package__add-btn').on('click',selectBox);
  $('.arrow-container').on('click',showPackage);
  $('.package__main-btn').on('click',selectPackage);
}  
$(document).ready(ready)



// mobile menu -----

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    var $this = $(this),
        $list = $($this.attr('data-list'));

        $this.parent().find('.list').not($list).hide(0);
    if ($list.css('display') == 'block') {
      $list.hide();
    } else {
      $list.show();
    }
  });//end slide toggle

  $(window).resize(function() {
    if ($(window).width() > 992) {
      $('.list').removeAttr('style');
     }
  });//end resize
});//end ready




