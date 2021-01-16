function calculateTotal(number) {
  // Пиши код ниже этой строки
  let total = 0;
for (let i = 1; i <= number; i += 1) {
  total += i;
}

  return total;

  // Пиши код выше этой строки
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());