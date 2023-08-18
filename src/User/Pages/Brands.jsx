import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCards from '../Components/UserCards'
import axios from 'axios'

export default function Brands() {
    const [brand, setBrands] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1234/api/all-brands')
        .then(json => setBrands(json.data.brand))
        .catch(err => console.log(err.message))
    }, [])


//loader logic
    
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => {
      clearTimeout(timeout); 
    };
  }, []); 


    return (
       
<div style={{ backgroundColor: 'peachpuff', minHeight: '100vh' }}>
{loading ? (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  ) : (
    <div>
    <div className="container ">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brand?.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} url={`/brands/${val.BrandName}`}/>)
                }

            </div>
        </div>

    </div>
  )}
</div>


    )
}