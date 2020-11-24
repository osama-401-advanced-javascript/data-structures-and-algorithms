'use strict';
const leftJoin = require('../left-join');
const Hashtable = require('../../hashtable/hashtable');

describe('Hashtable Test', () => {
  it('should get correct value no collisions', () => {
    const table1 = new Hashtable();
    const table2 = new Hashtable();

    table1.add('fond', 'enamored');
    table2.add('fond', 'averse');
    const value1 = table1.get('fond');
    const value2 = table2.get('fond');
    console.log(value1);

    const value3 = leftJoin(table1, table2);
    const value4 = value3[0].slice(1)[0][0][1];

    expect(value4).toBe(value1);
  });
});
