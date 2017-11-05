var test = require('tape');
var ista = require('./');

test('strict', function(t) {
  t.ok(ista.strict(new Int8Array()), 'Int8Array');
  t.ok(ista.strict(new Int16Array()), 'Int16Array');
  t.ok(ista.strict(new Int32Array()), 'Int32Array');
  t.ok(ista.strict(new Uint8Array()), 'Uint8Array');
  t.ok(ista.strict(new Uint16Array()), 'Uint16Array');
  t.ok(ista.strict(new Uint32Array()), 'Uint32Array');
  t.ok(ista.strict(new Float32Array()), 'Float32Array');
  t.ok(ista.strict(new Float64Array()), 'Float64Array');

  t.ok(!ista.strict(new Array()), 'Array');
  t.ok(!ista.strict([]), '[]');

  t.end();
});

test('loose', function(t) {
  t.ok(ista.loose(new Int8Array()), 'Int8Array');
  t.ok(ista.loose(new Int16Array()), 'Int16Array');
  t.ok(ista.loose(new Int32Array()), 'Int32Array');
  t.ok(ista.loose(new Uint8Array()), 'Uint8Array');
  t.ok(ista.loose(new Uint16Array()), 'Uint16Array');
  t.ok(ista.loose(new Uint32Array()), 'Uint32Array');
  t.ok(ista.loose(new Float32Array()), 'Float32Array');
  t.ok(ista.loose(new Float64Array()), 'Float64Array');

  t.ok(!ista.loose(new Array()), 'Array');
  t.ok(!ista.loose([]), '[]');

  t.end();
});

test('specific', function(t) {
  t.ok(ista.int8Array(new Int8Array()), true);
  t.ok(ista.uint8Array(new Uint8Array()), true);
  t.ok(ista.uint8ClampedArray(new Uint8ClampedArray()), true);
  t.ok(ista.int16Array(new Int16Array()), true);
  t.ok(ista.uint16Array(new Uint16Array()), true);
  t.ok(ista.int32Array(new Int32Array()), true);
  t.ok(ista.uint32Array(new Uint32Array()), true);
  t.ok(ista.float32Array(new Float32Array()), true);
  t.ok(ista.float64Array(new Float64Array()), true);

  t.ok(!ista.int8Array(new Uint8Array()), false);
  t.ok(!ista.uint8Array(new Int8Array()), false);
  t.ok(!ista.uint8ClampedArray(new Int32Array()), false);
  t.ok(!ista.int16Array(''), false);
  t.ok(!ista.uint16Array({}), false);
  t.ok(!ista.int32Array(), false);
  t.ok(!ista.uint32Array(new Uint8ClampedArray()), false);
  t.ok(!ista.float32Array([]), false);
  t.ok(!ista.float64Array(new Float32Array()), false);

  t.end();
});
