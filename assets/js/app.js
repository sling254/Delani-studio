function style(){
    $("#what-we-do h5").addClass("text-center fw-bold")
    $("#what-we-do p").addClass("text-center")

}
$(document).ready(function(){
    /* toggle What We Do Section */
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
    /* add hover effect to portfolio section */

    $(".portfolio-img").hover(function(){
        let target = $(this).children('div');
        target.css({'opacity':"1"});
    },
    function(){
        $(this).children('div').css({'opacity':"0"});

    })
    /* form validation */
    function validateForm(e){
        e.preventDefault();
        fname = $("#fname").val().toUpperCase();
        email = $("#email").val();
        message = $("message").val();
        if(fname==="" || email==="" || message === ""){
            alert("form invalid :: All fields must be filled")
        }else{
            alert(`${fname}  we have received your message. Thank you for reaching out to us.`)
        }
    }
    $("#contact-form").submit(validateForm)



    /* get current year for footer section */    
    let year= new Date().getFullYear()
    
    $("#year").text(year);

});