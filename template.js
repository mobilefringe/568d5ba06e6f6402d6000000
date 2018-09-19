$(document).ready(function(e) {
    init(e);
    loadMallDataCached(renderAll); 
    window.scrollTo(0, 0);
    console.log("newsletter",window.location.href);
    if(window.location.href.indexOf("#premium") > -1) {
        changePremiumBG();
        $("#premium").addClass("active_templ_btn");
        $("#premium").trigger("click");
        window.scrollTo(0, 0);
    }
    else if(window.location.href.indexOf("#standard") > -1) {
        $("#standard").addClass("active_templ_btn");
        $("#standard").trigger( "click" );
        console.log("trigger click!");
        changeStandardBG();
        window.scrollTo(0, 0);
    }
    else if(window.location.href.indexOf("#custom") > -1) {
        $("#custom").addClass("active_templ_btn");
        $("#custom").trigger("click");
        changeCustomBG();
        window.scrollTo(0, 0);
    }
    else if(window.location.href.indexOf("#landing_page") > -1) {
        $("#landing_page").addClass("active_templ_btn");
        $("#landing_page").trigger("click");
        // changeLandingPageBG();
        window.scrollTo(0, 0);
    }
    else if(window.location.href.indexOf("#newsletter") > -1) {
        $("#newsletters").addClass("active_templ_btn");
        $("#newsletters").trigger("click");
        console.log("this", window);
        changeNewsletterBG();
        window.scrollTo(0, 0);
    }
    else {
        changePremiumBG();
        $("#premium").addClass("active_templ_btn");
        $("#premium").trigger("click");
        window.scrollTo(0, 0);
    }
    
    
});

// $(window).on('resize', function(){
//     if(window.location.href.indexOf("#premium") > -1) {
//         changePremiumBG();
//     }
//     else if(window.location.href.indexOf("#standard") > -1) {
//         changeStandardBG();
//     }
//     else if(window.location.href.indexOf("#custom") > -1) {
//         changeCustomBG();
//     }
//     else if(window.location.href.indexOf("#landing_page") > -1) {
//         changeLandingPageBG();
//     }
//     else if(window.location.href.indexOf("#newsletter") > -1) {
//         changeNewsletterBG();
//     }
    

// });
// function changePremiumBG (){
    
//     $(".show_phone.template_banner").css({"padding": ""});
//     $(".template_banner_image").removeAttr( 'style' );
//     $("#template_content").removeAttr( 'style' );
//     $(".button_bar").removeAttr( 'style' );
//     $("#mm_post_title").removeAttr( 'style' );
//     $("#mm_post_author").removeAttr( 'style' );
//     $(".mm_post_title_m").removeAttr( 'style' );
//     $(".mm_post_author_m").removeAttr( 'style' );
//     $(".template_banner_image").removeClass("custom_tab");
//     $(".template_banner_image").removeClass("standard_tab");
//     $("#mm_post_title").removeClass("col-md-4 col-sm-12");
//     $("#mm_post_title").addClass("col-md-4 col-sm-5");
//     $('.template_banner.hidden_phone #orange_line').hide();
   
//     $(".hidden_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/5b5a1e166e6f64135d330000/image/jpeg/1532552434000/PremiumPage.jpg')", "background-size": "100% 100%","padding": "170px 0 227px 0" });
//     $(".show_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497970490000/PremiumPatternM.png')", "background-size": "100% 100%"});
//     $(".show_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497888964000/Pattern Asset.png'); 
//     $(".hidden_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497888964000/Pattern Asset.png');
//     $("#mm_post_title").text("THE BEST IN SHOPPING CENTRE WEBSIDE DESIGNS");
//     $("#mm_post_author").text("");
//     $(".mm_post_title_m").text("THE BEST IN SHOPPING CENTRE WEBSIDE DESIGNS");
//     $(".mm_post_author_m").text("");
    
