var request = require('supertest'),
    express = require('express'),
    app = require('../src/app'),
    cheerio = require('cheerio'),
    assert = require('assert');

describe('List page', function() {
    it("renders 200 status code", function(done) {
        request(app)
          .get('/')
          .expect(200);
        done();
    });
    it('returns template with correct data', function(done){
        request(app)
          .get('/')
          .end(function(err, res){
              $ = cheerio.load(res.text);
              assert.equal($('.table td').html(), '<a href="/item/lemon-chicken">Lemon Chicken</a>');
              assert.equal($('.empty-msg').html(), 'Sorry, nothing matched your filter term');
              done();
          });
    });
});

describe('Non-existing page', function() {
    it("renders 404 status code", function(done) {
        request(app)
          .get('/something-else')
          .expect(404);
        done();
    });
});

describe('Recipe Page', function() {
    it("returns 200 and has title, if page exists", function(done) {
        request(app)
          .get('/item/lemon-chicken')
          .expect(200)
          .end(function(err, res){
              $ = cheerio.load(res.text);
              assert.equal($('h2').html(), 'Lemon Chicken');
              done();
          });
    });
    it("returns 200 and has error message, if page doesnt exist", function(done) {
        request(app)
          .get('/item/something-else')
          .expect(200)
          .end(function(err, res){
              $ = cheerio.load(res.text);
              assert.equal($('h2').html(), 'Sorry, this recipe doesn&apos;t exist or may have been removed');
              done();
          });
    });
});
