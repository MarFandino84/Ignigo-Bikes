import React from 'react'
import { FooterStyles } from './FooterStyles'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Logo } from '../../../public/Logo';

const Footer = () => {
  return (
    <>
     <FooterStyles>
                  <h5>IGNIGO BIKES <span> trademark</span></h5>
                  <img alt='Logo' src={Logo} />

                   <ul>
                  <li>  <FaFacebook /></li>
                  <li> <FaInstagram /></li>
                  <li> <FaTwitter /></li>
                    </ul>

     </FooterStyles>


    </>
  )
}

export default Footer