//     $('#premium_design_container').show();
//     $('#standard_design_container').hide();
//     $('#custom_design_container').hide();
//     $("#landing_page_container").hide();
//     $('#newsletter_design_container').hide();
//     $("#premium").removeClass("active_templ_btn");
//     $("#premium").addClass("active_templ_btn");
//     $("#standard").removeClass("active_templ_btn");
//     $("#custom").removeClass("active_templ_btn");
//     $("#landing_page").removeClass("active_templ_btn");
//     $("#newsletters").removeClass("active_templ_btn");
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
// }
// function changeStandardBG (){
//     $(".show_phone.template_banner").css({"padding": ""});
//     $(".template_banner_image").removeAttr( 'style' );
//     $("#template_content").removeAttr( 'style' );
//     $(".button_bar").removeAttr( 'style' );
//     $("#mm_post_title").removeAttr( 'style' );
//     $("#mm_post_author").removeAttr( 'style' );
//     $(".mm_post_title_m").removeAttr( 'style' );
//     $(".mm_post_author_m").removeAttr( 'style' );
//     $(".template_banner_image").removeClass("custom_tab");
//     $(".template_banner_image").removeClass("standard_tab");
//     $("#mm_post_title").removeClass("col-md-12 col-sm-12");
//     $("#mm_post_title").addClass("col-md-6 col-sm-6");
//     $('.template_banner.hidden_phone #orange_line').hide();
//     $(".template_banner_image").addClass("standard_tab");

    
//   $(".hidden_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/5b5a1e166e6f64135d330000/image/jpeg/1532552434000/StandardPage.jpg')", "background-size": "100% 100%","padding": "170px 0 227px 0" });
//   $(".show_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497984708000/StandardBGM.png')", "background-size": "100% 100%"});
     
//   $(".show_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497903662000/Standard Asset (1).png'); 
//   $(".hidden_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497901852000/Standard Page Asset.png'); 
//     //$(".show_phone.template_banner_image").css({"max-width":"380px", "top":"500px"});
//     $("#mm_post_title").text("THE BEST IN SHOPPING CENTRE WEBSIDE DESIGNS");
//     $("#mm_post_author").text("");
//     $(".mm_post_title_m").text("THE BEST IN SHOPPING CENTRE WEBSIDE DESIGNS");
//     $(".mm_post_author_m").text("");
    
//     $('#premium_design_container').hide();
//     $('#standard_design_container').show();
//     $('#custom_design_container').hide();
//     $("#landing_page_container").hide();
//     $('#newsletter_design_container').hide();
//     $("#standard").removeClass("active_templ_btn");
//     $("#standard").addClass("active_templ_btn");
//     $("#premium").removeClass("active_templ_btn");
//     $("#custom").removeClass("active_templ_btn");
//     $("#landing_page").removeClass("active_templ_btn");
//     $("#newsletters").removeClass("active_templ_btn");
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
//  }
 
//  function changeLandingPageBG (){
//     $(".show_phone.template_banner").css({"padding": ""});
//     $(".template_banner_image").removeAttr( 'style' );
//     $("#template_content").removeAttr( 'style' );
//     $(".button_bar").removeAttr( 'style' );
//     $("#mm_post_title").removeAttr( 'style' );
//     $("#mm_post_author").removeAttr( 'style' );
//     $(".mm_post_title_m").removeAttr( 'style' );
//     $(".mm_post_author_m").removeAttr( 'style' );
//     $(".template_banner_image").removeClass("custom_tab");
//     $(".template_banner_image").removeClass("standard_tab");
//     $("#mm_post_title").removeClass("col-md-12 col-sm-12");
//     $("#mm_post_title").addClass("col-md-6 col-sm-6");
//     $('.template_banner.hidden_phone #orange_line').hide();
//     // $(".template_banner_image").addClass("standard_tab");

    
//   $(".hidden_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1508788672000/desktopbg.png')", "background-size": "100% 100%","padding": "170px 0 227px 0" });
//   $(".show_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1508788672000/mobilebg.png')", "background-size": "100% 100%"});
     
