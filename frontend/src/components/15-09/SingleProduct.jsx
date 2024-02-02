import React, { useContext,useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../helpers/AxiosConfig';
import toast from 'react-hot-toast';
import './Page.css';


const SingleProduct = () => {
    const {id} =useParams();
    // console.log(id)
    const {state} = useContext(AuthContext)  
 const [productData, SetProductData] = useState({})

    async function getSingleProductData() {
        try {
            const { data } = await api.get(`/product/get-single-product?id=${id}`)
            // const { data } = await axios.get(`http://localhost:8000/api/v1/product/single-product`)
            if (data.success) {
                SetProductData(data.product)
            
            }
        }
        catch (error) {
            toast.error(error.data.message)
        }
    }
    useEffect(() => {
       
        if (id) {
            getSingleProductData()

        }
    }, [id])


return (
    <div>
      {productData?._id ?
        <div id='parentDiv'>
          <div className='blackborder w-40' >
            <img style={{ width:"100%" ,height:"100%", border:"5px solid black" }} src={productData.image} /></div>
          <div/>
          <div style={{width :"40%", height : "300px", border :"5px solid black"}}>
            <h1>{productData.name}</h1>
            <h2>Price : {productData.price}$</h2>
            <h2>Category : {productData.category}</h2>
            {/* <h3>Description : {productData.description}</h3> */}
           <button onClick={() => Cart(productData._id)}>Cart</button>

        </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>

)
}
export default SingleProduct