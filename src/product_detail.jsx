import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams,useHistory } from "react-router-dom";
import Loading from './loading'
const ProductDetail = () => {
    const history = useHistory()
    const params=useParams()
    const [product, setProduct] = useState({})
    const [loadingState,setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            try{
                let product_id=params.id
                const {data}=await axios.get(`https://fakestoreapi.com/products/${product_id}`)
              
                setProduct(data)
                setLoading(false)
                
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [])
    const handleClick = (id) => {

        history.push(`/update_product/${id}`);
    };

    return (
        <>
        {
            loadingState &&  <Loading />
        }

        {product.hasOwnProperty('title') &&
           <div>
                <strong>title:</strong> {product.title} <br />
                <strong>price:</strong>: {product.price} <br />
                <strong>description:</strong>: {product.description}  <br />
                <strong>category:</strong>: {product.category} <br /><br />


                <button onClick={() => handleClick(product.id)}>Edit productinfo</button>
            </div> 
        }
            
           
        </>
    )
}


export default ProductDetail;