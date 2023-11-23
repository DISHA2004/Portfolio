import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../contact/Contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9levku9', 
    'template_q3aqs04', form.current, 
    'u6kVm1-Kpqr9xMlFi')
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact ME</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me </h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">
                        Email
                        </h3>
                        <span className="contact__card-data">
                        dishagupta40093@gmail.com
                        </span>

                        <a href="mailto:dishagupta40093@gmail.com.com" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon">

                        </i> </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">
                        Whatsapp
                        </h3>
                        <span className="contact__card-data">
                        +91 7820046192
                        </span>

                        <a href="https://api.whatsapp.com/send?phone=7820046192&text=Hey, there" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                            
                        </i> </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>
                        <h3 className="contact__card-title">
                        Instagram
                        </h3>
                        <span className="contact__card-data">
                        _dishagp_
                        </span>

                        <a href="https://msng.link/o?_dishagp_=ig" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                            
                        </i> </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write your Project</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div ">
                        <label className="contact__form-tag">Email</label>
                        <input type='email' name='email' 
                        className='contact__form-input'
                            placeholder='Insert mail address'
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type='name' name='name' 
                        className='contact__form-input'
                            placeholder='Insert your name here'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" 
                         cols="30" rows="10" className='contact__form-input'
                            placeholder='write your project'></textarea>
                    </div>
                    <button className="button button--flex">
                        Send your message! <i class="uil uil-message"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact