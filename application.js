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
        $('html,body').animate( { scrollTop:$("#contact").offset().top } , 500);
    });
    $('#open_features').click(function(e){
        e.preventDefault();
        $('#feature_insider').slideToggle();
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
        var pathArray = window.location.pathname.split( '/' );
        var slug = pathArray[pathArray.length-1];
        var blog = getBlogDataBySlug('home-features');
        blog_posts = blog.posts.sortBy(function(o){ return o.publish_date });
        var post_details = getPostDetailsBySlug(slug);
        
        renderMobileFeature("#mobile_feature_container", "#mobile_feature_template", blog_posts);
        renderFeaturePages("#feature_page_container", "#feature_page_template", blog_posts);
        renderFeaturePages("#footer_container", "#footer_template", blog_posts);
    }
    
    function renderFeaturePages(feature_page_container, feature_page_template, posts){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(feature_page_template).html();
        $.each(posts, function(key, val) {
            var rendered = Mustache.render(template_html, val);
            item_rendered.push(rendered);
        });
        $(feature_page_container).html(item_rendered.join(''));
    }
    
    function renderMobileFeature(mobile_feature_container, mobile_feature_template, posts){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(feature_page_template).html();
        $.each(posts, function(key, val) {
            var rendered = Mustache.render(template_html, val);
            item_rendered.push(rendered);
        });
        $(mobile_feature_container).html(item_rendered.join(''));
    }
    
    loadMallDataCached(renderAll);  
    
}

function templateInit () {
    // console.log("template_init");
    $('<div class="loader_backdrop"><div class="loader">Loading...</div></div>').appendTo(document.body);
}
function show_content(){
    $(".yield").css({visibility: "visible"});
    $(".loader_backdrop").remove();
}
function renderGallery(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    $.each( collection , function( key, val ) {
        if (val.photo_url.indexOf('missing.png') > -1) {
            val.gallery_image = "//codecloud.cdn.speedyrails.net/sites/57f7f01f6e6f647835890000/image/png/1461352407000/HallifaxLogo.png";
        } else {
            val.gallery_image = "//www.mallmaverick.com" + val.photo_url;
        }

        var rendered = Mustache.render(template_html,val);
        item_rendered.push(rendered);
    });
    $(container).html(item_rendered.join(''));
}

function renderGeneral(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html); 
    $.each( collection , function( key, val ) {
        
        val.template_image = "//mallmaverick.com" + val.photo_url;
        
        var repo_rendered = Mustache.render(template_html,val);
        item_rendered.push(repo_rendered);
    });
    $(container).html(item_rendered.join(''));
}
        
function fadeContent(){
    $('#feature_insider .row').fadeIn();
}