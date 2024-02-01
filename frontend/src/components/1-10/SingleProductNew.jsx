import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProductNew.css';

const SingleProductNew = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

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
            <h3>Description : {productData.description}</h3>
            <h3>Rating : {productData.rating.rate}</h3>
            <h3>Number of Rating : {productData.rating.count}</h3>
            {/* <i class="fa-brands fa-instagram"></i> */}

          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default SingleProductNew