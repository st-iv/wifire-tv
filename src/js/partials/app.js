 $(document).ready(function(){
           $(".arrow").click(function () {
                       if ($(".channel__menu").is(":hidden")) {

                               $(".channel__menu").show();

                       } else {

                               $(".channel__menu").hide();

                       }
 return false;
});
});


$(".arrow").click(function(e) {
  e.preventDefault();
  $("arrow").removeClass('active');
  $(this).addClass('active');
})





$(".package__main-btn").click(function(e) {
  e.preventDefault();
  $(".package__main-btn").removeClass('package__main-btn--selected');
  $(this).addClass('package__main-btn--selected');

})

function showDetail(){
   var $this=$(this); 
    var $parent=$this.closest('.container');
    var $detailBox=$parent.find('.channel__menu')
}

function selectBox(){
  var $this=$(this);  
  var $parent=$this.closest('.container');
  $('.package__container--selected').removeClass('package__container--selected');
  $(".package__main-btn").removeClass('package__main-btn--selected');
  $this.addClass('package__main-btn--selected');
  $parent.addClass('package__container--selected')
}

function ready(){
  $('.arrow-container').on('click',showDetail)
  $('.package__main-btn').on('click',selectBox)
}  
$(document).ready(ready)





$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize
});//end ready