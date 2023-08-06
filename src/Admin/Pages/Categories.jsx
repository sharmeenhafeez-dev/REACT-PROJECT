import React, { useEffect, useState } from 'react'
import AddCategory from '../Components/AddCategory'
// import axios from 'axios'



export default function Categories() {

  const [Categories ,setCategories]= useState([])

// useEffect(()=>{
//   axios.get('http://localhost:1234/api/all-categories')
//   .then((json)=>console.log(json))
//   .catch((err)=>console.log(err))


//  },[])

  return (
<div  >


<div className='d-flex align-item-center justify-content-between mt-3'>
    <h2>Categories</h2>
   <AddCategory/>
</div>

<div>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Image</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>

            </tr>

        </tbody>
    </table>


</div>
</div>



  )
}
