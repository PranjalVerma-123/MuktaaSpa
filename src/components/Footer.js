import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function Footer() {
    return (
        <footer className='footer fixed-bottom '>
        <div className="container ">
            <div className="row">
                <div className="col-md-4 col-sm-12 text-center">
                <Link className='link-light footer-link' to="/privacy_policy">PRIVACY POLICY TERMS & CONDITIONS</Link>
                </div>
                <div className='col-md-4 col-sm-12 text-center'>
                     <Link className="fa-brands fa-instagram mx-2 footer-icon " style={{"color" : "#ffffff", }} to="https://www.instagram.com/muktaawellness" target="_blank"></Link>
                     <Link className="fa-brands fa-facebook mx-2 footer-icon" style={{"color" : "#ffffff"}} to="https://www.facebook.com/MuktaaWellness/" target="_blank"></Link>
                     <Link className="fa-brands fa-twitter mx-2 footer-icon" style={{"color" : "#ffffff"}} to="https://twitter.com/i/flow/login?redirect_after_login=%2FMuktaaWellness" target="_blank"></Link>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                <Link className='link-light footer-link' to="/">© MUKTAA SPA 2023 | DESIGNED BY PRANJAL VERMA</Link>
                </div>
            </div>
        </div>
        </footer>

        // <div>
        //     <nav className="navbar navbar-expand-lg  navbar-dark navbar-custom">
        //         <div className='container '>
        //             <div className='col-md-4 col-sm-6 col-xs-12 '>
        //                 <Link className='link-light footer-link' to="/privacy_policy">PRIVACY POLICY TERMS & CONDITIONS</Link>
        //             </div >
        //             <div className='col-md-4 col-sm-6 col-xs-12'>
        //             <Link className="fa-brands fa-instagram mx-2 footer-icon " style={{"color" : "#ffffff", }} to="https://www.instagram.com/muktaawellness" target="_blank"></Link>
        //             <Link className="fa-brands fa-facebook mx-2 footer-icon" style={{"color" : "#ffffff"}} to="https://www.facebook.com/MuktaaWellness/" target="_blank"></Link>
        //             <Link className="fa-brands fa-twitter mx-2 footer-icon" style={{"color" : "#ffffff"}} to="https://twitter.com/i/flow/login?redirect_after_login=%2FMuktaaWellness" target="_blank"></Link>

        //             </div>
        //             <div className='col-md-4 col-sm-6 col-xs-12'>
        //                 <Link className='link-light footer-link' to="/">© MUKTAA SPA 2023 | DESIGNED BY PRANJAL VERMA</Link>
        //             </div>

        //         </div>
        //     </nav>
        // </div>
    )
}
