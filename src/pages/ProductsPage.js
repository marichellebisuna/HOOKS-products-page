import React, { Component } from 'react';
import { ProductContext } from '../context';
import Products from '../components/Products';

export default class ProductsPage extends Component {
	static contextType = ProductContext;
	render() {
		let { products } = this.context;
		console.log(products);

		products = products.map((product) => {
			return <Products key={product.id} product={product} />;
		});
		return (
			<div className="container">
				<h1 className="text-center py-3">All Products</h1>
				<div className="row">{products}</div>
			</div>
		);
	}
}
