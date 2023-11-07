import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='danger'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className="text-light">
            <img className='me-2'
              src='https://favim.com/pd/s2/orig/36/animation-counter-gif-love-numbers-Favim.com-292566.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header