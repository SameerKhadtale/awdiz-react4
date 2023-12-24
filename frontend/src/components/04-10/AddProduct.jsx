import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddProduct = () => {
    const[productData, setProductData] = useState({name : "", price : "", image : ""});
  const handleChange = (event) => {
// console.log(event.target.value)
setProductData({...productData, [event.target.name] : event.target.value})
// console.log(productData, "productData")
  }
const handleSubmit = (event)=> {
event.preventDefault();
if(productData.name && productData.price && productData.image && productData.price > 0){

}else{
    toast.error("All fields are mandatory")
}


}
  
    return (
    <div>
        <h1>AddProduct</h1>
        <form onSubmit={handleSubmit}>
            <label>Product Name</label><br/>
            <input type='text' name="name" onChange={handleChange}/><br/>
            <label>Product Price</label><br/>
            <input type='number' name="price" onChange={handleChange}/><br/>
            <label>Product Image</label><br/>
            <input type='url' name="image" onChange={handleChange}/><br/>
            <input type='submit'/><br/>
        </form>
    </div>
  )
}

export default AddProduct