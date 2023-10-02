import React from 'react'
import {
  Link,
} from "react-router-dom";



export default function Services() {
  return (
    <>
    <div className='container mt-10'>
      <div className="container p-3">
        <div className="row text-center">
          <div className='col-lg-2 col-md-3 col-4 icon-link'>

            <Link className='icon-box-link' to="/ayurveda">
              <img className='icon' src="../photos/icon/aryuvedha.png" alt="" />
              Ayurveda Chikitsa
            </Link>
          </div>

          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/naturopathy">
              <img className='icon' src="../photos/icon/naturopathy.png" alt="" />
              naturopathy
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/dry-therapy">
              <img className='icon' src="../photos/icon/beauty.png" alt="" />
              dry therapy
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/dhara">
              <img className='icon' src="../photos/icon/dhara.png" alt="" />
              Shirodhara
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/acupuncture">
              <img className='icon' src="../photos/icon/acupuncture.png" alt="" />
              acupuncture treatment
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/dhoomra">
              <img className='icon' src="../photos/icon/dhoomra.png" alt="" />
              dhoomra therapy
            </Link>
          </div>

          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/podikizhi">
              <img className='icon' src="../photos/icon/potli.png" alt="" />
              podikizhi (potli)
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/lepam">
              <img className='icon' src="../photos/icon/face.png" alt="" />
              lepam
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/vilepam">
              <img className='icon' src="../photos/icon/face.png" alt="" />
              vilepam
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/aavaran">
              <img className='icon' src="../photos/icon/aavaran.png" alt="" />
              aavaran
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/nivaaran">
              <img className='icon' src="../photos/icon/nivaaran.png" alt="" />
              nivaaran
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-4 icon-link'>
            <Link className='icon-box-link'to="/royal">
              <img className='icon' src="../photos/icon/royal.png" alt="" /> 
              royal treatment
            </Link>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
