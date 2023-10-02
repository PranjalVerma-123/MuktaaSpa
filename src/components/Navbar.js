import React, { useRef } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import ExampleDoc from '../menu/Muktaa_Broucher.pdf'



export default function Navbar() {
    const ref = useRef(null);
    const onClick = () => {
        ref.current.click();
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className='container '>
                    <div className='col-sm-3 col-md-2 col-2'>
                    <Link className="navbar-brand " to="/">
                        <img className='' src="../photos/logo_1.jpg" alt="" />
                    </Link>
                    </div>
                    <div className="col-sm-9 col-md-10 col-10">
                        <div className='float-end text-end'>
                    <button ref={ref} className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon ">
                            
                        </span>     
                    </button>
                    
                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className=" headings nav-link active" aria-current="page" to="/" onClick={onClick}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" headings nav-link active" aria-current="page" to="/ayurveda" onClick={onClick}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" headings nav-link active" aria-current="page" to="/gallery" onClick={onClick}>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="headings nav-link active" aria-current="page" to="/offers" onClick={onClick}>Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" headings nav-link active" aria-current="page" to="/gift" onClick={onClick}>Gift A Spa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="headings nav-link active" aria-current="page" to="/reachUs" onClick={onClick}>Reach Us</Link>
                            </li>
                            <button className="download ">
                                <Link className="download" to={ExampleDoc} download="Muktaa_Brochure" target="_blank" onClick={onClick}>Download Brochure</Link>
                            </button>
                        </ul>

                    </div>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
 