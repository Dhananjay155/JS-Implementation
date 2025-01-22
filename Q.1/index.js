//1. Array Flattening

function flattenArray(arr, depth = Infinity) {
    let result = [];
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        result = result.concat(flattenArray(item, depth - 1));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  
  console.log(flattenArray([1, [2, [3, [4, 5]]]], 2)); // [1, 2, 3, [4, 5]]
  console.log(flattenArray([1, [2, [3, [4, 5]]]]));    // [1, 2, 3, 4, 5]
  