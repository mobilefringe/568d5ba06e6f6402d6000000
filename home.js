$(document).ready(function(){
    init();
    $('.products_list').slick({
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 769,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
    $('#view_more').click(function(e){
        e.preventDefault();
        $('.mobile_features').animate({ "height": "520px" }, "slow" );
        $(this).hide()
        $('#view_less').show();
    });
    
    $('#view_less').click(function(e){
        e.preventDefault();
        $('.mobile_features').animate({ "height": "180px" }, "slow" );
        $(this).hide();
        $('#view_more').show();
    });
    
    
    $('#subForm').submit(function(e){
        e.preventDefault();
        $('.submit_btn').prop('disabled', true);
        if($("#agree_terms").is(':checked')){
            $.getJSON(
                this.action + "?callback=?",
                $(this).serialize(),
                function (data) {
                    if (data.Status === 400) {
                        alert("An error occured while processing your request. Please try again later.");
                    } else { // 200
                        $("#success_subscribe").fadeIn();
                        $('#success_subscribe').delay(2000).fadeOut();
                        $('#subForm').trigger('reset');
                        $('.submit_btn').prop('disabled', false);
                    }
            });
        }
        else{
            $("#agree_terms").focus();
            alert("Please agree to receive newsletter before continuing.")
            $('.submit_btn').prop('disabled', false);
        }
    });
    
	jQuery('.dynpost-left').addClass("hiddenAnimate").viewportChecker({
	    classToAdd: 'visibleAnimate animated bounceInLeft',
	    offset: 100    
	   });
	jQuery('.dynpost-right').addClass("hiddenAnimate").viewportChecker({
	    classToAdd: 'visibleAnimate animated bounceInRight',
	    offset: 100
	});
	
	$("div.navbar-fixed-top").autoHidingNavbar({
	    showOnBottom: 'false'
	});
});