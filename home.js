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
    
// 	jQuery('.dynpost-left').addClass("hiddenAnimate").viewportChecker({
// 	    classToAdd: 'visibleAnimate animated bounceInLeft',
// 	    offset: 100    
// 	   });
// 	jQuery('.dynpost-right').addClass("hiddenAnimate").viewportChecker({
// 	    classToAdd: 'visibleAnimate animated bounceInRight',
// 	    offset: 100
// 	});
	
	var navbar = document.getElementById("header");
	var headroom = new Headroom(navbar);
	headroom.init();
	
	loadMallDataCached(renderAll); 

});

function renderAll () {
    var banners = getBanners().sortBy(function(o){ return o.position});
    renderBanner('#banner_template','#home_banner', banners);
    
    // home-mobile-banners
    var banners = getBanners().sortBy(function(o){ return o.position});
    renderBanner('#mobile_banner_template','#mobile_home_banner', banners);
    
    $('.flexslider').flexslider({
        animation: "slide",
    });
}
function renderBanner(banner_template,home_banner,banners){
    var item_list = [];
    var item_rendered = [];
    var banner_template_html = $(banner_template).html();
    Mustache.parse(banner_template_html);   // optional, speeds up future uses
    $.each( banners , function( key, val ) {
        today = new Date();
        start = new Date (val.start_date);
        start.setDate(start.getDate());
        if(val.url == "" || val.url === null){
            val.css = "style=cursor:default;";
            val.noLink = "return false";
        }
        if (start <= today){
            if (val.end_date){
                end = new Date (val.end_date);
                end.setDate(end.getDate() + 1);
                if (end >= today){
                    item_list.push(val);  
                }
            } else {
                item_list.push(val);
            }
        }
    });

    $.each( item_list , function( key, val ) {
        var repo_rendered = Mustache.render(banner_template_html,val);
        item_rendered.push(repo_rendered);
    });
    $(home_banner).html(item_rendered.join(''));
}