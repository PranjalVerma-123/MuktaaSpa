import React , {useRef,useState} from 'react'
import { Link } from 'react-router-dom'

import Carousel from './Carousel'
import Enquiry from './Enquiry'
import emailjs from '@emailjs/browser';


export default function AboutUs() {
  const form = useRef();
  // eslint-disable-next-line
  const [message, setMessage] = useState({Email:""});
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0p1ti0g', 'template_p9u2vfa', form.current,
        'LXU-_-twL7hAD8B3o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    setMessage({  Email: "" });
    
};
  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
}
  
  return (
    <>
      <div className='mt-10 mb-10'>
        <Carousel />
        {/* Thubnails */}
        <div className="container mt-5 mb-5">
          <div className="row text-center ">
            <div className="col-md-6 col-sm-6 col-xs-12" >
              <div className="thumbnail">
                <h1 className="headings"> Affordability </h1>
                <span className="line"> </span>
                <p className="p-reachus"> Luxury should not always be unattainably priced... We aim to bring the balance to our cost ratio, making it affordable for all, without compromising into quality. </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12" >
              <div className="thumbnail">
                <h1 className="headings"> Variety </h1>
                <span className="line"> </span>
                <p className="p-reachus"> Our spa features the most invented &amp; customized list of therapy type, from transforming Sfurti, Nirjala Paddhati all the way to Agni Nivaaran to Dev Shahi Nidra which makes us unique and better then all.  </p>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12" >
              <div className="thumbnail-red">
                <h1 className='headings-white'> Flexibility </h1>
                <span className="line-white"> </span>
                <p> We understand that you rarely get time to relax during your busy week, so only for you we are working early mornings to late nights as per your comfort level / as to your preference. </p>
              </div>
            </div>
            {/* Certificates */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-1" >
              <img src="../photos/certificates/2018.jpeg" alt="Mukta Best Spa 50 Certificate" className="img-responsive img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-1" >
              <img src="../photos/certificates/2019.jpeg" alt="Mukta Best Spa 50 Certificate" className="img-responsive img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-1" >
              <img src="../photos/certificates/2018-1.jpeg" alt="Mukta Best Spa 50 Certificate" className="img-responsive img-fluid" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 my-1" >
              <img src="../photos/certificates/2019-1.jpeg" alt="Mukta Best Spa 50 Certificate" className="img-responsive img-fluid" />
            </div>

            {/* About Us */}
            <div className="col-md-12 text-start">
              <br />
              <h2 className='headings'> About Us </h2>
              <h5> See Our Best </h5>
              <p className="p-reachus"> The name Muktaa comes from the Indian origin, In Sanskrit the meaning of the name Mukt <span className="hindi">(मुक्त)</span> is Freedom / Release. </p>
              <p className="p-reachus"> Let us release you from all stress, pain &amp; feels you rejuvenate refresh &amp; recharge time to time. </p>
              <p className="p-reachus"> A luxurious spa based in South Mumbai offering a wide variety of complete body treatments, with quality of products in highly hygienic environment. </p>
              <p className="p-reachus"> We are coming up with a luxurious high end salon in sobo shortly &amp; 100 branches in pan india within span </p>
              <h5> Why are we different? </h5>
              <p className="p-reachus"> Our all therapies/treatments techniques are totally customised according to urban/ semi urban lifestyle with large variety of services as per your requirements. </p>
              <p className="p-reachus"> We always try to maintain best level of quality assurance, to feel you luxurious &amp; relaxed anytime. </p>

              {/* Google */}
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-6">
                  <div className="thumbnail">
                    <h4 className='mb-2 text-center'>Google</h4>
                    <Link to="https://goo.gl/WuPwt6" target="_blank"> <img src="../photos/certificates/google3.png" className=" img-fluid border" alt="Google Review" /> </Link>
                  </div>
                </div>

                {/* Tripadvisor */}
                <div className="col-lg-3 col-sm-6 col-6">
                  <div className="thumbnail" >
                    <Link target="_blank" to="https://www.tripadvisor.in/Attraction_Review-g304554-d13174371-Reviews-Muktaa_The_Wellness_Clinic_Luxury_Spa_Marine_Drive-Mumbai_Maharashtra.html" >
                      <img className='img-fluid' src="../photos/certificates/mukta_tripadvisor.jpg" alt="TripAdvisor" />
                    </Link>
                  </div>
                </div>
                {/* JustDail */}
                <div className="col-lg-6 col-md-12" >
                  <div className="thumbnail position-relative">
                    <Link to="https://www.justdial.com/mumbai/Muktaa-The-Wellness-Clinic-&-Luxury-Spaas-Marine-Drive/022PXX22-XX22-170503191531-K7L3_BZDET?utm=JDBadge" target="_blank"  >
                      <img src="../photos/certificates/JustDail.jpeg" alt="Mukta Tripadvisor" className="img2 center-block" />
                    </Link>
                    <div className="position-absolute hoverDiv top-0 start-0 w-44 d-flex" >
                      <h4 className='text-secondary'> Listed On </h4><h4 className='text-primary'>Just</h4> <h4 className='orange'>Dail</h4>
                    </div>
                    <div className="position-absolute hoverDiv2 ">
                      <img src="../photos/certificates/justDail-bottom.png" alt="Mukta Tripadvisor" className=" img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row my-5'>
                <div className="col-md-4 col-4">
                  <div className='thumbnail'>
                    <img src="../photos/certificates/mukta_who_certificate.jpg" alt="Mukta Tripadvisor" className=" img-fluid" />
                  </div>
                </div>
                <div className="col-md-4 col-4">
                  <div className='thumbnail'>
                    <img src="../photos/certificates/mukta_naturopathy_certificate.jpg" alt="Mukta Tripadvisor" className=" img-fluid" />
                  </div>
                </div>
                <div  className="col-md-4 col-4">
                  <div className='thumbnail'>
                    <img src="../photos/certificates/mukta_who_certificate.jpg" alt="Mukta Tripadvisor" className=" img-fluid" />
                  </div>
                </div>
              </div>
              {/* Youtube Video */}

              <div className="embed-responsive embed-responsive-16by9">
                <iframe className='embed-responsive-item yt-video' src="https://www.youtube-nocookie.com/embed/WLCZKXlcPHU?si=uqXXPK_u-G8rkKvS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

            </div>
            <div className="row mt-5">
              <div className="col-md-4  box2">
                <h4 className='headings text-start box3'>NewsLetter SignUp</h4>
                <div className="container text-center row">
                <form ref={form} className='row mx-1' autoComplete="off" onSubmit={sendEmail}>          
                        <input type="email" className="form-control box text-start" placeholder="Your Email" id="email" aria-describedby="emailHelp" name="Email" value={message.Email} onChange={onChange} required />
                        
                        <button type="submit" className="btn footer box headings-white my-1 mx-auto ">Send</button>
                        
                </form>
                </div>
                <h4 className="headings text-start">Enquiry Form</h4>
                <div className="box3"></div>
                <div >< Enquiry  /></div>
                <div className='mb-3'>Visitor Count : 20k+</div>
                
                
              </div>
              <div className="col-md-8 mb-5">
                <div className="row">
                  <h4 className='headings text-start box3'> Our Address</h4>
                  {/* Marine Drive */}
                  <div className="col-md-4 text-start my-2">
                    <h5 className="headings">Marine Drive</h5>
                    <p className="p-small"> <strong> MUKTAA - The Wellness Clinic &amp; Luxury Spa </strong> <br />
                      1st Floor, N. K. M. International House, <br />
                      178 Backbay Reclamation, Babubhai Chinai Road, Marine Drive, Mumbai - 400 020
                    </p>
                    <Link to="/reachus" className="btn footer headings-white mx-auto">Load More...</Link>

                  </div>
                  <div className="col-md-4 text-start my-2">
                  <h5 className="headings">Colaba</h5>
                  <p className="p-small"> <strong> SUKHDAA - The Wellness Clinic &amp; Cultural Spa </strong> <br />
                      106, Ramnimi building, Above sbi bank,  Mandlik Road, Behind the Tajmahal palace, Opp. Colaba police station, Colaba, Mumbai - 400 001. 
                    </p>
                    <Link to="/reachus"  className="btn footer headings-white mx-auto">Load More...</Link>
                  </div>
                  
                  {/* Versova */}
                  <div className="col-md-4 text-start my-2">
                  <h5 className="headings">Versova</h5>
                    <p className="p-small"> <strong> MUKTAA - The Wellness Clinic &amp; Luxury Spa </strong> <br />
                      Groud. floor, Inch by Inch Club, Next to D-mart, Off Yari Road, Versova, Andheri(West)<br/> Mumbai - 40061.
                    </p>
                    <Link to="/reachus"  className="btn footer headings-white mx-auto">Load More...</Link>

                  </div>
                  {/* Thane */}
                  <div className="col-md-4  text-start my-2">
                  <h5 className="headings">Thane</h5>
                    <p className="p-small"> <strong> MUKTAA - The Wellness Clinic &amp; Luxury Spa </strong> <br />
                      201, Aggarwal Arcade, Khewra Cir Marg, opposite Acme Ozone, Manpada, Thane West, Thane, Mumbai - 400610 
                    </p>
                    <Link to="/reachus"  className="btn footer headings-white mx-auto">Load More...</Link>

                  </div>
                  {/* Goregaon */}
                  <div className="col-md-4  text-start my-2">
                    <h5 className="headings">Goregaon</h5>
                    <p className="p-small "> <strong> MUKTAA - The Wellness Clinic &amp; Luxury Spa </strong> <br />
                      906, DLH park, Opp. Mtnl Office, S.V. Road, Goregaon (west) <br/> Mumbai- 400062
                    </p>
                    <Link to="/reachus"  className="btn footer headings-white mx-auto">Load More...</Link>

                  </div>
                  {/* Colaba */}
                  
                </div>



              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
