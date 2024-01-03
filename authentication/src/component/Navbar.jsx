import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openNavText, setOpenNavText] = useState(false);

  const Links = {
    "/home": "Home",
    "/about": "About",
    "/dashboard": "Dashboard",  // Fixed the typo here
    "/signin": "Signin",
    "/login": "Login"
  }

  const menu = Object.entries(Links).map(([key, value], i) => {
    return (
      <MDBNavbarItem key={i}>
        <Link to={key} className="nav-link">{value}</Link>
      </MDBNavbarItem>
    );
  });

  return (
    <>
      <MDBNavbar expand='sm' light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>Admin-Panel </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavText(!openNavText)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavText}>
            <MDBNavbarNav className='ml-auto mb-lg-0 d-flex justify-end hover:text-red-blue'>
              {menu}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
