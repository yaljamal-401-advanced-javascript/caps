const handler = require('../moduler/caps/caps.js');
let consoleSpy = jest.spyOn(console, 'log');
describe('Handler', () => {
    it('pickup log', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.driverPickUp(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`Driver Picking Up the order ${payload.orderId}`);
    });
    it('in-transit', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.driverDelivered(payload);
        setTimeout(() => {
            expect(consoleSpy).toHaveBeenCalledWith(`Driver drivelled the order ${payload.orderId}`);
        }, 3000);
    });
    it('vendor', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.driverDelivered(payload);
        setTimeout(() => {
            expect(consoleSpy).toHaveBeenCalledWith(`Vendor : Thank You For Delivering Order ${payload.orderId}`);
        }, 5000);
    });
    it('transit', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.inTransitOrder(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`EVENT in-transit ${payload.orderId}`);
    });
    it('delivered order', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.deliveredOrder(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`Delivered Order ${payload.orderId}`);
    });
    it('pickup order', () => {
        let payload = {
            time: '15 june',
            store: 'yaljamal',
            orderId: 1234,
            customer: 'Yazan',
            address: 'Amman'
        };
        handler.pickupOrder(payload);
        expect(consoleSpy).toHaveBeenCalledWith(`EVENT pickup`);
        expect(consoleSpy).toHaveBeenCalledWith('Time :', payload.time);
        expect(consoleSpy).toHaveBeenCalledWith('Store :', payload.store);
        expect(consoleSpy).toHaveBeenCalledWith('OrderId :', payload.orderId);
        expect(consoleSpy).toHaveBeenCalledWith('Customer :', payload.customer);
        expect(consoleSpy).toHaveBeenCalledWith('Address :', payload.address);
    });
})