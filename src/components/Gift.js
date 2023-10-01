import React from 'react'

export default function Gift() {
  return (
    <>
      <div className='container mt-10 '>
        <div className="row">
          <div className="col-md-3 col-xs-12 text-justify">
            <h1 className='headings'>GIFT A SPA</h1>
            <br />
            <p className='p-gift-font'>Treat someone to an unparalleled experience of true wellness & relaxation at Muktaa- The Luxury Spa.</p>
            <p className='p-gift-font'>Choose from an instant printable 'Gift a Spa' or a 'Gift a Spa' to be delivered to your doorstep.</p>
            <p className='p-gift-font'>Need help with your decision? Let us help you choose the right service!</p>
            <br />
            <h4 className='headings'>CALL US AT</h4>
            <p className='box font-Georgia'>022 66346662 / 022 66346663</p>
            <p className='p-gift-font'>A SERVICE REPRESENTATIVE WILL ASSIST YOU.</p>
          </div>
          <div className="col-md-9 col-xs-12">
            <h1 className='overlay_box font-Georgia'>MASSAGE THERAPY FOR REST & RELAXATION</h1>
            <img src="../photos/gift_spa.jpg" alt="" className="img-fluid " />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr className='mt-5'/>
        <h1 className="headings m-5">GIFT VOUCHER</h1>
        <div >

          <img src="../photos/gift_voucher_front.jpg" alt="" className="img-fluid " />
          <hr />

          <img src="../photos/gift_voucher_back.jpg" alt="" className="img-fluid " />
        </div>
      </div>

      <div className=" container text-center mt-10 p">
        <p className='p-big'>Do you feel, like your work/family life balance hangs in the air and you <br />
          just don't feel energized enough to carry on?
          <br />
        Don't hesitate and give us a call to get one of our uber-relaxing therapy sessions!</p>
      </div>

      

    </>

  )
}
