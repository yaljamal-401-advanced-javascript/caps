function vendor(payload) {
    console.log(`Vendor : Thank You For Delivering Order ${payload.orderId}`);
}

function driverPickUp(payload) {
    console.log(`Driver Picking Up the order ${payload.orderId}`);
}
function driverDelivered(payload) {
    console.log(`Driver drivelled the order ${payload.orderId}`);
}

const pickupOrder = (payload) => {
    console.log('EVENT pickup');
    console.log('Time :', payload.time);
    console.log('Store :', payload.store);
    console.log('OrderId :', payload.orderId);
    console.log('Customer :', payload.customer);
    console.log('Address :', payload.address);
};

const inTransitOrder=(payload)=>{
    console.log(`EVENT in-transit ${payload.orderId}`);
}
function deliveredOrder(payload){
    console.log(`Delivered Order ${payload.orderId}`);
  }

module.exports={
    vendor,
    driverPickUp,
    driverDelivered,
    pickupOrder,
    inTransitOrder,
    deliveredOrder,
};

