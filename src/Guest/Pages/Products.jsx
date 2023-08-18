import React, { useEffect, useState } from 'react'
import UserCards from '../../User/Components/UserCards'
import axios from 'axios'

export default function Products() {
    const [product, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1234/api/products')
            .then(json => setProducts(json.data.product))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    product?.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.title} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
    )
}