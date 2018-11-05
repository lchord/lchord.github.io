$(document).ready(function(){
    $(".nav-toggle").click(function(){
        $(this).toggleClass("is-active");
        $("#menu").toggleClass("menu-iv");
        $("#menu").toggleClass("menu-show");
    });
  });