// The default language is English
var lang = "en";
    
// Check for localStorage support
if('localStorage' in window){
     
    var usrLang = localStorage.getItem('uiLang');
    if(usrLang) {
        lang = usrLang
    }
}

console.log(lang);

$(document).ready(function() {

  $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
     });
});

// get/set the selected language
$(".translate").click(function() {
      var lang = $(this).attr("id");

    // update localStorage key
    if('localStorage' in window) {
        localStorage.setItem('uiLang', lang);
        console.log( localStorage.getItem('uiLang') );
    }

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// =========================== Set color for EN/FR when selected =========================== 
$('.select').on('click', function() {
  $('.select').removeClass('selected');
  $(this).addClass('selected');
});