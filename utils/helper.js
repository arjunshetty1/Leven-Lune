export const DiscountPrice = (Price, OriginalPrice) => {
  const ans = Price / OriginalPrice;
  const percentage = ans * 100;

  return percentage.toFixed(0);
};
