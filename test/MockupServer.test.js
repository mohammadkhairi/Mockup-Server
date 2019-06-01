'use strict'

const { expect } = require('chai');
const mongoose = require('mongoose');

const MockupServer = require('../src/MockupServer');

describe('Mockup Server', () => {
    let TestModel, mockupServer;

    before(() => {
        mockupServer = new MockupServer();

        TestModel = mongoose.model('TestModel', new mongoose.Schema({
            name: String,
            id: String,
        }));
    });

    after(() => {
        mockupServer.cleanup();
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