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
	
	function renderHeaderDetails(header_container, header_template, post_details){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(header_template).html();
        
        if (post_details.title.length > 0){
            title = post_details.title;
        }
        if (post_details.author.length > 0){
            author = post_details.author;
        }
        var rendered = Mustache.render(template_html, post_details);
        item_rendered.push(rendered);
       
        $(header_container).html(item_rendered.join(''));
    }
    
    function renderMainDetails(main_container, main_template, post_details){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(main_template).html();
        
        if (post_details.image_url.indexOf('missing.png') > -1) {
            image_url = post_details.image_url2
        } else {
            image_url = post_details.image_url;
        }
        if (post_details.html_body.length > 0){
            html_body = post_details.html_body
        }
        var rendered = Mustache.render(template_html, post_details);
        item_rendered.push(rendered);
        
        $(main_container).html(item_rendered.join(''));
    }
    
    function renderFeaturesDetails(features_container, features_template, posts){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(features_template).html();
        $.each(posts, function(key, val) {
            var rendered = Mustache.render(template_html, val);
            item_rendered.push(rendered);
        });
        $(features_container).html(item_rendered.join(''));
    }
    
    function renderDownloadItem(download_container, download_template, post_details){
        var item_list = [];
        var item_rendered = [];
        var template_html = $(download_template).html();
        
        if (post_details.video_link.length > 0){
            video_link = post_details.video_link
        }
        
        var rendered = Mustache.render(template_html, post_details);
        item_rendered.push(rendered);

        $(download_container).html(item_rendered.join(''));
    }
}