//   $(".show_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1508788673000/desktopasset.png'); 
//   $(".hidden_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1508788672000/mobileasset.png'); 
//     //$(".show_phone.template_banner_image").css({"max-width":"380px", "top":"500px"});
//     $("#mm_post_title").text("MALL MAVERICK LANDING PAGE DESIGNS");
//     $("#mm_post_author").text("");
//     $(".mm_post_title_m").text("MALL MAVERICK LANDING PAGE DESIGNS");
//     $(".mm_post_author_m").text("");
    
//     $('#premium_design_container').hide();
//     $('#standard_design_container').hide();
//     $('#custom_design_container').hide();
//     $("#landing_page_container").show();
//     $('#newsletter_design_container').hide();
//     $("#landing_page").removeClass("active_templ_btn");
//     $("#landing_page").addClass("active_templ_btn");
//     $("#premium").removeClass("active_templ_btn");
//     $("#standard").removeClass("active_templ_btn");
//     $("#custom").removeClass("active_templ_btn");
//     $("#newsletters").removeClass("active_templ_btn");
//     console.log("in landinf custom bg");
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
//  }
 
// function changeCustomBG (){
//     // Remove other styles
//     $(".template_banner_image").removeClass("custom_tab");
//     $(".template_banner_image").removeClass("standard_tab");
//     $(".template_banner_image").removeAttr( 'style' );
//     $("#mm_post_title").removeAttr( 'style' );
//     $("#mm_post_author").removeAttr( 'style' );
//     $("#mm_post_title").removeClass("col-md-4 col-sm-5");
//     $("#mm_post_title").addClass("col-md-12 col-sm-12");
//     $('.template_banner.hidden_phone #orange_line').show();
//     $(".button_bar").css({"margin-bottom": "70px"});
    
//     $(".hidden_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/5b5a1e166e6f64135d330000/image/jpeg/1532552434000/CustomPage.jpg')", "background-color":"#fff", "padding-bottom" :"45px"});
//     $(".template_banner_image").addClass("custom_tab");
//     $(".hidden_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1499356255000/Mockupasset.png');
//     $(".custom_tab.hidden_phone.template_banner_image").css({"max-width":"250px", "left":"19%","top": "110px"});
    
//   //Custom page changes based on window width
//   if($( document ).width() > 768) {
//       $(".button_bar").css({ "margin-top": "60px"});
//         $("#template_content").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1499356265000/imageassetmain.png')", "background-size": "cover","padding": "100px 80px 90px 80px", "margin-bottom":"0"});
//         $("#mm_post_title").text("Spend time with our designers");
//         $("#mm_post_author").text("and help them understand the vision that encaptures the uniqueness of your shopping centre.");
//         $("#mm_post_title").css({"text-align": "right", "color" : "#000", "padding-right":" 55px"});
//         $("#mm_post_author").css({"text-align": "left", "color" : "#000", "padding":"0px 30px 0px 205px", "margin-right":"0", "font-size": "20px","font-weight": "400"});
//         $('#custom_bg_asset').hide();
//         $("#custom_design_container #orange_line").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1497030625000/Orange Line.png');
//   }
//   else {
//       $(".show_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1499960436000/Custom_Mobile_BG.png')", "background-size": "100% 100%", "padding": "150px 0 70px 0"});
//       $("#template_content").css({"background-image":"url('')", "background-size": "cover","padding": "100px 30px 90px", "margin-bottom":"0"});
//         $('#custom_bg_asset').show();
//       $(".show_phone.template_banner_image").attr('src', '');
//       $(".mm_post_title_m").text("Spend time with our designers");
//       $(".mm_post_author_m").text("and help them understand the vision that encaptures the uniqueness of your shopping centre.");
//       $(".mm_post_title_m").css({"text-align": "center", "color" : "#fff", "padding":" 30px", "font-size":"18px","margin-bottom": "0"});
//       $(".mm_post_author_m").css({"text-align": "center", "color" : "#fff", "padding":"30px", "margin":"0", "font-size": "18px","font-weight": "400","width": "100%"});
//       $(".button_bar").css({ "margin-top": "10px"});
//       $("#custom_design_container #orange_line").attr('src', '//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1499963387000/Orange Line_mini.png');
//   }
//   if($( document ).width() > 768 && $( document ).width() < 975) {
//       $(".custom_tab.hidden_phone.template_banner_image").css({"left":"1%"});
//   }
   
