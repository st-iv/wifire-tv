
 

 $(document).ready(function(){
           $(".arrow").click(function () {
                       if ($(".channel__menu").is(":hidden")) {

                               $(".channel__menu").$(this).parent().show();

                       } else {

                               $(".channel__menu").$(this).parent().show().hide();

                       }
 return false;
});
});


$(".arrow").click(function(e) {
  e.preventDefault();
  $("arrow").removeClass('active');
  $(this).addClass('active');
})






// изменение кнопки "выбрать"
function showDetail1(){
   var $this=$(this); 
    var $parent=$this.closest('.container');
    var $detailBox=$parent.find('.channel__menu')
}

function selectBox1(){
  var $this=$(this);  
  var $parent=$this.closest('.container');
  $('.package__container--selected').removeClass('package__container--selected');
  $(".package__main-btn").removeClass('package__main-btn--selected');
  $this.addClass('package__main-btn--selected');
  $parent.addClass('package__container--selected')
}

function ready(){
  $('.arrow-container').on('click',showDetail1)
  $('.package__main-btn').on('click',selectBox1)
}  
$(document).ready(ready)

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
  $('.arrow-container').on('click',showDetail)
  $('.package__add-btn').on('click',selectBox)
}  
$(document).ready(ready)





// mobile menu -----

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.nav__list').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 1024 ) {     
      $('.nav__list').removeAttr('style');
     }
  });//end resize
});//end ready


$(document).ready(function() {
  $('.menu-trigger-phone').click(function() {
    $('.nav__contact-list').slideToggle();
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 1024 ) {     
      $('.nav__contact-list').removeAttr('style');
     }
  });//end resize
});//end ready



