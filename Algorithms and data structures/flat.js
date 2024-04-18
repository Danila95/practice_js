// Сделать массив плоским
// [1, [2,3]] => [1, 2, 3]

function flatten(...stack) {
  const flat = [];

  while (stack.length) {
    const elem = stack.pop();
    console.log(elem)
    if (Array.isArray(elem)) {
      stack.push(...elem);
      continue;
    }
    flat.unshift(elem);
  }

  return flat;
}

console.log(flatten([1, [2, [3]], 4, [5]]));