//     $('#custom_design_container').show();
//     $('#premium_design_container').hide();
//     $('#standard_design_container').hide();
//     $("#landing_page_container").hide();
//     $('#newsletter_design_container').hide();
//     $("#custom").removeClass("active_templ_btn");
//     $("#custom").addClass("active_templ_btn");
//     $("#premium").removeClass("active_templ_btn");
//     $("#standard").removeClass("active_templ_btn");
//     $("#landing_page").removeClass("active_templ_btn");
//     $("#newsletters").removeClass("active_templ_btn");
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
// }
// function changeNewsletterBG (){
    
//         console.log("newsletter");
//     // showw newsletter button only
//     $(".newsletter_btn_contaienr").show();
//     $(".template_btn_contaienr").hide();
    
//     $(".show_phone.template_banner").css({"padding": ""});
//     $(".template_banner_image").removeAttr( 'style' );
//     $(".show_phone.template_banner_image").removeAttr( 'style' );
//     $("#template_content").removeAttr( 'style' );
//     $(".button_bar").removeAttr( 'style' );
//     $("#mm_post_title").removeAttr( 'style' );
//     $("#mm_post_author").removeAttr( 'style' );
//     $(".mm_post_title_m").removeAttr( 'style' );
//     $(".mm_post_author_m").removeAttr( 'style' );
//     $(".template_banner_image").removeClass("custom_tab");
//     $(".template_banner_image").removeClass("standard_tab");
//     $("#mm_post_title").removeClass("col-md-12 col-sm-12");
//     $("#mm_post_title").addClass("col-md-6 col-sm-6");
//     $('.template_banner.hidden_phone #orange_line').hide();
   
//     $(".hidden_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1502306266000/desktop.png')", "background-size": "100% 100%","padding": "170px 0 227px 0" });
//     $(".show_phone.template_banner").css({"background-image":"url('//codecloud.cdn.speedyrails.net/sites/568d5ba06e6f6402d6000000/image/png/1502208407000/RegisterBG Copy 13.png')", "background-size": "100% 100%"});
//     $(".show_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/5b5a1e166e6f64135d330000/image/png/1502309363000/mobileimageasset (1).png'); 
//     if($( document ).width() < 468) {
//         $(".show_phone.template_banner_image").css({"max-width": "200px"});
//     }
//     else {
//         $(".show_phone.template_banner_image").removeAttr( 'style' );
//     }
//     $(".hidden_phone.template_banner_image").attr('src', '//codecloud.cdn.speedyrails.net/sites/5b5a1e166e6f64135d330000/image/png/1502306303000/image asset.png');
//     $(".hidden_phone.template_banner_image").css({"top":"105px"});
//     $("#mm_post_title").text("MALL MAVERICK NEWSLETTER DESIGNS");
//     $("#mm_post_author").text("");
//     $(".mm_post_title_m").text("MALL MAVERICK NEWSLETTER DESIGNS");
//     $(".mm_post_author_m").text("");
    
