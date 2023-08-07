import React from 'react'
import Guestbar from './Components/Guestbar'
// import Login from '../Components/Login'
// import Signup from '../Components/Signup'



export default function Guest() {

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  };

  return (
    <div className='container-flude bg-danger'>
      <Guestbar />
      <div style={formContainerStyle}>
        <div style={{ marginRight: '10px' }}>
        <h1>first signup</h1>
        </div>
        <div style={{ marginLeft: '10px' }}>
          
        <h1>then enter the world shopping</h1>
        </div>
      </div>

    </div>
  );
}
