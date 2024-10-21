import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList() {
    const { items } = useSelector(state => state.products);

    return (
        <div className="product-list">
            {items.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
