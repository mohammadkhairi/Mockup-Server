'use strict'

const { expect } = require('chai');
const mongoose = require('mongoose');

const MongoMockupServer = require('../src/mongo_mockup_server');

describe('Mockup Server', () => {
    let TestModel, mongoMockupServer;

    before(() => {
        mongoMockupServer = new MongoMockupServer();

        TestModel = mongoose.model('TestModel', new mongoose.Schema({
            name: String,
            id: String,
        }));
    });

    after(() => {
        mongoMockupServer.cleanup();
    });

    describe('when  data into dummy model while running Mockup Mongodb Server', () => {
        it('should insert the data into the mongodb', async () => {
            const test = await TestModel.create({
                name: 'test',
                id: 'test'
            });

            expect(test.name).equals('test');
        });
    })
});