//     $('#newsletter_design_container').show();
//     $('#custom_design_container').hide();
//     $('#premium_design_container').hide();
//     $('#standard_design_container').hide();
//     $("#newsletters").removeClass("active_templ_btn");
//     $("#newsletters").addClass("active_templ_btn");
//     $("#custom").removeClass("active_templ_btn");
//     $("#premium").removeClass("active_templ_btn");
//     $("#standard").removeClass("active_templ_btn");
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     });
// }
function renderAll(){
    var templates = getBlogDataBySlug("home-templates").posts;
    var sorted_p_templates = [];
    $.each(templates, function(key, val) {
        $.each( val.tag , function( tag_key, tag ) {
            //val.taglist = val.taglist + " " + tag;
            if(tag == "Premium"){
                sorted_p_templates.push(val);
            }
            if(tag == "is_new"){
                val.is_new ="display:block";
            }
            else {
                val.is_new ="display:none";
            }
         });
        
    });
    console.log("sorted_p_templates", sorted_p_templates);
    sorted_p_templates = sorted_p_templates.sortBy(function(o){ return o.publish_date }).reverse();
    renderGeneral('#premium_design_container','#premium_design_template', sorted_p_templates);
    var sorted_s_templates = [];
    $.each(templates, function(key, val) {
        $.each( val.tag , function( tag_key, tag ) {
            //val.taglist = val.taglist + " " + tag;
            if(tag == "Standard"){
                sorted_s_templates.push(val);
            }
            if(tag == "is_new"){
                val.is_new ="display:block";
            }
            else {
                val.is_new ="display:none";
            }
         });
    }); 
    console.log("sorted_s_templates", sorted_s_templates);
    //console.log(sorted_templates);
    sorted_s_templates = sorted_s_templates.sortBy(function(o){ return o.publish_date }).reverse();
    renderGeneral('#standard_design_container','#standard_design_template', sorted_s_templates);
    
    var sorted_l_templates = [];
    $.each(templates, function(key, val) {
        $.each( val.tag , function( tag_key, tag ) {
            //val.taglist = val.taglist + " " + tag;
            if(tag == "Landing Page"){
                sorted_l_templates.push(val);
            }
            if(tag == "is_new"){
                val.is_new ="display:block";
            }
            else {
                val.is_new ="display:none";
            }
         });
    }); 
    //console.log(sorted_templates);
    sorted_l_templates = sorted_l_templates.sortBy(function(o){ return o.publish_date }).reverse();
    renderGeneral('#landing_page_container','#landing_page_template', sorted_l_templates);
    
     var sorted_n_templates = [];
    $.each(templates, function(key, val) {
        $.each( val.tag , function( tag_key, tag ) {
            //val.taglist = val.taglist + " " + tag;
            if(tag == "Newsletter"){
                sorted_n_templates.push(val);
            }
            if(tag == "is_new"){
                val.is_new ="display:block";
            }
            else {
                val.is_new ="display:none";
            }
         });
    }); 
    //console.log(sorted_templates);
    sorted_n_templates = sorted_n_templates.sortBy(function(o){ return o.publish_date }).reverse();
    console.log(sorted_n_templates);
    renderGeneral('#newsletter_design_container','#newsletter_design_template', sorted_n_templates);
    
    $("#premium").click(function(e) {
        changePremiumBG();
        var x = window.pageXOffset,
        y = window.pageYOffset;
        $(window).one('scroll', function () {
            window.scrollTo(x, y);
        });
    });
    $("#standard").click(function(e) {
        var x = window.pageXOffset,
        y = window.pageYOffset;
        $(window).one('scroll', function () {
            window.scrollTo(x, y);
        });
        changeStandardBG();
    });
    $("#custom").click(function(e) {
        changeCustomBG();
        var x = window.pageXOffset,
        y = window.pageYOffset;
        $(window).one('scroll', function () {
            window.scrollTo(x, y);
        });
    });
    
}
function changePremiumBG() {
    removeStyling();
    // $('.design_containers').hide();
    $('#premium_design_container').show();
    $("#premium").addClass("active_templ_btn");
    
}
function changeStandardBG() {
    removeStyling();
    $('#standard_design_container').show();
    $("#standard").addClass("active_templ_btn");
}
function changeCustomBG() {
    removeStyling();
     $('#custom_design_container').show();
    $("#custom").addClass("active_templ_btn");
    $("#template_content").addClass("custom_container");
    $("#default_template_banner").hide();
    $("#custom_template_banner").show();
}
function changeNewsletterBG() {
    removeStyling();
    $('#newsletter_design_container').show();
    $("#template_title").text("MALL MAVERICK NEWSLETTER DESIGNS");
    $(".newsletter_btn_contaienr").show();
    $(".template_btn_contaienr").hide()
}
function removeStyling () {
    $('.design_containers').hide();
    $(".template_btn").removeClass("active_templ_btn");
    $("#template_content").removeClass("custom_container");
    $("#template_title").text("THE BEST IN SHOPPING CENTER WEBSITE DESIGNS");
    $("#default_template_banner").show();
    $("#custom_template_banner").hide()
}