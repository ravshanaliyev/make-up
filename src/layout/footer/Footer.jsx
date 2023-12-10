import React from 'react'
import { Container } from '../../utils/Utils'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-img">
            <h2>Galderma</h2>
          </div>
          <div className="footer-main">
            <p>2023 Galderma laboratories, L.P. United States. All rights reserved. All trademarks are the property of their respective owners. This site is intended for U.S audiences only. © 2023, ALASTIN Skincare, Inc. All trademarks are the property of their respective owners.</p>
            <ul>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Accessibility</li>
              <li>Cookies Settings</li>
              <li>Cookie Policy</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
          <div className="footer-desc">
            *Free shipping must be selected at checkout. Free gift will automatically be added to your cart at checkout, no code needed; only valid on alastin.com; valid only 12/8-12/16/2023 or while supplies last; valid only on orders $165+; limit one free gift per customer. If a partial or whole return is made after purchase, and the modified order no longer qualifies for the free gift, the value of the gift will be deducted from the refund; cannot be combined with other offers; 
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer