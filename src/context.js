import React, { Component } from 'react';
import { items } from '../src/data/productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: []
	};

	componentDidMount() {
		this.setProducts(items);
	}

	setProducts = (products) => {
		let storeProducts = products.map((item) => {
			const { id } = item.sys;
			const image = item.fields.image.fields.file.url;
			const product = { id, ...item.fields, image };
			return product;
		});

		this.setState({
			products: storeProducts
		});
	};
	render() {
		return <ProductContext.Provider value={{ ...this.state }}>{this.props.children}</ProductContext.Provider>;
	}
}
const ProductConsumer = ProductContext.Consumer;
export { ProductContext, ProductProvider, ProductConsumer };
