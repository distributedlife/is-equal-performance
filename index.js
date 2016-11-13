const lodash = require('lodash');
const underscore = require('underscore');
const nodeDeepEqual = require('deep-equal');
const Benchmark = require('benchmark');
const Immutable = require('immutable');

function newSuite (name) {
  return new Benchmark.Suite(name, {
    onStart: () => {
      console.log(`\n\n| ${name} |`);
      console.log('| Library | Ops/Sec | Relative Margin of Error | # of Runs Sampled |')
      console.log('| --- | --- | --- | --- |')
    },
    onCycle: event => console.log(toMarkdownRow(event.target)),
    // onCycle: event => console.log(String(event.target)),
    onComplete: function () {
      console.log('| Fastest is ' + this.filter('fastest').map('name') + ' |');
    }
  });
}

function toMarkdownRow(target) {
  return '| ' + target.name + ' | ' + Benchmark.formatNumber(target.hz.toFixed(target.hz < 100 ? 2 : 0)) + ' | ±' + target.stats.rme.toFixed(2) + '% | ' + target.stats.sample.length +  ' | ';
}

const empty = newSuite('Empty Object Test');
const emptyA = new require('./data/empty');
const emptyB = new require('./data/empty');
const iEmptyA = Immutable.Map(require('./data/empty'));
const iEmptyB = Immutable.Map(require('./data/empty'));

empty.add('lodash', () => lodash.isEqual(emptyA, emptyB));
empty.add('underscore', () => underscore.isEqual(emptyA, emptyB));
empty.add('node-deep-equal', () => nodeDeepEqual(emptyA, emptyB));
empty.add('Object.is', () => Object.is(emptyA, emptyB));
empty.add('Immutable.is', () => Immutable.is(iEmptyA, iEmptyB));
empty.add('stringify', () => {
  return JSON.stringify(emptyA).split('').sort().join('') === JSON.stringify(emptyB).split('').sort().join('');
});
empty.add('stringify-optomistic', () => JSON.stringify(emptyA) === JSON.stringify(emptyB));
empty.run({ async: false });


const small = newSuite('Small Object Test');
const smallA = new require('./data/small');
const smallB = new require('./data/small');
const iSmallA = Immutable.Map(require('./data/small'));
const iSmallB = Immutable.Map(require('./data/small'));

small.add('lodash', () => lodash.isEqual(smallA, smallB));
small.add('underscore', () => underscore.isEqual(smallA, smallB));
small.add('node-deep-equal', () => nodeDeepEqual(smallA, smallB));
small.add('Object.is', () => Object.is(smallA, smallB));
small.add('Immutable.is', () => Immutable.is(iSmallA, iSmallB));
small.add('stringify', () => {
  return JSON.stringify(smallA).split('').sort().join('') === JSON.stringify(smallB).split('').sort().join('');
});
small.add('stringify-optomistic', () => JSON.stringify(smallA) === JSON.stringify(smallB));
small.run({ async: false });


const medium = newSuite('Medium Object Test');
const mediumA = new require('./data/medium');
const mediumB = new require('./data/medium');
const iMediumA = Immutable.Map(require('./data/medium'));
const iMediumB = Immutable.Map(require('./data/medium'));

medium.add('lodash', () => lodash.isEqual(mediumA, mediumB));
medium.add('underscore', () => underscore.isEqual(mediumA, mediumB));
medium.add('node-deep-equal', () => nodeDeepEqual(mediumA, mediumB));
medium.add('Object.is', () => Object.is(mediumA, mediumB));
medium.add('Immutable.is', () => Immutable.is(iMediumA, iMediumB));
medium.add('stringify', () => {
  return JSON.stringify(mediumA).split('').sort().join('') === JSON.stringify(mediumB).split('').sort().join('');
});
medium.add('stringify-optomistic', () => JSON.stringify(mediumA) === JSON.stringify(mediumB));
medium.run({ async: false });


const large = newSuite('Large Object Test');
const largeA = new require('./data/large');
const largeB = new require('./data/large');
const iLargeA = Immutable.Map(require('./data/large'));
const iLargeB = Immutable.Map(require('./data/large'));

large.add('lodash', () => lodash.isEqual(largeA, largeB));
large.add('underscore', () => underscore.isEqual(largeA, largeB));
large.add('node-deep-equal', () => nodeDeepEqual(largeA, largeB));
large.add('Object.is', () => Object.is(largeA, largeB));
large.add('Immutable.is', () => Immutable.is(iLargeA, iLargeB));
large.add('stringify', () => {
  return JSON.stringify(largeA).split('').sort().join('') === JSON.stringify(largeB).split('').sort().join('');
});
large.add('stringify-optomistic', () => JSON.stringify(largeA) === JSON.stringify(largeB));
large.run({ async: false });
