import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductNew = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {

    async function getSingleProductData() {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        if (data) {
          setProductData(data)
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
      {productData?.id ?
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ width: "40%", border: "5px solid black" }}>
            <img style={{ width: "60%", height: "85%" }} src={productData.image} /></div>
          <div style={{ width: "40%", border: "5px solid black" }}>
            <h1>Name : {productData.title}</h1>
            <h2>Price : {productData.price}$</h2>
            <h2>Category : {productData.category}</h2>
            <h3>Description : {productData.description}</h3>
            <h3>Rating : {productData.rating.rate}</h3>
            <h3>Number of Rating : {productData.rating.count}</h3>

          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default SingleProductNew