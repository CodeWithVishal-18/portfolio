import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Stars from './components/stars/Stars';

export default function App() {
    return (
        <div className="bg-dark text-light min-vh-100 d-flex flex-column container-fluid">
            <Stars/>
            <Navbar />
            <div className="container flex-grow-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
