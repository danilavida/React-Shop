import React from 'react';
import '@styles/OrderItem.scss';
import Biki from '@logos/biki.jpeg';
import iconClose from '@icons/icon_close.png';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={Biki} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
