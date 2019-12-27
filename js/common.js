$(function(){
  setupChangeLanguage();
})

function setupChangeLanguage () {
  $(".language img").click(function(){
    if (config.lang != $(this).attr('class')) {
       window.location.href = window.location.href.replace(window.location.search, "") + "?lang=" + $(this).attr('class').replace("selected", "");
    }
  }) 

  $("." + config.lang).addClass('selected')
  
}