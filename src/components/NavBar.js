import React from 'react'

const 
NavBar = () => {
    return (
    <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="HomePage">
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="Schedule">
            <Nav.Link eventKey="link-1">Schedule</Nav.Link>
        </Nav.Item>
        <Nav.Item as="AboutMe">
            <Nav.Link eventKey="link-2">About Me</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default NavBar
