import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import api from '../helpers/AxiosConfig';

const Products = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    // toast.success("Page rendered on browser..")
    async function getProducts() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        // console.log(data, "data here")
        setProducts(data)
      }
      catch (error) {
        toast.error(error.message)
      }

    }
    getProducts()
  }, [])
  return (
    <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {products.map((pro) => (
            <div onClick={() => router(`/single-product/${pro.id}`)} style={{ border: "1px solid black", width: "23%", height: "550px", marginBottom: "10px" }}>
                <img alt='...' style={{ width: "80%", height: "300px" }} src={pro.image} />
                <h1>Name :{pro.name}</h1>
                <h3>Price : {pro.price} $</h3>
                <h2>Category : {pro.category}</h2>
                <button>View</button>
            </div>
        ))}

    </div> : <div>Loading...</div>
}
    
    </div >
  ) 
}

export default Products