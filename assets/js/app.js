function style(){
    $("#what-we-do h5").addClass("text-center fw-bold")
    $("#what-we-do p").addClass("text-center")

}
$(document).ready(function(){
    /* toggle What We Do Section */
    
/*    $("#design-img").hover(function(){
       $(this).hide();
   },function(){
       $("#design-description").show();

   });
   $("#development-img").hover(function(){
       
   }) */


  /* $("#design-img").on("click",function(){
      $(this).hide();
      style();
      $("#design-description").toggle();
    
    });

    $("#development-img").on("click",function(){
        $(this).hide();
        style();
        $("#development-description").toggle();
    });

    $("#product-img").on("click",function(){        
        $(this).hide();
        style();
        $("#product-description").toggle();

        
    });
 */
    $(".icon").click(function(){
        style();
        $(this).toggle();
        $(this).siblings().toggle();
      });

    $(".info").click(function(){
        style();
        $(this).siblings().toggle();
        $(this).toggle();
    })

    $(".portfolio-img").hover(function(){
        let target = $(this).children('div');
        target.css({'opacity':"1"});
        // target.css({'display':"flex"});
    },
    function(){
        $(this).children('div').css({'opacity':"0"});
        // target.css({'display':"none"});
        // target;

    })





});