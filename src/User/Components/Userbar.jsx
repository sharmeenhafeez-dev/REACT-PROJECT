import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import Login from '../../Components/Login';
import Logout from '../../Components/Logout';

export default function Userbar() {
  return (
    <Navbar  className='bg-dark'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>User</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-white'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile style={{ marginRight: '10px' }} />
              User Name
            </span>
          </Navbar.Text>
          <button className=" btn btn-light ms-4"><Login/></button>
          <button className=" btn btn-light ms-4"><Logout/></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
