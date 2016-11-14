/*Created 2015-02-28 by CodeCloud Team*/

function init(){
    
    $('.menu_toggler').click(function(){
        if ($('#header').hasClass('darken')){
            $('#header').addClass('lighten');
            $('#header').removeClass('darken');
            $('body').removeClass('no_scroll');
            $(".modal-backdrop").remove();
        } else {
            $('#header').removeClass('lighten');
            $('#header').addClass('darken');
            $('body').addClass('no_scroll');
            setTimeout(function() {$('<div class="modal-backdrop custom_backdrop"></div>').appendTo(document.body); }, 300);
        }
        $('.custom_mobile_menu').slideToggle();
    })
    
    $(".scroll").click(function(e) {
        e.preventDefault();
        if(window.screen.width > 768){
            $('html,body').animate( { scrollTop:$(this).offset().top-85 } , 500);
        }
        else{
            $('html,body').animate( { scrollTop:$(this).offset().top } , 500);
        }
    });
    $('#open_features').click(function(e){
        e.preventDefault();
        $('#feature_insider').slideToggle()
    });
    
    var previousScroll = 0;
    $(window).scroll(function(event){
        if(window.screen.width > 768){
            var scroller = $(this).scrollTop();
            if(scroller > (previousScroll + 10) || scroller < (previousScroll - 20)){
                $('#feature_insider').slideUp()
            }
            previousScroll = scroller;
        }
    });
    
    var navbar = document.getElementById("header");
	var headroom = new Headroom(navbar);
	headroom.init();
	
	function renderAll(){
        var blog = getBlogDataBySlug('home-features');
        console.log(blog.posts);
        
        renderFeatureLinks("#feature_links_container", "#feature_links_template", blog.posts);
    }
    
    function renderFeatureLinks(feature_links_container, feature_links_template, blog.posts){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(feature_links_template).html();
        $.each(blog.posts, function(key, val) {
            var rendered = Mustache.render(template_html, val);
            item_rendered.push(rendered);
        });
        $(feature_links_container).html(item_rendered.join(''));
    }
    loadMallDataCached(renderAll); 
}