module.exports = function(dataArray) {
    var Mustache = require('mustache'),
        fs = require('fs'),
        q = require('q'),
        deferred = q.defer(),
        listView = {
          dataArray: dataArray
        };

    fs.readFile('src/views/list.mustache', function (err, data) {
        if (err) throw err;
        var listMarkup = Mustache.render(data.toString(), listView);

        return deferred.resolve(listMarkup);
    });

    return deferred.promise;
};
