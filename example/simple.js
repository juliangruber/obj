var o = require('..');

console.log(o({ foo: 'bar' }).clone().get());

var obj = o({ foo: 'bar' })
  .clone()
  .set('bar', 'baz')
  .sub('baz')
    .set('some', 'value')
    .out()
  .get();

console.log(obj);

console.log(o({ foo: 'bar' }).mv('foo', 'bar').get());
