const events=require('./moduler/events.js');
const pickup=require('./moduler/caps.js').pickupOrder;
const inTransit=require('./moduler/caps.js').inTransitOrder;
const delivered=require('./moduler/caps.js').deliveredOrder;

events.on('pickup',pickup);
require('./moduler/driver.js');
require('./moduler/vendor.js');
events.on('in-transit',inTransit);
events.on('delivered',delivered);