module.exports = function(app){
    var listPres = require('./presenters/list.js'),
        itemPres = require('./presenters/item.js'),
        data = require('./data.js');

    app.get('/', function (req, res) {
        listPres(data()).then(function(listMarkup) {
            res.render('layout', {markup: listMarkup});
        });
    });

    app.get('/item/:id', function (req, res) {
        var itemId = req.params.id,
            items = data(),
            itemData = items.filter(function (item) {
                return (item.id === itemId);
            })

        itemPres(itemData).then(function(listMarkup) {
            res.render('layout', {markup: listMarkup});
        });
    });
};
