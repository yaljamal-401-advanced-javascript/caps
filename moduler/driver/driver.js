// const events = require('../events.js');
// const pickup=require('../caps/caps.js').driverPickUp;
// const delivery=require('../caps/caps.js').driverDelivered;
const net = require('net');
const socket = net.Socket();

const PORT=process.env.PORT||3000;
const HOST=process.env.HOST||'localhost';

socket.connect(PORT, HOST, () => {
  console.log('Driver Connected');
});


socket.on('data', (payload) => {
  let event = JSON.parse(payload.toString());

  if (event.event === 'pickup'){
    setTimeout(()=> {

      let newEvent = {event: 'in-transit',order: event.customerOrder};
      console.log('picked', event.customerOrder.orderId);
      socket.write(JSON.stringify(newEvent));
    },1000);
  }

  if (event.event === 'in-transit'){
    setTimeout(()=> {
      let newEvent = {event: 'delivered',order: event.customerOrder};
      console.log('delivered ', event.order.orderId);
      socket.write(JSON.stringify(newEvent));
    },3000);

  }
  
});

socket.on('error', (err) => console.log(`Driver error ${err.message}`));
// function goOutDelivery(payload) {
//     events.emit('in-transit',payload.orderId);
//     setTimeout(()=>{
//         events.emit('delivered',payload)
//     },1000);
// }
// events.on('pickup',pickup);
// events.on('pickup',goOutDelivery);
// events.on('delivered',delivery);