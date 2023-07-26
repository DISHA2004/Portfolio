import React from 'react'

const Contact = () => {
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

                        <a href="" className="contact__button">Write me 
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

                        <a href="" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon">
                            
                        </i> </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write your Project</h3>
                <form className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type='email' name='mail' 
                        className='contact__form-input'
                            placeholder='Insert mail address'
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type='text' name='name' 
                        className='contact__form-input'
                            placeholder='Insert name'
                        />
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact