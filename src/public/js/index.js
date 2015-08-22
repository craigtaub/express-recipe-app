(function (){
  function Index() {
      methods = {
          showEmptyMessage($table) {
              $table.html(function () {
                  $('.empty-msg').css("display", "none");
                  if ($('.table tr:visible').length === 0) {
                      $('.empty-msg').css("display", "block");
                  }
              });
          },
          hideUnmatchedRows($rows, context) {
              var val = $.trim($(context).val()).replace(/ +/g, ' ').toLowerCase();

              $rows
                  .show()
                  .filter(function () {
                      var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                      return text.indexOf(val) === -1;
                  })
                  .hide();
          },
          attach: function () {
              var $rows = $('.table tr'),
                  $table = $('.table');

              $('#search').keyup(function () {
                  methods.hideUnmatchedRows($rows, this);
                  methods.showEmptyMessage($table);
              });
          }
      };
      return {
          init: function () {
              setTimeout(methods.attach, 1);  // next browser tick
          }
      };
  }

  var index = new Index();
  index.init();
})();
