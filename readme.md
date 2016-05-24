
> is-equal-performance@1.0.0 test /Users/distributedlife/projects/is-equal-performance
> node index.js



Empty Object Test
lodash x 47,200,624 ops/sec ±10.20% (66 runs sampled)
underscore x 29,406,558 ops/sec ±3.27% (72 runs sampled)
node-deep-equal x 30,877,578 ops/sec ±2.84% (79 runs sampled)
Object.is x 32,141,917 ops/sec ±3.16% (76 runs sampled)
Immutable.is x 41,974,703 ops/sec ±1.77% (79 runs sampled)
stringify x 299,420 ops/sec ±4.32% (76 runs sampled)
stringify-optomistic x 1,218,458 ops/sec ±3.14% (77 runs sampled)
Fastest is lodash


Small Object Test
lodash x 60,285,794 ops/sec ±1.82% (79 runs sampled)
underscore x 32,277,476 ops/sec ±1.54% (80 runs sampled)
node-deep-equal x 32,033,824 ops/sec ±1.54% (81 runs sampled)
Object.is x 32,450,495 ops/sec ±2.31% (78 runs sampled)
Immutable.is x 547,989 ops/sec ±1.91% (77 runs sampled)
stringify x 120 ops/sec ±1.85% (66 runs sampled)
stringify-optomistic x 1,657 ops/sec ±3.97% (76 runs sampled)
Fastest is lodash


Medium Object Test
lodash x 50,637,555 ops/sec ±4.65% (70 runs sampled)
underscore x 30,348,149 ops/sec ±2.15% (77 runs sampled)
node-deep-equal x 30,358,670 ops/sec ±2.65% (79 runs sampled)
Object.is x 30,175,853 ops/sec ±4.57% (79 runs sampled)
Immutable.is x 3,570,975 ops/sec ±2.15% (80 runs sampled)
stringify x 9.57 ops/sec ±4.10% (27 runs sampled)
stringify-optomistic x 520 ops/sec ±1.67% (78 runs sampled)
Fastest is lodash


Large Object Test
lodash x 57,144,730 ops/sec ±3.79% (78 runs sampled)
underscore x 32,544,532 ops/sec ±1.35% (83 runs sampled)
node-deep-equal x 31,029,833 ops/sec ±3.00% (79 runs sampled)
Object.is x 32,803,527 ops/sec ±1.25% (83 runs sampled)
Immutable.is x 3,662,961 ops/sec ±2.41% (80 runs sampled)
stringify x 1.62 ops/sec ±5.72% (8 runs sampled)
stringify-optomistic x 57.75 ops/sec ±6.04% (60 runs sampled)
Fastest is lodash
