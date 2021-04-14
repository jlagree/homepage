import React from 'react';
import navyImage from './img/Navy.jpg';
import Table from 'react-bootstrap/Table';
import '../App.css';

const Home = () => {
    return (
      <div className="panel-container">
        <div className="left-panel">
          <h2><b>Who am I?</b></h2>
          <p>My name is Jeremy LaGree. I am currently in my senior year at
                Colorado Mesa University. I am writing this page for an assignment
                to test our knowledge with using a React-App.
          </p>
          <b><a href="https://www.linkedin.com/in/jeremy-lagree-20b8b4101">LinkedIN</a></b><br/>
          <img src={navyImage}/>
          <h2><b>About Me!</b></h2>
          <p>
          I spent four years in the United States Navy as an Information systems
          technicain. In that time I traveled to many different countries and learned
          a ton about all different kinds of computer systems. 
          </p>
          <p>
          After leaving the military I was hired at a MSP company in Colorado Springs.
          There, I was a tier II technician where my focus was on Help Desk and server
          maintenance and administration. While living in Colorado Springs I also attended
          the University of Colorado, Colorado Springs (UCCS) to pursue a degree in Computer Science. 
          I later left the company to move back to Grand Jucntion and finish
          my computer science degree at CMU.
          </p>

          <p>
          Currently, I live in Grand Junction and work for a company called Leitner-Poma
          of America. I was initially hired to do helpdesk and domain administration which is what I did for my first
          few years of employment here. I was just recently moved into the position of web app development which 
          has been a transition I looked forward to as my interest in doing IT support has declined over the years. 
          I still struggle with some of the technologies, as the sytem at LPOA has 
          been in place for quiet some time which makes it all very complex. While it has not been
          extremely inviting to a new developer, I am getting by and hope to continue to grow with the company
          and grow as a developer!
          </p>
        </div>
        <div className='right-panel'>
          <h2><b>Previous Experience</b></h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Years</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020-Present</td>
                <td>Full Stack Web-App Development, Leitner-Poma of America</td>
              </tr>
              <tr>
                <td>2018-2020</td>
                <td>Helpdesk/Network Administrator, Leitner-Poma of America</td>
              </tr>
              <tr>
                <td>2018-Present</td>
                <td>BS, Computer Science, Colorado Mesa University</td>
              </tr>
              <tr>
                <td>2016-2018</td>
                <td>Tier II Network Administrator, Navakai Inc.</td>
              </tr>
              <tr>
                <td>2016-2018</td>
                <td>BS, Computer Science, University of Colorado, Colorado Springs</td>
              </tr>
              <tr>
                <td>2012-2016</td>
                <td>Information Systems Technician, United States Navy</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      );
}

export default Home
