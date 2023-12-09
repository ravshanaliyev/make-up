import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CategoryItems = () => {
    return (
        <div>
            <ul className='home-top__categories'>
                <li className='category-name'>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/blush"}>
                        <h3>Blush</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/bronzer"}>
                        <h3>Bronzer</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/eyebrow"}>
                        <h3>Eyebrow</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/eyeliner"}>
                        <h3>Eyeliner</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/eyeshadow"}>
                        <h3>Eyeshadow</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/foundation"}>
                        <h3>Foundation</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/lip_liner"}>
                        <h3>Lip liner</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/lipstick"}>
                        <h3>Lipstick</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/mascara"}>
                        <h3>Mascara</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/nail_polish"}>
                        <h3>Nail polish</h3>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default CategoryItems