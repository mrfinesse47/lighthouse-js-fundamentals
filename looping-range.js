//range(0, 10, 2);
//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.

function range(start, end, step) {
  let result = [];
  if (start !== undefined && end && step && end > start && step > 0) {
    result[0] = start;
    for (let i = 0; result[i] !== end; i++) {
      result.push(result[i] + step);
    }
  }
  return result;
}
console.log(range(0, 8, 2));

//seems to work but cannot be entered into the code evaluator
