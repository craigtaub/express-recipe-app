var itemPres = require('../../src/presenters/item.js'),
    cheerio = require('cheerio'),
    assert = require('assert');

var itemData = {
  "id": "lemon-chicken",
  "name": "Lemon Chicken",
  "cookingTime": "30 minutes",
  "ingredients": {
    "full": [
      {
        "ingredient": "Chicken Breasts",
        "quantity": "4"
      },
      {
        "ingredient": "tsp Thyme",
        "quantity": "1"
      },
      {
        "ingredient": "Lemon",
        "quantity": "1"
      }
    ]
  },
  "imageUrl": "images/recipes/lemon_chicken.png"
};

describe('Item presenter', function() {
    it("renders error message if no itemData", function(done) {
        var arr = [];
        itemPres(arr).then(function(itemMarkup) {
            assert(itemMarkup, '<h2>Sorry, this recipe doesn\'t exist or may have been removed</h2>')
            done();
        });
    });
    it("renders template with data in, if has data", function(done) {
        var arr = [];
        arr.push(itemData);
        itemPres(arr).then(function(itemMarkup) {
            $ = cheerio.load(itemMarkup);
            assert.equal($('h2').html(), 'Lemon Chicken');
            assert.equal($('img').attr('src'), '/images/recipes/lemon_chicken.png');
            assert.equal($('.ingredients p').html(), '4 x Chicken Breasts');
            done();
        });
    });
});
