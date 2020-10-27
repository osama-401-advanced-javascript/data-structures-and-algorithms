let { Stack } = require('../Data-Structures/stacksAndQueues/stacks-and-queues.js');
function multiBracketValidation(input) {
  let openBrackets = '{[(';
  let closeBrackets = '}])';
  let stack = new Stack();
  for (let index = 0; index < input.length; index++) {
    if (openBrackets.includes(input[index])) {
      stack.push(input[index]);
    }
    else if (closeBrackets.includes(input[index])) {
      let openCloseBracket;
      try {
        openCloseBracket = stack.pop() + input[index];
      } catch(e){
        console.log(false);
        return false;
      }

      if (openCloseBracket === '{}' || openCloseBracket === '()' || openCloseBracket === '[]') {
        continue;
      } else {
        console.log(false);
        return false;
      }
    }
  } 
  if (stack.isEmpty()){
    console.log(true);
    return true;
  }
  console.log(false);
  return false;

}
// multiBracketValidation('{([])}')

module.exports = {multiBracketValidation};