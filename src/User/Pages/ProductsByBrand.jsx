import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserCards from '../Components/UserCards'
import Brands from './Brands'

export default function ProductsByBrand(brand,title) {
    const { BrandName } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:1234/api/get-products-brand/${BrandName}`)
            .then(json => setProduct(json.data.product))
            .catch(err => console.log(err.message))

    }, [BrandName])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products By Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
            <h2>{BrandName }</h2>
            {/* <Card className=" text-black">
      <Card.Img src={product.brand} alt="" />
      <Card.ImgOverlay>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> */}
{/* <div className="row my-5">
                {
                    product?.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.title} url={`/products/${val._id}`} />)
                }

            </div> */}


            </div>
        </div>
    )
}