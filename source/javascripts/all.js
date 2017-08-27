//= require_tree .
//= require jquery
//= require bootstrap-sprockets

//home-page-sports-tabs responsivness
$(document).ready(function(){
$(function(){
  $(".tab-2").on("click", function(e){
        // Change active tab
        $(".tab-2").removeClass("active");
        $(this).addClass("active");


        var content = $(this).data("target");
        $(".tab-content").addClass("hidden");
        $(content).removeClass("hidden");

        var tabSelector = $(this).data("target");
        $(tabSelector).removeClass("hidden");
      });

});
});
