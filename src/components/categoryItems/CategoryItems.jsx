import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CategoryItems = () => {
    return (
        <div>
            <ul className='home-top__categories'>
                <li className='category-name'>
                    <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/powder"}>
                        <h3>Powders</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/cream"}>
                        <h3>Creams</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/pencil"}>
                        <h3>Pencils</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/liquid"}>
                        <h3>Liquids</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/gel"}>
                        <h3>Gels</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/palette"}>
                        <h3>Palettes</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/concealer"}>
                        <h3>Concealers</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/contour"}>
                        <h3>Contour</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/mineral"}>
                        <h3>Minerals</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/hightlighter"}>
                        <h3>Highlighters</h3>
                    </NavLink>
                </li>
                <li className='category-name'>
                    <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to={"/categories/lipstick"}>
                        <h3>Lipsticks</h3>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default CategoryItems