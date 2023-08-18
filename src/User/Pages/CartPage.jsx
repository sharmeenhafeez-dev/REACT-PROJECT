import React, { useContext, useEffect } from 'react';
import {CartContext} from '../Cart_context/context'
import {GlobalContext} from '../../Admin/Context/context'
import {decodeToken} from 'react-jwt'

export default function CartPage() {

    const { state, dispatch } = useContext(GlobalContext)
    const {cart_state,cart_dispatch}= useContext(CartContext)
// console.log(state)

    const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
    const user = decodeToken(state.token)
    // console.log(user)
    const checkout = () => {
        const payload = {
            items: cart_state.cart,
            totalBill: total,
            customerAddress: user.address || '',
            customerContact: user.contact||'',
            customerName: user.username,
            customerEmail: user.email
        }

        console.log(payload)
    }
    console.log(cart_state)
  return (
    <div className="container">
    <div className="text-center my-5">
        <h2>Cart</h2>
        <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.</small>
    </div>

    <div className="p-5 rounded bg-dark">
        {
            cart_state.cart.map((val, key) => <div className="card mb-3 w-100" key={key}>
                <div className="row g-0">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <img src={val.thumbnail} style={{ height: '10vh', objectFit: 'contain' }} className="img-fluid rounded-start" alt={val.productName} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{val.productName} - {val.price} {val.priceUnit}</h5>
                            <p className="card-text">{val.description}
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Quantity : {val.quantity}</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="card-title text-center pt-5">{val.quantity * val.price}</h5>
                    </div>
                </div>
            </div>)
        }


        <div className="border border-primary border-3 bg-light px-5 py-3 rounded d-flex justify-content-around align-items-center">
            <h6>Total</h6>
            <div>{total}</div>
        </div>

        <div className="container mt-3">
            <button className="d-block w-100 btn btn-light" onClick={checkout}>CheckOut</button>
        </div>


    </div>
</div >
)
}
  
// import React, { useContext,useState, useEffect } from 'react';
// import {CartContext} from '../Cart_context/context'
// import {GlobalContext} from '../../Admin/Context/context'
// import {decodeToken} from 'react-jwt'

// export default function CartPage() {

//     const { state, dispatch } = useContext(GlobalContext)
//     const {cart_state,cart_dispatch}= useContext(CartContext)
//     const [customerInfo, setCustomerInfo] = useState({
//         name: '',
//         email: '',
//         address: '',
//         contact: ''
//       });
// // console.log(state)

//     const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
//     // const user = decodeToken(state.token)
//     useEffect(() => {
//         const user = decodeToken(state.token);
//         setCustomerInfo({
//           name: user.username,
//           email: user.email
//         });
//       }, [state.token]);

//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setCustomerInfo((prevInfo) => ({
//           ...prevInfo,
//           [name]: value
//         }));
//       };

//     // console.log(user)
//     const checkout = () => {
//         const payload = {
//           items: cart_state.cart,
//           totalBill: total,
//           customerAddress: customerInfo.address,
//           customerContact: customerInfo.contact,
//           customerName: customerInfo.name,
//           customerEmail: customerInfo.email
//         };
      
//         console.log(payload);
//         // You can perform further actions like sending the payload to the server for processing
//       };
      
//     console.log(cart_state)
//   return (
//     <div className="container">
//     <div className="text-center my-5">
//         <h2>Cart</h2>
//         <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius totam nostrum voluptatibus culpa accusamus.</small>
//     </div>
 
//  <div className='row my-3 gape-5'> 
//      <div className="col-md-6  p-5 rounded bg-dark">
//         {
//             cart_state.cart.map((val, key) => <div className="card mb-3 w-100" key={key}>
//                 <div className="row g-0">
//                     <div className="col-md-2 d-flex justify-content-center align-items-center">
//                         <img src={val.thumbnail} style={{ height: '10vh', objectFit: 'contain' }} className="img-fluid rounded-start" alt={val.productName} />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">{val.productName} - {val.price} {val.priceUnit}</h5>
//                             <p className="card-text">{val.description}
//                             </p>
//                             <p className="card-text">
//                                 <small className="text-body-secondary">Quantity : {val.quantity}</small>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-md-2">
//                         <h5 className="card-title text-center pt-5">{val.quantity * val.price}</h5>
//                     </div>
//                 </div>
//             </div>)
//         }


//         <div className="border border-primary border-3 bg-light px-5 py-3 rounded d-flex justify-content-around align-items-center">
//             <h6>Total</h6>
//             <div>{total}</div>
//         </div>

//         <div className="container mt-3">
//             <button className="d-block w-100 btn btn-light" onClick={checkout}>CheckOut</button>
//         </div>


//     </div>

//     <div className="col-md-6 p-5 rounded bg-light">
//           <h2>Customer Details</h2>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={customerInfo.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={customerInfo.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="address" className="form-label">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 value={customerInfo.address}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contact" className="form-label">
//                 Contact
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="contact"
//                 name="contact"
//                 value={customerInfo.contact}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <button type="button" className="btn btn-primary" onClick={checkout}>
//               CheckOut
//             </button>
//           </form>
//         </div>
//         </div>
  
// </div >
// )
// }
  


