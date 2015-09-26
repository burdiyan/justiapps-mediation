var Justi = [];

$(document).ready(function(){
  console.log("load");
  Justi.animateHamburger();

});

Justi.animateHamburger = function(){
  console.log("load");
  $("#hamburger-menu-button").click(function(){
    console.log("click");
    $("#panel-left").stop().velocity(
      {marginLeft: 0}
    );
  });
};