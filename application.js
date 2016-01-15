/*Created 2015-02-28 by CodeCloud Team*/

function init(){
    $(".scroll").click(function(e) {
        e.preventDefault();
        if(window.screen.width > 768){
            $('html,body').animate( { scrollTop:$(this.hash).offset().top-85 } , 500);
        }
        else{
            $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 500);
        }
    });
    $('#open_features').click(function(e){
        e.preventDefault();
        $('#feature_insider').slideToggle()
    });
    
    var previousScroll = 0;
    $(window).scroll(function(event){
        var scroller = $(this).scrollTop();
        if(scroller > (previousScroll + 10) || scroller < (previousScroll - 100)){
            $('#feature_insider').slideUp()
        }
        previousScroll = scroller;
    });
}