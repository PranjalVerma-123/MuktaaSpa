import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Enquiry() {
    const form = useRef();
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState({ Name: "", Mobile: "", Subject: "", Message: "", Branch: "Marine Drive", Email: "" });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0p1ti0g', 'template_zlc1a58', form.current,
            'LXU-_-twL7hAD8B3o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setMessage({ Name: "", Mobile: "", Subject: "", Message: "", Branch: "Marine Drive", Email: "" });
        setCount(count + 1);
    };
    const onChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    return (
        <div className='container'>
            <div className="row">
                <form ref={form} className='row' onSubmit={sendEmail}>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <input type="text" className="form-control box text-start" placeholder="Your Name" id="text" name="Name" value={message.Name} onChange={onChange} required />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <input type="email" className="form-control box text-start" placeholder="Your Email" id="email" aria-describedby="emailHelp" name="Email" value={message.Email} onChange={onChange} required />
                    </div>
                    <div className=" col-lg-6 col-md-12 mb-3">
                        <input type="phone" className="form-control box text-start" placeholder="Your Mobile" id="phone" name="Mobile" minLength={10} maxLength={10} value={message.Mobile} onChange={onChange} required />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <input type="text" className="form-control box text-start" placeholder="Your Subject" name="Subject" value={message.Subject} onChange={onChange} required />
                    </div>
                    <div className=" col-md-12 mb-3">
                        <select className="form-select form-control box text-start" name="Branch" aria-label="Default select example" value={message.Branch} onChange={onChange}>
                            <option value="Marine Drive">Marine Drive</option>
                            <option value="Goregaon (W)">Goregaon (W)</option>
                            <option value="Versova">Versova</option>
                            <option value="Thane">Thane</option>
                            <option value="Colaba">Colaba</option>
                        </select>
                    </div>
                    <div className=" col-md-12 mb-3 ">
                        <input type="text" className="form-control box mh-10 text-start" placeholder="Message" id="message" name="Message" value={message.Message} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn footer box headings-white ">Send Message</button>

                </form>
            </div>
        </div>
    )
}
