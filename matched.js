const numbers = [45, 56, 67, 78, 89];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers) {
  // console.log(number);
}

const products = [
  { id: 1, name: "xiami phone one night", price: 19000 },
  { id: 2, name: "iphone", price: 19000 },
  { id: 3, name: "mac book air", price: 19000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 19000 },
  { id: 5, name: "dell inspiron laptop", price: 19000 },
  { id: 6, name: "samsung phone note 9", price: 19000 },
  { id: 7, name: "nokia old age Phone gone", price: 19000 },
  { id: 8, name: "Phone one", price: 19000 },
  { id: 9, name: "LapTop walton", price: 19000 },
];

// for (const product of products) {
//     console.log(product);
// }

function matchedProduct(products, search) {
  const matched = [];
  for (const product of products) {
    // console.log(product.name.includes(search));
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProduct(products, "laptop");
console.log(result);
