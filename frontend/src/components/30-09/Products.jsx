import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Products = () => {
const [products, setProducts] = useState([]);
useEffect (()=>{
// toast.success("Page rendered on browser..")
 async function getProducts(){
    try{
        const {data} = await axios.get('https://fakestoreapi.com/products');
        // console.log(data, "data here")
        setProducts(data)
    }
    catch(error){
        toast.error(error.message)
    }
    
}
getProducts()
}, [])

  return (
    <div>
        {products?.length ? 
        <div style={{display : "flex", flexWrap : "wrap", justifyContent : "space-around"}}>{products.map((pro)=>(
        <div style={{width : "23%", height : "750px ", border : "1px solid black", marginBottom: "50px"}}>
            <img style={{width : "100%", height : "500px "}} src={pro.image} />
            <h1>NAME : {pro.title}</h1>
            <h1>PRICE : {pro.price}$</h1>
            <button>Add to Cart</button>
            </div>
    ))}
    </div> : <div>Loading...</div>}</div>
  ) 
}

export default Products