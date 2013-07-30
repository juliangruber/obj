module.exports = o;

function o (obj, par) {
  if (!(this instanceof o)) return new o(obj, par);
  this.obj = obj || {};
  this.par = par;
}

o.prototype.use = c(function (fn) {
  this.obj = fn(this.obj);
});

o.prototype.set = c(function (key, value) {
  this.obj[key] = value;
});

o.prototype.get = function (key) {
  return key
    ? this.obj[key]
    : this.obj;
};

o.prototype.sub = function (key) {
  var obj = this.obj;
  if (!obj[key]) obj[key] = {};
  return o(obj[key], this);
};

o.prototype.tmp = function () {
  return o({}, this);
};

o.prototype.out = function () {
  return this.par;
};

o.prototype.keys = function () {
  return Object.keys(this.obj);
};

o.prototype.parEach = c(function (fn) {
  var self = this;
  self.par.keys().forEach(function (k) {
    fn.call(self, k, self.par.get(k));
  });
});

o.prototype.each = c(function (fn) {
  var self = this;
  self.keys().forEach(function (k) {
    fn.call(self, k, self.get(k));
  });
});

o.prototype.clone = function () {
  return this
    .tmp()
    .parEach(function (k, v) { this.set(k, v) });
};

o.prototype.mv = c(function (a, b) {
  this.obj[b] = this.obj[a];
  delete this.obj[a];
});

function c (fn) {
  return function () {
    fn.apply(this, arguments);
    return this;
  }
}
