import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { storage } from '../utils/FirebaseConfige';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';

function AddProducts({ recallData }) {

    //all states

    const [show, setShow] = useState(false);
    const [brand, setbrand,] = useState("")
    const [category, setcategory,] = useState("")
    const [productname, setproductname] = useState("")
    const [price, setprice] = useState(0)
    const [productthumnail, setProductthumnail,] = useState(null)
    const [description, setdescription] = useState("")
    const [images, setimages] = useState([])




    const [categories, setcategories,] = useState([])
    const [ProductName, setProductName] = useState([])


    const [brandVal, setbrandVal] = useState([])
    const [categoriesVal, setcategoriesVal] = useState([])




    const handleClose = () => setShow(false);
    const handleShow = () => {
        axios.get('http://localhost:1234/api/all-brands').then((json) => {
            setbrandVal(json.data.brand)
            console.log((json.data.brand))
            axios.get('http://localhost:1234/api/all-categories').then((json) => {
                setcategoriesVal(json.data.categories)
                console.log((json.data.categories))
                setShow(true)
            })

        }).catch(err => (err))

    };



    const SubmitProduct = (e) => {
        e.preventDefault();
        const payload = {
            productname,
            brand,
            category,
            price,
            productthumnail,
            images,
            description

        }

        console.log(payload)



        // const ImageRef = ref(storage, `images/Product/${ProductImage.name}`)

        // uploadBytes(ImageRef, ProductImage).then((snapshot) => {

        //     getDownloadURL(snapshot.ref)
        //         .then((url) => {
        //             console.log(url)
        //             const payload = { ProductName, ProductImage: url }

        //             axios.post('http://localhost:1234/api/add-Product', payload)
        //                 .then((json) => {
        //                     setShow(false);
        //                     recallData(json.data.categorise);

        //                     console.log(json.data)
        //                 })
        //                 .catch((error) => alert(error.message))
        //             console.log("READY TO UPLOAD", payload)
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         });

        // });

    }
    return (
        <>

            <Button className='mx-2 bg-dark' onClick={handleShow}   >
                Add Product
            </Button>


            <Modal show={show} onHide={handleClose} centered backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={SubmitProduct}>
                        <div className='row'>
                            <div className="col">
                                <label htmlFor="Product Name" className="form-label">
                                    Product Name
                                </label>
                                <input
                                    type="text " value={productname} onChange={(e) => setproductname(e.target.value)}
                                    className="form-control"
                                    id=" Product Name"
                                    aria-describedby="Product NameHelp"
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="Product Name" className="form-label">
                                    Product Price
                                </label>
                                <input
                                    type="text " value={price} onChange={(e) => setprice(e.target.value)}
                                    className="form-control"
                                    id=" Product Name"
                                    aria-describedby="Product NameHelp"
                                />

                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Product Image
                            </label>
                            <input onChange={(e) => setProductthumnail(e.target.files[0])} className="form-control" type="file" id="productImage" />
                        </div>

                        <div className="mb-3">
                            <p className='mb-0 fw-semibold'>Choose Images</p>
                            <small className="text-secondary">Double Click to Delete Images</small>

                            <div className='mt-2 d-flex gap-2 align-items-center'>
                                {
                                    images.map((val, key) =>
                                        <div key={key} onDoubleClick={() => setimages(images.filter((img) => img != val))}>
                                            <img style={{ height: '10vh', cursor: 'pointer', objectFit: 'contain' }}
                                                className='img-fluid' src={URL.createObjectURL(val)} alt="" />
                                        </div>)
                                }
                                <label htmlFor="formFile" className="form-label col-md-2 d-flex border border-dark border-2 justify-content-center align-items-center " style={{ height: '10vh', cursor: 'pointer', fontWeight: 'bold' }}>
                                    +
                                </label>
                            </div>

                            <input className="form-control d-none" onChange={(e) => setimages([...images, e.target.files[0]])} type="file" id="formFile" />
                        </div>


                        <div className='row'>
                            <div className="col">
                                <Form.Select aria-label="Please select a Brand" onChange={(e) => setbrand(e.target.value)}>
                                    <option >Please select a Brand</option>

                                    {brandVal.map((val, key) =>
                                        <option key={key} value={val.BrandName}>{val.BrandName}</option>)}

                                </Form.Select></div>
                            <div className="col">
                                <Form.Select aria-label="Please select a Category" onChange={(e) => setcategory(e.target.value)}>
                                    <option >Please select a Category</option>

                                    {categoriesVal.map((val, key) =>
                                        <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)}

                                </Form.Select></div>
                        </div>

                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                             value={description}
                             onChange={(e) => setdescription(e.target.value)}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form></Modal.Body>

            </Modal>
        </>
    );
}

export default AddProducts;