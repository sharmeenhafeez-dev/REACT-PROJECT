import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';

export default function Userbar() {
  return (
    <Navbar  className='bg-dark'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Guest</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-white'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CgProfile style={{ marginRight: '10px' }} />
              Guest Name
            </span>
          </Navbar.Text>
          <button className=" btn btn-light ms-4"><Login/></button>
          <button className=" btn btn-light ms-4"><Signup/></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
