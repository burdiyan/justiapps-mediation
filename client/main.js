var Justi = [];

$(document).ready(function(){
  Justi.animateHamburger();
});

Justi.animateHamburger = function(){
  $("#hamburger-menu-button").click(function(){
    alert("click");
    $("#panel-left").stop().velocity(
      {marginLeft: 0}
    );
  });
};