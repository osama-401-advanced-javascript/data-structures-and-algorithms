'use strict';

const {multiBracketValidation} = require('../multi-bracket-validation.js');

describe('multiBracketValidation test', () => {
  it('should return true', () => {
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('should return false', () =>{
    expect(multiBracketValidation('[({}]')).not.toBeTruthy();
    expect(multiBracketValidation('(](')).not.toBeTruthy();
    expect(multiBracketValidation('{(})')).not.toBeTruthy();
    expect(multiBracketValidation('[}')).not.toBeTruthy();
    expect(multiBracketValidation(')')).not.toBeTruthy();
  });
});