/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});


document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

// منع اختصارات لوحة المفاتيح الشائعة لفتح أدوات المطور
document.addEventListener("keydown", function(event) {
  if (
      event.key === "F12" || 
      (event.ctrlKey && event.shiftKey && event.key === "I") || 
      (event.ctrlKey && event.shiftKey && event.key === "J") || 
      (event.ctrlKey && event.key === "U")
  ) {
      event.preventDefault();
  }
});

// مراقبة فتح أدوات المطور
setInterval(function() {
  if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
      document.body.innerHTML = "<h1 style='text-align: center; margin-top: 20%; color: red;'>🚨 ممنوع التلاعب بالكود 🚨</h1>";
  }
}, 1000);
