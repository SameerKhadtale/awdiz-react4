import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import api from '../helpers/AxiosConfig';
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import './SingleProductNew.css';
import AuthContext from '../Context/AuthContext.jsx'


const SingleProductNew = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const {state} = useContext(AuthContext)

  async function Cart(id) {
    if (state.user.id && id) {
        try {
            const response = await api.post("/user/add-cart", { userId: state.user.id, productId: id })
            if (response.data.success) {
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    } else {
        toast.error("Please login to add product to cart.")
    }
}
       

  useEffect(() => {

    async function getSingleProductData() {
      try {
        const { data } = await axios.get(`/product//get-single-product?id=${id}`)
        if (data.success) {
          setProductData(data.product)
        }

      } catch (error) {
        console.log(error)
      }
    } if (id) {
      getSingleProductData();
    }
  }, [id])

  console.log(productData, "productData")

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
            {/* <h3>Description : {productData.description}</h3> */}
            {/* <h3>Rating : {productData.rating.rate}</h3> */}
            {/* <h3>Number of Rating : {productData.rating.count}</h3> */}
            {/* <i class="fa-brands fa-instagram"></i> */}
            <button onClick={() => Cart(productData._id)}>Cart</button>


          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default SingleProductNew