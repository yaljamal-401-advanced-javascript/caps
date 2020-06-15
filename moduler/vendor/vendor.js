require('dotenv').config();
const net = require('net');
const socket = new net.Socket();
const faker = require('faker');
const STORE_NAME = process.env.STORE_NAME || 'Yazan Store'
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
// const events = require('../events.js');
// const handler = require('../caps/caps.js').vendor;


socket.connect(PORT,HOST,()=>{
    console.log('Vendor Connected');
});
socket.on('data',(payload)=>{
    let event=JSON.parse(payload.toString());
    if(event.event==='delivered')
    console.log(`Thank You For Delivering ${event.customerOrder.orderId}`);
});

setInterval(() => {
    const order =
    {
        time: new Date(),
        store: STORE_NAME,
        orderId: Math.ceil(Math.random() * 100),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    };
    socket.write(JSON.stringify({event:'pickup',customerOrder:order}));

}, 5000);
// socket.connect(PORT, HOST, () => {
//     console.log('Connected');
//     socket.on('data', (data) => {
//         const event = JSON.parse(data);
//         console.log(new Date().toLocaleDateString(),event.event,event.payload);
//         events.on('delivered', handler);

//     });
//     socket.on('close', () => console.log('Connection Closed'));
// });
socket.on('error', (err) => console.log('Vendor socket error', err.message));