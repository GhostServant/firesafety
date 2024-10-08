const ProductDetails = ({ product }) => {
  return (
    <div>
      <h3>Характеристики продукта: {product.name}</h3>
      <p><strong>Цена:</strong> {product.retailPrice} руб./шт</p>
      {product.wholesalePrice && (
        <p><strong>Оптовая цена:</strong> {product.wholesalePrice} руб./шт</p>
      )}
      <p><strong>В наличии:</strong> {product.inStock}</p>
    </div>
  );
};

export default ProductDetails;
