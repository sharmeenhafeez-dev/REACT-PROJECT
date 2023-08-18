import React, { useEffect, useState } from 'react'
import AddProduct from '../Components/AddProduct'
import axios from 'axios'



export default function Products() {

    const [ Product, setProduct,] = useState([])


    useEffect(()=>{
      axios.get ('http://localhost:1234/api/products')
      .then((json)=>setProduct(json.data.products))
      .catch((error)=>console.log(error))
    },[])

  return (
<div  >


<div className='d-flex align-item-center justify-content-between mt-3'>
    <h2>Products</h2>
   <AddProduct recallData = {setProduct}/>
</div>

<div>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Product</th>
                <th scope="col">Brands</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>

            </tr>
        </thead>
        <tbody>
           {/* {Product?.map((val,key)=>
            <tr key={key}>
            <th scope="row">{val._id}</th>
            <td>{val.ProductName}</td>
            <td><img src={val.ProductImage} className='img-fluid'style={{height:'15vh',objectFit: 'contain'}} alt="" srcset="" /></td>

        </tr>
        )
           } */}

        </tbody>
    </table>


</div>
</div>



  )
}
