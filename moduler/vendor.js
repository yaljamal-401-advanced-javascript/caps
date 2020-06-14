require('dotenv').config();
const faker = require('faker');
const randCompany= faker.company.companyName();
const STORE_NAME = process.env.STORE_NAME || randCompany
const events = require('./events.js');
const handler = require('./caps.js').vendor;


setInterval(() => {
    const order =
    {
        store: STORE_NAME,
        time:new Date(),
        orderId: Math.ceil(Math.random() * 100),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    events.emit('pickup',order);
}, 5000);

events.on('delivered', handler);