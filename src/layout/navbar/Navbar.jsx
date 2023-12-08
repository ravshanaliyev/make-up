import React from 'react'
import { Container } from '../../utils/Utils'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import NavLogo from '../../assets/images/alastin.avif'
import './Navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <Container>
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <Link to={"/"}><img src={NavLogo} alt="logo" /></Link>
                    </div>
                    <ul className='nav__links'>
                        <li className='nav-link-items'>Shop Skincare</li>
                        <li className='nav-link-items'>Holiday Gift Guide</li>
                        <li className='nav-link-items'>Routine Builder</li>
                        <li className='nav-link-items'>Skin Science</li>
                        <li className='nav-link-items'>About</li>
                    </ul>
                    <ul className='nav__icons'>
                        <li><IoSearchOutline /></li>
                        <li><Link to={"/liked"}><IoMdHeartEmpty /></Link></li>
                        <li><Link to={"/cart"}><HiOutlineShoppingBag /></Link></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar