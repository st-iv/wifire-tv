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