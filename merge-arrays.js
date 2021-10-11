// merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
// merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]

const merge = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  const resultArray = [];

  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > arr3[i + 1]) {
      let tmp = arr3[i + 1];
      arr3[i + 1] = arr3[i];
      arr3[i] = tmp;
      i = -1; //essentially sets i to 0
    }
  }
  return arr3;
};

console.log(merge([4, 5, 6], [1, 2, 3, 4])); //[ 1, 2, 3
