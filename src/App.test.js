import { render, screen } from '@testing-library/react';
import Banner from './components/Banner';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

test('renders title in banner', () => {
  render(<Banner />);
  const websiteTitle = screen.getByText("Jay's Website");
  expect(websiteTitle).toBeInTheDocument();
});

test('renders navmenu', () =>{
  render(<NavMenu/>);

  const navmenuoption1 = screen.getByText("Home");
  const navmenuoption2 = screen.getByText("Certifications");
  const navmenuoption3 = screen.getByText("Contact");

  expect(navmenuoption1).toBeInTheDocument();
  expect(navmenuoption2).toBeInTheDocument();
  expect(navmenuoption3).toBeInTheDocument();

});

test('testing homepage', ()=>{

  render(<Home/>);
  const homepageWhoami = screen.getByText("Who am I?");
  const linkedIn = screen.getByText("LinkedIN");
  const imgAlternate = screen.getByAltText("navypic");

  expect(homepageWhoami).toBeInTheDocument();
  expect(linkedIn).toBeInTheDocument();
  expect(imgAlternate).toBeInTheDocument();

})

test('testing Certifications page', ()=>{

render(<Certifications/>);

const lpoaIMG = screen.getByAltText("LPOALogo");
const navakaiIMG = screen.getByAltText("navakaiLogo");
const navyIMG = screen.getByAltText("navyLogo");

expect(lpoaIMG).toBeInTheDocument();
expect(navakaiIMG).toBeInTheDocument();
expect(navyIMG).toBeInTheDocument();

});

test('testing contact page', ()=>{

  render(<Contact/>);

  const contactIMG = screen.getByAltText("contactPhoto");
  const mailAddress = screen.getByText("Mailing Address");
  expect(mailAddress).toBeInTheDocument();
  expect(contactIMG).toBeInTheDocument();
});

test('testing footer', ()=>{

  render(<Footer/>);
  const footerText = screen.getByText("Created by Jeremy LaGree");
  expect(footerText).toBeInTheDocument();

});