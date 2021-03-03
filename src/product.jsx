import React, { useState } from 'react';
import Loading from './loading'
import { useHistory } from "react-router-dom";
const Product = (props) => {
    const history=useHistory()

    const handleClick = (id) => {

        history.push(`/product-details/${id}`);
      };
    

    return (
        <>
            {
               props.productlist.map((product, index) => {
                    return <button onClick={() => handleClick(index)} key={index}>
                        <div className="product">
                            Name: {product.name} <br />
                            Price: {product.price}
                        </div>
                    </button>
                })
            }


        </>
    )
}


export default Product;