var events=require('events');
var eventEmitter=new events.EventEmitter();

var myEventHandler= function(){
    console.log('I like to read !!!');
}

eventEmitter.on('like',myEventHandler);
eventEmitter.emit('like');