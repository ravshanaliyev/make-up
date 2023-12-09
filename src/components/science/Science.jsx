import React from 'react'
import { Container } from '../../utils/Utils'
import science from '../../assets/images/science.webp'
import quiz from '../../assets/images/quiz.webp'
import anti from '../../assets/images/Edited_Social.jpg'
import { Link } from 'react-router-dom'
import './Science.scss'
const Science = () => {
    return (
        <div className='science-section'>
            <Container>
                <div className="science-wrapper">
                    <h2>SMARTER SCIENCE. <br />
                        REJUVENATED SKIN.</h2>
                    <div className="science-cards">
                        <div className="science-card">
                            <Link to={"/collections/offers"}>
                                <img className='science-img' src={science} alt="" />
                            </Link>
                            <h3 className='science-title'>Anti-Aging Essentials</h3>
                            <p className='science-desc'>A clinically proven line of daily-use products, formulated to protect and renew skin for a more youthful appearance.</p>
                            <Link to={"/collections/offers"} className='shop-link'>Shop Now</Link>
                        </div>
                        <div className="science-card">
                            <Link to={"/collections/offers"}>
                                <img className='science-img' src={anti} alt="" />
                            </Link>
                            <h3 className='science-title'>Subscribe & Save

</h3>
                            <p className='science-desc'>Subscribe to your favorite products and have them delivered to you on your schedule. Receive 5% off and free shipping on every order, plus occasional gifts!</p>
                            <Link to={"/collections/offers"} className='shop-link'>Shop Now</Link>
                        </div>
                        <div className="science-card">
                            <Link to={"/collections/offers"}>
                                <img className='science-img' src={quiz} alt="" />
                            </Link>
                            <h3 className='science-title'>Build a Personalized Routine</h3>
                            <p className='science-desc'>Not sure which ALASTIN product is right for you? Take our quick quiz to build the perfect routine for your skin.</p>
                            <Link to={"/collections/offers"} className='shop-link'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Science