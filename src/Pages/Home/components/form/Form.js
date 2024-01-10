import React from 'react'
import "./form.css"

function Form() {
    return (
        <div>
            <div className='form-paralax-background'>
                <div className='paralax-background-overlay'></div>
                <div className='paralax-line-top'></div>
                <div className='paralax-line-bottom'></div>
            </div>
            <div className='form-main-container'>
                <div className='form-left-side'>
                    <div>Create Custom Capture Forms And Manage Leads With The Integrated Houzez CRM</div>
                    <div>The Inquiry Form widget allows you to design unique forms to capture your leads. It connects with Houzez CRM and your email inbox to keep your work everything on track.</div>
                </div>
                <div className='form-right-side'>
                    <form>
                        <label>Inquiry Type</label>
                        <input type="select" name="" id="" />
                        <label>Your information</label>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <label>Property Details</label>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form