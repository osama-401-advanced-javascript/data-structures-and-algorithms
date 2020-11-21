'use strict';
const Hashtable = require('../hashtable.js');

describe.skip('Hashtable Test', () => {
  it('should get correct value no collisions', () => {
    const table = new Hashtable();
    table.add('apple', 'pippin');
    const value = table.get('apple');

    expect(value).toBe('pippin');
  });
});
