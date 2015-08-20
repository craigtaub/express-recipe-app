(function(){
  function Index () {
      methods = {
          attach: function () {
            var $rows = $('.table tr');
            $('#search').keyup(function() {
              var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

              $rows.show().filter(function() {
                var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                return text.indexOf(val) === -1;
              }).hide();
            });
          }
      };
      return {
          init: function () {
              setTimeout(methods.attach, 1);
              // next browser tick
          }
      };
  }

  var index = new Index();
  index.init();
})();
