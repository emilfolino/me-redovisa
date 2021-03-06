/**
 * Test for class Card.
 */
"use strict";

/* global describe it */
const me = require("../../../public/javascripts/index");
var assert = require("assert");


process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../app.js');

//console.log(server);

chai.should();

chai.use(chaiHttp);

describe("Test something from our homepage", function() {
    describe("We test the info function.", function() {
        it("info.name should be Gunvor Nilsson", function() {
            var info = me.info.find();
            let res = info[0].name;

            assert.equal(res, "Gunvor Nilsson");
        });

        it("info.city should be Mölndal", function() {
            let info = me.info.find();
            let res = info[0].city;

            assert.equal(res, "Mölndal");
        });
    });
});


describe('Index new model', () => {
    describe('GET /index', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("array");
                    res.body.length.should.be.above(0);
                    res.body[0].should.be.an("object");
                    res.body[0].name.should.be.a("string");

                    done();
                });
        });
    });
});
