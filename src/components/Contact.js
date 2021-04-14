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
                <h3>Mailing Address</h3>  <br/>
                Colorado Mesa University <br/>
                Computer Science and Engineering Department <br/>
                1100 North Avenue <br/>
                Grand Junction, CO 81501 <br/><br/><br/>

                <h3>Email Address</h3> <br/>
                Email: someemail@mavs.coloradomesa.edu <br/><br/><br/>

                <h3>Phone Number</h3> <br/>
                Cell: 970-123-4567 <br/>
                Home: 970-123-4567 <br/>
            </div>
        </div>
    )
}

export default Contact
