export const DiscountPrice = (Price, OriginalPrice) => {
  const ans = Price / OriginalPrice;
  const percentage = ans * 100;

  return percentage.toFixed(0);
};


const array = [4,8,2,9,1]
const result = array.sort();
console.log(result)