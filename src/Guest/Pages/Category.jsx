import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCards from '../../User/Components/UserCards'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1234/api/all-categories')
            .then(json => setCategory(json.data.categories))
            .catch(err => console.log(err.message))

    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    category?.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} url={`/category/${val.CategoryName}`}/>)
                }

            </div>
        </div>
    )
}