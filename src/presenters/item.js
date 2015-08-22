module.exports = function(itemData) {
    var Mustache = require('mustache'),
        fs = require('fs'),
        q = require('q'),
        deferred = q.defer(),
        itemView = {
          itemData: itemData[0]
        };

    fs.readFile('src/views/item.mustache', function (err, data) {
        if (err) throw err;
        var itemMarkup = Mustache.render(data.toString(), itemView);

        return deferred.resolve(itemMarkup);
    });

    return deferred.promise;
};
