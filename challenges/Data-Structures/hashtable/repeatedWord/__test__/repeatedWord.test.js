const findRepeatedWord = require('../repeatedWord.js');

describe('repeated word tests', () => {
  it('should return the first repeated word', () => {
    let string1 = 'Once upon a time, there was a brave princess who...';
    let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(findRepeatedWord(string1)).toBe('a');
    expect(findRepeatedWord(string2)).toBe('it');
    expect(findRepeatedWord(string3)).toBe('summer');
  });
  it('should return no repeated words if there are no repeated words', () => {
    let string = 'Hello There';
    expect(findRepeatedWord(string)).toBe('no repeated words');
  });
});
