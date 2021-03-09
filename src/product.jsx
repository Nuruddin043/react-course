import React, { useState, useEffect } from 'react';
import Loading from './loading'
import { useHistory } from "react-router-dom";
import axios from 'axios';
const Product = (props) => {
    const history = useHistory()
    const [productList, setProductlist] = useState([])
    const [loadingState,setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            try {
                const { data } = await axios.get('http://54.162.199.74/products');
                setProductlist(data)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    }, [])

    const handleClick = (id) => {

        history.push(`/product-details/${id}`);
    };


    return (
        <>
        {
            loadingState && <Loading />
        }
            {
                productList.length>0 && 
                productList.map((product, index) => {
                    return <button onClick={() => handleClick(product.id)} key={index}>
                        <div className="product">
                            Title: {product.title} <br />
                            Price: {product.price}<br />
             
                        </div> 
                    </button>
                })
            }


        </>
    )
}


export default Product;