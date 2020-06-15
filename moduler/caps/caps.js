const net = require('net');
const server = net.createServer();
let socketPool = [];
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is up on port ${PORT}`));

const logger = (payload) => {
  let event = JSON.parse(payload.toString());
 
console.log('event',event)
  socketPool.forEach((socket) => {
    socket.write(payload);
  });

  if (event.event === 'pickup') {
    console.log('pickup');
    console.log(event.customerOrder);
    
  }

  if (event.event === 'in-transit')
    console.log('in-transit order', event.order.orderId);

  if (event.event === 'delivered')
    console.log('delivered order', event.customerOrder.orderId);
};

server.on('connection', (socket) => {
  socketPool.push(socket);
  socket.on('data', logger);
});

// server.on('error', (e) => console.log('SERVER ERROR', e.message));

//////////////////////////////////////////////////////////////////
// function vendorDelivered (payload){
//   console.log(
//     `Vendor: thank you for delivering order ${payload.orderID}`,
//   );
// }

// function driverPickup(payload) {
//   console.log(`Driver is picking up order ${payload.orderId}`);
// }

// function  driverDelivered(payload) {
//   console.log(`Delivered order ${payload.orderId}`);
  
// }

// const pickupOrder = (payload) => {
//   console.log('EVENT pickup');
//   console.log('Time:', payload.time);
//   console.log('Store:', payload.store);
//   console.log('OrderID:', payload.orderId);
//   console.log('Customer:', payload.customer);
//   console.log('Address:', payload.address);
// };

// const inTransitOrder = (payload) => {
//   console.log(`EVENT in-transit ${payload.orderId}`);
// };

// function deliveredOrder(payload) {
//   console.log(`Delivered order ${payload.orderId}`);
// }

// module.exports = {
//   vendorDelivered,
//   driverPickup,
//   driverDelivered,
//   pickupOrder,
//   inTransitOrder,
//   deliveredOrder,
// };