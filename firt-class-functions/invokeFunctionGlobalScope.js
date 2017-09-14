var product = {
  productName: 'sapato',
  productPrice: 150
};

var taxtCalculation = function(productPrice){
  return productPrice * 0.10;
};

var calculatePrice = function(productPrice, taxtCalculation) {
  return productPrice + taxtCalculation;
}
console.log(
    calculatePrice(product.productPrice,
    taxtCalculation(product.productPrice)
    )
);
