import axios from 'axios'
import {useState} from 'react'
import Loading from './loading'
const CreateProduct = () => {
    const [loadingState,setLoading] = useState(false)
    const [buttonState, updateBtnState] = useState(false)
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    const [category,setCategory] = useState('')
    const createProduct=async()=>{
        try{
            updateBtnState(true)
            setLoading(true)
            await axios.post("https://fakestoreapi.com/products",{
                title,price,image,description,category
            })
            updateBtnState(false)
            setLoading(false)
            alert('New Product added successfully')
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
        <button onClick={createProduct} disabled={buttonState}>Submit</button>
 
    </>
    );
}
 
export default CreateProduct;