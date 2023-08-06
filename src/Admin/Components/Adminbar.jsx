import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';

export default function Adminbar() {
  return (
    <Navbar  className='bg-dark'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Admin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-white'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile style={{ marginRight: '10px' }} />
              Admin Name
            </span>
          </Navbar.Text>
          <button className=" btn btn-light ms-4">Login</button>
          <button className=" btn btn-light ms-4">Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
