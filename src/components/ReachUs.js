import React from 'react'
import {
  Link
} from "react-router-dom";
import Enquiry from './Enquiry';



export default function ReachUs() {



  return (
    <div className='mt-10 mb-10'>
      <div className="container text-center">
        <h2 className='headings'>LOCATIONS</h2>
        <h5>HOW TO FIND US</h5>
        <hr className='m-2' />
      </div>

      {/* carts */}
      <div className="container text-start mb-5">
        <div className="row">
          {/* marine Dive */}
          <div className="col-xl-4 col-lg-6 col-sm-12 p-2">
            <h4 className='headings '>MARINE DRIVE</h4>
            <div className='box'>

              <p className='p-reachus fw-bold '>MUKTAA - The Wellness Clinic & Luxury Spa</p>
              <p className='p-reachus text-start mx-2'>1st Floor, N. K. M. International House,
                178 Backbay Reclamation, Babubhai Chinai Road, Marine Drive <br/> Mumbai - 400020.</p>
              <div className='text-start text-align-center '>
                <i className="fa-regular fa-envelope  fa-lg mx-2"></i>
                <Link className='email-link' to="mailto:muktaaspa@gmail.com">muktaaspa@gmail.com </Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-solid fa-phone mx-2 my-auto "></i>
                <Link className='email-link' to="tel:+912266346662">+91 22 6634 6662 |</Link>
                <Link className='email-link mx-2' to="tel:+912266346663">+91 22 6634 6663 </Link>
              </div>

              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-brands fa-whatsapp mx-2 my-auto fa-lg"></i>
                <Link className='email-link' to="tel:+91932331919">+91 9323319319</Link>
              </div>
              <div className='p-2'>
                <iframe title="Marine Drive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.030793948683!2d72.82096631538289!3d18.93003106146259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8a1371d8f%3A0x6dcee4b741a22495!2sMuktaa%20-%20The%20Luxury%20Spa!5e0!3m2!1sen!2sin!4v1578039439842!5m2!1sen!2sin" className='maps' ></iframe>
              </div>
            </div>

          </div>

          {/* GoreGaon */}
          <div className="col-xl-4 col-lg-6 col-sm-12 col-xs-12  p-2">
            <h4 className='headings '>GOREGAON WEST</h4>
            <div className='box'>

              <p className='p-reachus fw-bold'>MUKTAA - The Wellness Clinic & Luxury Spa</p>
              <p className='p-reachus text-start mx-2'>906, DLH Park, Opposite of MTNL Office,
                S.V. Road, Goregaon (West)<br/> Mumbai - 400062, India.</p>
              <div className='text-start text-align-center '>
                <i className="fa-regular fa-envelope  fa-lg mx-2"></i>
                <Link className='email-link' to="mailto:muktaagor@gmail.com">muktaagor@gmail.com </Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-solid fa-phone mx-2 my-auto "></i>
                <Link className='email-link' to="tel:+912228739739">+91 2228 739739  |</Link>
                <Link className='email-link mx-2' to="tel:+912228749749">+91 2228 749749 </Link>
              </div>

              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-brands fa-whatsapp mx-2 my-auto fa-lg"></i>
                <Link className='email-link' to="tel:+91932331919">+91 9323319319</Link>
              </div>
              <div className='p-2'>
                <iframe title="Goregaon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.474490515995!2d72.84232101490274!3d19.174467187031482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b700b7952779%3A0xdc6d75950f282276!2sMuktaa%20The%20Wellness%20Clinic%20Goregaon!5e0!3m2!1sen!2sin!4v1639829440227!5m2!1sen!2sin" className='maps'  ></iframe>
              </div>
            </div>

          </div>

          {/* Versova */}
          <div className="col-xl-4 col-lg-6 col-sm-12 col-xs-12  p-2">
            <h4 className='headings '>VERSOVA</h4>
            <div className="box">

              <p className='p-reachus fw-bold'>MUKTAA - The Wellness Clinic & Luxury Spa</p>
              <p className='p-reachus text-start mx-2'>Groud. floor, Inch by Inch Club, Next to D-mart, Off Yari Road, Versova, Andheri(West) <br/>Mumbai - 400061. India</p>
              <div className='text-start text-align-center '>
                <i className="fa-regular fa-envelope  fa-lg mx-2"></i>
                <Link className='email-link' to="mailto:muktaaspa@gmail.com">muktaaspa@gmail.com </Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-solid fa-phone mx-2 my-auto "></i>
                <Link className='email-link' to="tel:+912226319319">+91 2226 319 319 |</Link>

              </div>

              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-brands fa-whatsapp mx-2 my-auto fa-lg"></i>
                <Link className='email-link' to="tel:+91932331919">+91 9323319319</Link>
              </div>
              <div className="p-2">
                <iframe title="Versova" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.3427979113126!2d72.8080504!3d19.1364663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b733fda4a717%3A0xf761b65e4398c225!2sMUKTAA%20THE%20WELLNESS%20CLINIC%20%26%20LUXURY%20SPA%20VERSOVA!5e0!3m2!1sen!2sin!4v1662719613219!5m2!1sen!2sin" className='maps' ></iframe>
              </div>
            </div>
          </div>



          {/* THANE */}
          <div className="col-xl-4 col-lg-6 col-sm-12 col-xs-12  p-2">
            <h4 className='headings '>THANE</h4>
            <div className="box">

              <p className='p-reachus fw-bold'>MUKTAA - The Wellness Clinic & Luxury Spa</p>
              <p className='p-reachus text-start mx-2'>201, Aggarwal Arcade, Khewra Cir Marg, opposite Acme Ozone, Manpada, Thane West, Thane <br/> Mumbai - 400610</p>
              <div className='text-start text-align-center'>
                <i className="fa-regular fa-envelope  fa-lg mx-2"></i>
                <Link className='email-link' to="mailto:muktaathane@gmail.com">muktaathane@gmail.com </Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-solid fa-phone mx-2 my-auto "></i>
                <Link className='email-link' to="tel:+9122640113939">+91 2240 113 939</Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-brands fa-whatsapp mx-2 my-auto fa-lg"></i>
                <Link className='email-link' to="tel:+91932331919">+91 9323319319</Link>
              </div>
              <div className="p-2">
                <iframe title="Thane" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.559200542253!2d72.971255!3d19.2327381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbb5e6936f05%3A0xa23ad0fee283b06a!2sMUKTAA%20THE%20WELLNESS%20CLINIC%20%26%20LUXURY%20SPA%20IN%20THANE!5e0!3m2!1sen!2sin!4v1683785335275!5m2!1sen!2sin" className='maps'></iframe>
              </div>
            </div>
          </div>

          {/* COLABA */}
          <div className="col-xl-4 col-lg-6 col-sm-12 col-xs-12  p-2">
            <h4 className='headings '>COLABA</h4>
            <div className="box">

              <p className='p-reachus fw-bold'>SUKHDAA - The Wellness Clinic & Cultural Spa</p>
              <p className='p-reachus text-start mx-2'>106, Ramnimi building, Mandlik Road,
                Behind the Tajmahal palace, Opp. Colaba police station, Colaba <br/> Mumbai - 400001.</p>
              <div className='text-start text-align-center '>
                <i className="fa-regular fa-envelope fa-lg mx-2"></i>
                <Link className='email-link' to="mailto:sukhdaaspa@gmail.com">sukhdaaspa@gmail.com</Link>
              </div>
              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-solid fa-phone mx-2 my-auto "></i>
                <Link className='email-link' to="tel:+912266661401">+91 22 6666 1401  |</Link>
                <Link className='email-link mx-2' to="tel:+912266661402">+91 22 6666 1402 </Link>
              </div>

              <div className='text-start text-align-center d-flex p-auto'>
                <i className="fa-brands fa-whatsapp mx-2 my-auto fa-lg"></i>
                <Link className='email-link' to="tel:+91826819319">+91 8268319319</Link>
              </div>
              <div className="p-2">
                <iframe title="Colaba" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15096.822378430032!2d72.8319827!3d18.9222918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86019b7151cc1163!2sSukhdaa%20The%20Wellness%20Clinic%20%26%20Cultural%20Spa!5e0!3m2!1sen!2sin!4v1639828801146!5m2!1sen!2sin" className='maps'></iframe>
              </div>
            </div>
          </div>


          {/* Stay Tuned */}

          <div className="col-xl-4 col-lg-6 col-sm-12 col-xs-12  p-2">
            <h4 className='headings'>COMMING SOON!</h4>
            <div className="box p-2">
              <p className='p-reachus fw-bold'>MUKTAA - The Wellness Clinic & Luxury Spa</p>
              <h5 className='headings'>Stay Tuned</h5>
              <img className='img-fluid' src="../photos/stayTuned.jpeg" alt="" />
            </div>
          </div>

          {/* Leave Message */}
          <div className="row">
            <div className='col-lg-2 col-md-2 col-sm-0 '></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-center">
              <h3 className='headings m-4'> Leave A Message</h3>
              <Enquiry />
            </div>
            <div className='col-lg-2 col-md-2 col-sm-0 '></div>
          </div>


        </div>
      </div>



    </div>
  )
}
