# obj

Object chaining tools.

WIP, things will change.

## Usage

```js
var o = require('obj');

// instead of this:
var coords = clone(position.coords);
coords.timestamp = position.timestamp;
fn(null, coords);

// you can do this:
fn(null, o(position.coords)
           .clone()
           .set('timestamp', position.timestamp)
           .get());
// ..which might be more code but is way easier to read

o({ foo: 'bar' })
  .clone()
  .set('bar', 'baz')
  .sub('baz')
    .set('some', 'value')
    .out()
  .get();
// => { foo: 'bar', bar: 'baz', baz: { some: 'value' } }

o({ foo: 'bar' }).clone().get();
// => { foo: 'bar' }
```

Here is the `clone` implementation:

```js
o.prototype.clone = function () {
  return this
    .tmp()
    .parEach(function (k, v) { this.set(k, v) });
};
```

## API

### o(obj)
### o#use(fn)
### o#set(key, value)
### o#get(key)
### o#sub(key)
### o#tmp()
### o#out()
### o#parEach(fn)
### o#each(fn)
### o#clone()

## Installation

With [npm](https://npmjs.org) do:

```
npm install obj
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
