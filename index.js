const lodash = require('lodash');
const nodeDeepEqual = require('deep-equal');
const Benchmark = require('benchmark');

function newSuite (name) {
  return new Benchmark.Suite(name, {
    onStart: () => console.log(`\n\n${name}`),
    onCycle: event => console.log(String(event.target)),
    onComplete: function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    }
  });
}

const empty = newSuite('Empty Object Test');
const emptyA = require('./data/empty');
const emptyB = require('./data/empty');

empty.add('lodash', () => lodash.isEqual(emptyA, emptyB));
empty.add('node-deep-equal', () => nodeDeepEqual(emptyA, emptyB));
empty.add('Object.is', () => Object.is(emptyA, emptyB));
empty.add('stringify', () => {
  return JSON.stringify(emptyA).split('').sort().join('') === JSON.stringify(emptyB).split('').sort().join('');
});
empty.run({ async: false });


const small = newSuite('Small Object Test');
const smallA = require('./data/small');
const smallB = require('./data/small');

small.add('lodash', () => lodash.isEqual(smallA, smallB));
small.add('node-deep-equal', () => nodeDeepEqual(smallA, smallB));
small.add('Object.is', () => Object.is(smallA, smallB));
small.add('stringify', () => {
  return JSON.stringify(smallA).split('').sort().join('') === JSON.stringify(smallB).split('').sort().join('');
});
small.run({ async: false });


const medium = newSuite('Medium Object Test');
const mediumA = require('./data/medium');
const mediumB = require('./data/medium');

medium.add('lodash', () => lodash.isEqual(mediumA, mediumB));
medium.add('node-deep-equal', () => nodeDeepEqual(mediumA, mediumB));
medium.add('Object.is', () => Object.is(mediumA, mediumB));
medium.add('stringify', () => {
  return JSON.stringify(mediumA).split('').sort().join('') === JSON.stringify(mediumB).split('').sort().join('');
});
medium.run({ async: false });


const large = newSuite('Large Object Test');
const largeA = require('./data/large');
const largeB = require('./data/large');

large.add('lodash', () => lodash.isEqual(largeA, largeB));
large.add('node-deep-equal', () => nodeDeepEqual(largeA, largeB));
large.add('Object.is', () => Object.is(largeA, largeB));
large.add('stringify', () => {
  return JSON.stringify(largeA).split('').sort().join('') === JSON.stringify(largeB).split('').sort().join('');
});
large.run({ async: false });
