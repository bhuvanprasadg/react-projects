import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";

const ProductsContainer = ({ products, addToCart, removeFromCart }) => (
  <ProductsList title="Products">
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        onRemoveFromCartClicked={() => removeFromCart(product.id)}
      />
    ))}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
  products: getVisibleProducts(state.products),
  quantity:state.cart.quantityById,
}};

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  ProductsContainer
);
