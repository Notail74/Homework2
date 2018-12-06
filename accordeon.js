
$(document).ready(function () {
    initTabAccord();
  }); 
  
  function initTabAccord() {
    var items = $(".team-acco__item");
    var titleBtn = $(".team-acco__trigger");
    var classItemActiv = "active";
  
    titleBtn.click(function (e) {
      e.preventDefault();
      var self = $(this);
      var parrent = self.parents(".team-acco__item");
  
      if (parrent.hasClass (classItemActiv)){
        parrent.removeClass(classItemActiv)   
      } else {
          items.removeClass(classItemActiv);
          parrent.addClass(classItemActiv);
      }
    })
  }
  