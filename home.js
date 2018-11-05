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
    
    
    // $('#subForm').submit(function(e){
    //     e.preventDefault();
    //     $('.submit_btn').prop('disabled', true);
    //     if($("#agree_terms").is(':checked')){
    //         $.getJSON(
    //             this.action + "?callback=?",
    //             $(this).serialize(),
    //             function (data) {
    //                 if (data.Status === 400) {
    //                     alert("An error occured while processing your request. Please try again later.");
    //                 } else { // 200
    //                     $("#success_subscribe").fadeIn();
    //                     $('#success_subscribe').delay(2000).fadeOut();
    //                     $('#subForm').trigger('reset');
    //                     $('.submit_btn').prop('disabled', false);
    //             }
    //         });
    //     }
    //     else{
    //         $("#agree_terms").focus();
    //         alert("Please agree to receive newsletter before continuing.")
    //         $('.submit_btn').prop('disabled', false);
    //     }
    // });
    
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
    banner.map(banner => {
        banner.isVideo=false;
    });
    
    var video_banner = {};
    video_banner.name = "Video Title"
    video.description = "Video description goes here";
    video.isVideo = true;
    banners.unshift(video_banner);
    // <li>
    //             <div id="hero">
    //                 <video autoplay muted loop id="banner_video">
    //                     <source src="https://www.mallmaverick.com/system/site_images/photos/000/045/539/original/GirlWalkingMM1.mp4?1541450822"
    //                         type="video/mp4">
    //                 </video>
    //                 <div class="main_container hero_container">
    //                     <div class="banner_text">
    //                         <h2 class="banner_title">Video Title</h2>
    //                         <a class="banner_btn " href="/">
    //                             <p>Video description goes here</p>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </li>
    renderBanner('#banner_template','#home_banner', banners);
    
    // home-mobile-banners
    var repo_images = null;
    repo = getRepoDetailsByName('Mobile Banners');
    
    if( repo !== null && repo !== undefined){
        repo_images = repo.images.sortBy(function(o){ return o.id});
        console.log("repo", repo_images);
        $.each( repo , function( key, val ) {
            val.image_url = "//mallmaverick.com"+val.photo_url;
            // image_url
        });
        repo_images = repo_images.sortBy(function(o){ return o.id});
        renderGeneral('#mobile_home_banner', '#mobile_banner_template', repo_images);
        $('.flexslider.banner_slider.show_phone').flexslider({
            animation: "slide",
            slideshow: false
        });
    }
    
    
    $('.flexslider.banner_slider').flexslider({
        animation: "slide",
        slideshow: false
    });
}