const events=require('./moduler/events.js');
const pickup=require('./moduler/caps/caps.js').pickupOrder;
const inTransit=require('./moduler/caps/caps.js').inTransitOrder;
const delivered=require('./moduler/caps/caps.js').deliveredOrder;

events.on('pickup',pickup);
require('./moduler/driver/driver.js');
require('./moduler/vendor/vendor.js');
events.on('in-transit',inTransit);
events.on('delivered',delivered);