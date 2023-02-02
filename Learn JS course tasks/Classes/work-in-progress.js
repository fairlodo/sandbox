'use strict'
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

