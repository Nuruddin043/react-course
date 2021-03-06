import axios from 'axios'
import {useState,useEffect} from 'react'
import Loading from './loading'
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
    const params=useParams()
    const [loadingState,setLoading] = useState(false)
    const [buttonState, updateBtnState] = useState(false)
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    const [category,setCategory] = useState('')

    useEffect(() => {
        async function getData(){
            try{
                setLoading(true)
                let product_id=params.id
                const {data}=await axios.get(`https://fakestoreapi.com/products/${product_id}`)
                setTitle(data.title)
                setPrice(data.price)
                setDescription(data.description)
                setImage(data.image)
                setCategory(data.category)
                setLoading(false)
               
                
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [])

    const updateProduct=async()=>{
        try{
            updateBtnState(true)
            setLoading(true)
            await axios.post("https://fakestoreapi.com/products",{
                title,price,image,description,category
            })
            updateBtnState(false)
            setLoading(false)
            alert('Product updated successfully')
        }catch(e){
            alert(e)
        }
      
    }
    return ( <>
        {
            loadingState && <Loading />
        }
        Title: <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br />
        Price: <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br />
        Description: <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> <br />
        Category: <input type="text"  value={category} onChange={(e)=>{setCategory(e.target.value)}} />  <br />
        <button onClick={updateProduct} disabled={buttonState}>Update</button>
 
    </>
    );
}
 
export default UpdateProduct;