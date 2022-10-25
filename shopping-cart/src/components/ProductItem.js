import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({
  product,
  onAddToCartClicked,
  onRemoveFromCartClicked,
  cart,
}) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
    <button
      onClick={onRemoveFromCartClicked}
      disabled={
        cart.hasOwnProperty(product.id) && quantity[product.id] > 0
          ? ""
          : "disabled"
      }
    >
      {cart.hasOwnProperty(product.id) && quantity[product.id] > 0
        ? "Remove from cart"
        : "Not in cart"}
    </button>
    {console.log(getAddedIds)}
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
