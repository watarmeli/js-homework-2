function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
	return message.split(' ').length * pricePerWord;


  // Пиши код выше этой строки
}

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));