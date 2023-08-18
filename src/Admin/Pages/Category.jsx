import React, { useEffect, useState } from 'react'
import AddCategory from '../Components/AddCategory'
import { BsFillPencilFill } from 'react-icons/bs'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import axios from 'axios'



export default function Category() {

  const [Category, setCategory,] = useState([])


  useEffect(() => {
    axios.get('http://localhost:1234/api/all-categories')
      .then((json) => setCategory(json.data.categories))
      .catch((error) => console.log(error))
  }, [])


  const deleteProduct =(CategoryName)=>{
    console.log(CategoryName)
const payload ={CategoryName:CategoryName}

const config = {
  method: "delete",
  url:'http://localhost:1234/api/delete-category',
  data : payload
};
   
axios(config)
.then((json) => setCategory(json.data.categories))
.catch((err)=>console.log(err.message))

  }
  return (
    <div  >


      <div className='d-flex align-item-center justify-content-between mt-3'>
        <h2>Categories</h2>
        <AddCategory recallData={setCategory} />
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>


            </tr>
          </thead>
          <tbody>
            {Category?.map((val, key) =>
              <tr key={key}>
                <th scope="row">{val._id}</th>
                <td>{val.CategoryName}</td>
                <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '15vh', objectFit: 'contain' }} alt="" srcset="" /></td>
                <td><button className='btn btn-dark'><BsFillPencilFill/></button></td>
                <td><button className='btn btn-dark' onClick={()=>deleteProduct(val._id)}><RiDeleteBin5Fill/></button></td>
              </tr>)
            }

          </tbody>
        </table>


      </div>
    </div>



  )
}
