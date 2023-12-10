import React from 'react'
import { Container } from '../../utils/Utils'
import details from '../../assets/images/details.webp'
import hex1 from '../../assets/images/hex.avif'
import hex2 from '../../assets/images/hex2.avif'
import hex3 from '../../assets/images/hex3.webp'
import hex4 from '../../assets/images/hex4.webp'
import './Details.scss'
const Details = () => {
  return (
    <div className='details'>
        <Container>
            <div className="details-wrapper">
                <div className="details-img">
                    <img src={details} alt="" />
                </div>
                <div className="details-info">
                      <h2 className='details-title'>CLINICALLY PROVEN FORMULATIONS</h2>
                    <span className="details-desc">
                          Our clinically tested, patented technologies create a complete approach to skin rejuvenation that helps reverse all visible signs of aging.
                    </span>
                    <div className="details-grid">
                        <div className="details-grid-item">
                            <img src={hex1} alt="" className="grid-img" />
                            <div>
                                  <span className="grid-title">TriHex Technology®</span>
                                  <p>A blend of active peptides and key ingredients that supports the production of new healthy collagen and elastin, helping to protect and renew skin for a more youthful appearance.</p>
                            </div>
                        </div>
                          <div className="details-grid-item">
                              <img src={hex2} alt="" className="grid-img" />
                              <div>
                                  <span className="grid-title">Octapeptide-45</span>
                                  <p>Helps the skin’s ability to naturally increase its own high-molecular hyaluronic acid production deep within for long-term plumping, anti-aging, and hydration benefits.</p>
                              </div>
                          </div>
                          <div className="details-grid-item">
                              <img src={hex3} alt="" className="grid-img" />
                              <div>
                                  <span className="grid-title">Path-3 Technology</span>
                                  <p>Formulated to help minimize the recurrence of surface pigmentation and protect against future damage with continued use.</p>
                              </div>
                          </div>
                          <div className="details-grid-item">
                              <img src={hex4} alt="" className="grid-img" />
                              <div>
                                  <span className="grid-title">LipoDRONE™</span>
                                  <p>Our patented LipoDRONE™ delivery system helps you achieve the appearance of even firmer, more toned skin on the body.</p>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Details