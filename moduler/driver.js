const events = require('../moduler/events.js');
const pickup=require('./caps.js').driverPickUp;
const delivery=require('./caps.js').driverDelivered;


function goOutDelivery(payload) {
    events.emit('in-transit',payload.orderId);
    setTimeout(()=>{
        events.emit('delivered',payload)
    },1000);
}
events.on('pickup',pickup);
events.on('pickup',goOutDelivery);
events.on('delivered',delivery);