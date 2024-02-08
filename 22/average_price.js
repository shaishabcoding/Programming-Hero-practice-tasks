const phones = [
  {
    model: "PhoneA",
    brand: "Iphone",
    price: 95000
  },
  {
    model: "PhoneB",
    brand: "Samsung",
    price: 40000
  },
  {
    model: "PhoneC",
    brand: "Oppo",
    price: 26000
  },
  {
    model: "PhoneD",
    brand: "Nokia",
    price: 35000
  },
  {
    model: "PhoneE",
    brand: "Iphone",
    price: 105000
  },
  {
    model: "PhoneF",
    brand: "HTC",
    price: 48000
  },
];


function averagePrice(phones) {
  let
    totalPrice = 0,
    totalPhones = 0;

  for (const { price } of phones) {
    totalPrice += price;
    totalPhones++;
  }

  const avg = totalPrice / totalPhones;

  return Math.round(avg);
}


console.log(averagePrice(phones));// 58167