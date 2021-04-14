import React from 'react'
import '../App.css';
import navySeal from './img/USNSeal.png';
import LPOA from './img/Leitner-Poma.jpeg';
import Navakai from './img/navakai-inc.jpeg';
import Table from 'react-bootstrap/Table';

const Certifications = () => {
    return (
        <div className="cert-container">
            <div className="left-cert-div">
                <h1><b>Certifications/Training Background</b></h1>
                <h3><b>US Navy Certifications/Training</b></h3>
                <p>I received most of my certifications and training through the military. Before entering the service
                    I had never really been very interested or knowledgeable about computers. The navy really introduced me to technology and from there
                    is where my drive to continue in the field started.</p>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>Year</tr>
                            <tr>Cert/Training</tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2012</td>
                                <td>A + Certification</td>
                            </tr>
                            <tr>
                                <td>2012</td>
                                <td>GCCS - Global Control Systems Maritime school</td>
                            </tr>
                            <tr>
                                <td>2014</td>
                                <td>Security + Certification</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
                <h3><b>Navakai Certifications</b></h3>
                <p>I later earned a few more certifications while working at Navakai in Colorado Springs. Upon being hired, we had 90 days
                    to become a MCP(Microsoft Certified Professional). Our company had a partnership with Microsoft, so 70% of our IT staff had to be
                    certified.
                </p>
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>Year</tr>
                            <tr>Cert/Training</tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2018</td>
                                <td>Windows 10 70-697 Certification</td>
                            </tr>
                            <tr>
                                <td>2018</td>
                                <td>Windows server 2012 R2 Certification</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
                <p> At Leitner-Poma of America, I have had little time to acquire certifications and instead was at the point where I could really
                    put all my training into practice. Upon moving to the developer role, I started doing most of my training with Udemy courses.
                    These courses tend to focus on web-app development ranging in technologies such as PHP, MySQL, HTML, CSS, JavaScript. I have also
                    began to learn some popular frameworks used for web development.
                </p>
                <h3><b>Leitner-Poma of America Training</b></h3>
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>Year</tr>
                            <tr>Cert/Training</tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2021</td>
                                <td>Udemy: The Web Developer Bootcamp 2021</td>
                            </tr>
                            <tr>
                                <td>2021</td>
                                <td>Udemy: The Complete Web Developer Course 2.0</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
            </div>
            <div className="right-cert-div">
                <img src={navySeal} />
                <br/>
                <br/>
                <img src={Navakai} />
                <br/>
                <br/>
                <img src={LPOA} />
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Certifications
