// sample test to run, ES modules need to be transpiled to common js

import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
