import React from 'react'
import Adminbar from './Components/Adminbar'
import Sidebar from './Components/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Brands from './Pages/Brands'
import Categories from './Pages/Categories'
import Orders from './Pages/Orders'
import Products from './Pages/Products';

export default function Admin() {
  return (
    <Router>
      <Adminbar/>
      <div className="row ">
        <div className="col-md-3 bg-dark">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}