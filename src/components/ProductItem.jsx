import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import Biki from '@logos/biki.jpeg';
import buttonAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={Biki} alt="Bike" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={buttonAddToCart} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
