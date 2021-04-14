import React from 'react'
import ContactPhoto from './img/ContactPhoto.jpeg';
import '../App.css';

const Contact = () => {
    return (
        <div className="contact-container-div">
            <div className="contactImageDiv">
                <img src={ContactPhoto} alt="contact photo"/>
            </div>
            <div className="contactTextDiv">
                <h1><b>Mailing Address</b></h1>
                Colorado Mesa University <br/>
                Computer Science and Engineering Department <br/>
                1100 North Avenue <br/>
                Grand Junction, CO 81501 <br/><br/>

                <h1><b>Email Address</b></h1>
                Email: someemail@mavs.coloradomesa.edu <br/><br/>

                <h1><b>Phone Number</b></h1>
                Cell: 970-123-4567 <br/>
                Home: 970-123-4567 <br/>
            </div>
        </div>
    )
}

export default Contact
