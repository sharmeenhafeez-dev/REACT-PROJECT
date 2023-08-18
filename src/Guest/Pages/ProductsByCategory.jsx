import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserCards from '../../User/Components/UserCards'
import Brands from './Brands'

export default function ProductsByBrand() {
    const { CategoryName } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:1234/api/get-products-category/${CategoryName}`)
            .then(json => setProduct(json.data.product))
            .catch(err => console.log(err.message))

    }, [CategoryName])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products By Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
            <h2>{CategoryName }</h2>
                {/* {
                    product.map((val, key) => <UserCards key={key} brand={val.CategoryName } name={val.CategoryName}  />)
                    
                } */}

            </div>
        </div>
    )
}