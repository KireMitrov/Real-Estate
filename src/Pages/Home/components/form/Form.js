import React from 'react'
import "./form.css"
import { Fade } from "react-awesome-reveal"

function Form() {
    return (
        <div className='form-main-container'>
            <div className='form-paralax-background'>
                <div className='paralax-background-overlay'></div>
                <div className='paralax-line-top'></div>
                <div className='paralax-line-bottom'></div>
            </div>
            <div className='form-wrapper'>
                <Fade duration={2000} >
                    <div className='form-left-side'>
                        <div className='form-left-title'>Create Custom Capture <br />Forms And Manage Leads <br /> With The Integrated <br />Houzez CRM</div>
                        <div className='form-left-subtitle'>The Inquiry Form widget allows you to design unique forms to capture your leads. It connects with Houzez CRM and your email inbox to keep your work everything on track.</div>
                    </div>
                </Fade>
                <div className='form-right-side'>
                    <form>
                        <fieldset>Inquiry Type
                            <select name="select-inquiry" id="select-inquiry">
                                <option value="purchase">Select</option>
                                <option value="purchase">Purchase</option>
                                <option value="purchase">Rent</option>
                                <option value="purchase">Sell</option>
                                <option value="purchase">Evaluation</option>
                                <option value="purchase">Mortgage</option>
                            </select>
                        </fieldset>
                        <fieldset>Your information
                            <select name="select-info" id="select-info">
                                <option value="purchase">I`m a</option>
                                <option value="purchase">I`m a real estate agent</option>
                                <option value="purchase">I`m a property owner</option>
                            </select>
                            <div className='inline-inputs'>
                                <input type="text" name="firstName" id="firsName" placeholder='First Name' />
                                <input type="text" name="lastName" id="lastName" placeholder='Last Name' />
                            </div>
                            <input type="email" name="email" id="email" placeholder='Email Address' />
                        </fieldset>
                        <fieldset>Property Details
                            <select name="select-property" id="select-property">
                                <option value="purchase">Select type</option>
                                <option value="purchase">Apartment</option>
                                <option value="purchase">Condo</option>
                                <option value="purchase">Lot</option>
                                <option value="purchase">Office</option>
                                <option value="purchase">Shop</option>
                                <option value="purchase">Studio</option>
                                <option value="purchase">Villa</option>
                            </select>
                            <div className="inline-inputs">
                                <input type="number" name="maxPrice" id="maxPrice" placeholder='Max price' />
                                <input type="number" name="minimumSize" id="minimumSize" placeholder='Minimum size (Sq Ft)' />
                            </div>
                            <div className='inline-inputs'>
                                <input type="number" name="beds" id="beds" placeholder='Number of beds' />
                                <input type="number" name="baths" id="baths" placeholder='Number of baths' />
                            </div>
                        </fieldset>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form