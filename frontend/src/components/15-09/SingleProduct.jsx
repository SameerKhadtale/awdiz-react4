import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../helpers/AxiosConfig';
import toast from 'react-hot-toast';

const SingleProduct = () => {

    const {id} =useParams();
    console.log(id)
    
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
            <img style={{ width: "60%", height: "85%" }} src={productData.image} /></div>
          <div/>
          <div className='blackborder w-40'>
            <h1>{productData.name}</h1>
            <h2>Price : {productData.price}$</h2>
            <h2>Category : {productData.category}</h2>
            <h3>Description : {productData.description}</h3>
        </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>

)
}
export default SingleProduct