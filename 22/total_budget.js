const
  laptopPrice = 35000,
  tabletPrice = 15000,
  mobilePrice = 20000;


function totalBudget({ laptops, tablets, mobiles }) {
  return laptops * laptopPrice + tablets * tabletPrice + mobiles * mobilePrice;
}


console.log(
  totalBudget({
    laptops: 3,
    mobiles: 6,
    tablets: 4
  })
); //285000