class EventEmitter {
  constructor() {
    this.events = {};
    this.nextGuid = -1;
  }

  on(type, listener) {
    const events = this.events;
    if (!events.hasOwnProperty(type)) {
      events[type] = {};
    }

    let guid = 'uuid_' + ++this.nextGuid;
    events[type][guid] = listener;
    return this;
  }

  once(type, listener) {
    function callback() {
      this.off(type, callback); //只能激活一次，所以在第一次emit的时候，在这里就把这个事件删除了
      Reflect.apply(listener, this, arguments);
    }
    this.on(type, callback);
    return this;
  }

  off(type, listener) {
    const events = this.events;
    if (!events.hasOwnProperty(type)) {
      return false;
    }

    const handlers = events[type];
    for (let [key, value] of Object.entries(handlers)) {
      if (handlers.hasOwnProperty(key) && listener === value) {
        delete handlers[key];
        return true;
      }
    }
    return false;
  }

  emit(type, ...args) {
    const events = this.events;
    const handlers = events[type];
    if (!handlers) {
      return false;
    }
    for (let listener of Object.values(handlers)) {
      Reflect.apply(listener, this, args);
    }
    return this;
  }
}

let emitter = new EventEmitter();
// on 测试
emitter.on('customEvent', (...args) => {
  console.log('on 测试', args); // [123, 456]
});
// once 测试
emitter.once('customEvent', args => {
  console.log('once 测试', args); // [123]
});
emitter.emit('customEvent', 123, 456);
emitter.emit('customEvent', 234);

// off 测试
let fn = args => {
  console.log('off 测试', args);
};
emitter.on('customEvent', fn);
emitter.emit('customEvent', 123);
emitter.off('customEvent', fn);
emitter.emit('customEvent', 234);
/* off 测试 123 */
