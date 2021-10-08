import React from 'react';
import '@styles/ProductInfo.scss';
import Biki from '@logos/biki.jpeg';
import buttonAddToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img src={Biki} alt="bike" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="primary-button add-to-cart-button">
					<img src={buttonAddToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
