let burrito = [23, 18, 9, 3, 87, 12, 5, 22, 14]

// Use high level functions (i.e. map, reduce, filter) to return an array of only the even numbers from the original array.
const even = (n) => {
  let x = parseInt(n);
  return (x % 2 === 0);
};

const onlyEven = burrito.filter(even);


// Again, using high level functions, output the sum of the even numbers array.
onlyEven.reduce( (prev, curr) => {
  return prev + curr;
},0);
