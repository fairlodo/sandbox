'use strict'
<<<<<<< HEAD
let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }

    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

class Menu {
  choose(value) {
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on('select', value => console.log(`Selected value: ${value}`));

menu.choose('123');
=======
class FormatError extends SyntaxError {
  constructor(desc) {
    super(desc);
    this.name = this.constructor.name;
  }
}

let err = new FormatError('Oshibka formatirovaniya');

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);

>>>>>>> 715cf917bad5178b5ff7ed11fef1dd741581e9af
