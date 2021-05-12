function move_window(){
  $("#panel_left").animate({marginLeft: "-92px"}, 1000).delay(500);
  $("#panel_right").animate({marginLeft: "91px"}, 1000).delay(500);
  $("#panel_left").animate({marginLeft: "0px"}, 1000);
  $("#panel_right").animate({marginLeft: "0px"}, 1000);
  requestAnimationFrame(move_window); }
requestAnimationFrame(move_window);
