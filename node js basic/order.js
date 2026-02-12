const EventEmitter = require('events');

const myEmitter = new EventEmitter();
function orderedplace(orderId) {
    console.log(`Order with ID ${orderId} has been placed.`);
}

myEmitter.on('orderPlaced', orderedplace);
myEmitter.emit('orderPlaced', 12345);

