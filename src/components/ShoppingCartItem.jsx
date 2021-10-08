import React from 'react';
import '@styles/ShoppingCartItem.scss';
import Biki from '@logos/biki.jpeg';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={Biki} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
		</div>
	);
}

export default ShoppingCartItem;
