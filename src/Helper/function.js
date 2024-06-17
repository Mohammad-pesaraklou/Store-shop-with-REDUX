const shorten = (title) => {
  const splitName = title.split(" ");
  const newName = `${splitName[0]} ${splitName[1]}`;
  return newName;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
const SumQuantity = (products) => {
  const ItemsCounter = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  console.log(ItemsCounter);
  return ItemsCounter;
};
const sumPrice = (products) => {
  const total = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return total;
};
export { shorten, isInCart, quantityCount, sumPrice, SumQuantity };
