var express = require('express'); // (npm install --save express)
var request = require('supertest');

it('should send back a JSON object with goodCall set to true', function() {
    request()
      .fetch('/api/github-users/:username')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function(err, res) {
        if (err) { return done(err); }
        codeStatus = res.statusCode;
        expect(codeStatus).to.equal(200);
        // Done
        done();
      });
  });