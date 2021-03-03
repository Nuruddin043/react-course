import React from 'react';
import { useParams, useHistory } from "react-router-dom";

const ProductDetail = (props) => {
    const params=useParams()

    const product=props.productlist[params.id]
    return (
        <>
            
            name: {product.name}  <br />
            description: {product.description} <br />
            price: {product.price} <br />
            category: {product.category}
        </>
    )
}


export default ProductDetail;