module.exports = function(app){
    var server = app.listen(3030, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
    });
};
