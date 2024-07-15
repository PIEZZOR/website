$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    function newDate() {
      return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = +newDate();
  });

const btn = food-menu.onClick("#food-menu");
btn.addEventListener("click", function(){
  alert("want to view our menu ?")
});