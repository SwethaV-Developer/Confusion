
$(function() {
    $('#mycarousel').carousel({interval : 2000})
    //Show Play button when Paused and Pause button while playing for Carousel.
    $('#carouselButton').click(function() {
       if($(this).children('span').hasClass('fa-pause'))
       {
         $('#mycarousel').carousel('pause');
         $(this).children('span').removeClass('fa-pause');
         $(this).children('span').addClass('fa-play');
       }
       else if($(this).children('span').hasClass('fa-play')){
         $('#mycarousel').carousel('cycle');
         $(this).children('span').removeClass('fa-play');
         $(this).children('span').addClass('fa-pause');
       }                
    });
    // Open Login Modal when Login button is clicked
    $("#loginBtn").on("click", function(){
        $("#loginModal").modal('show');
    });
     // Open Reserve Table Modal when Login button is clicked
    $("#reserveBtn").on("click", function(){
        $("#reservationModal").modal('show');
    });

 });