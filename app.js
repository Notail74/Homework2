$(document).ready(function () {
  initTabMenu();
});

function initTabMenu() {
  var items = $("menu-acco__item");
  var titleBtn = $(".menu-acco__trigger-text");
  var classItemActiv = "menu-acco__item active";

  titleBtn.click(function (e) {
    e.preventDefault();
    var self = $(this);
    var parrent = self.parents(".menu-acco__item");

    if (parrent.hasClass (".menu-acco__item active")){
      parrent.removeClass(classItemActiv)   
    } else {
        items.removeClass(classItemActiv);
        parrent.addClass(classItemActiv);
    }
  })


}
