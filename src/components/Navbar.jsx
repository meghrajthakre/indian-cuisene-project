import React from 'react'
import { NavLink } from "react-router-dom";
import SmallImg from './Images/Group 43.png'
import groupimg33 from './Images/Group 17 (1).svg'
import MainLogoImg from './Images/INDIAN CULINARY TALES.svg';
import accountLogo from './Images/Group 10 (1).svg'
import homeImg from './Images/Home.svg'
import recipe from './Images/recipe book.svg'
import chilli from './Images/Chilli (1).png'
import info from './Images/Info.svg'
import telephone from './Images/Telephone.svg'
import community from './Images/Community.svg'

const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
                <div className="logo">
                    <img src={SmallImg} alt="logo" className='smallimg' />
                    <img src={groupimg33} alt="groupImg" className='groupimg' />
                    <img src={MainLogoImg} alt="MainLogo" className='mainlogo' />
                </div>
                <div className="navlists">
                    <ul>

                        <img src={homeImg} />
                        <NavLink to={'/'}  > <li > Home</li></NavLink>
                    </ul>

                    <ul>
                        <img src={recipe} />
                        <NavLink to={'recipes'} > <li>Recipes</li></NavLink>

                    </ul>
                    <ul>
                        <img src={chilli} />
                        <NavLink to={'masals'} > <li>Masalas</li></NavLink>

                    </ul>
                    <ul>
                        <img src={info} />
                        <NavLink to={'aboutus'} > <li>About </li></NavLink>

                    </ul>

                    <ul>
                        <img src={telephone} />
                        <NavLink to={'contact'} > <li>Contact </li></NavLink>

                    </ul>

                    <ul>
                        <img src={community} />
                        <NavLink to={'community'} > <li>Community</li></NavLink>

                    </ul>






                </div>

                <div className="account">
                    <h4> Welcome Meghraj thakkre</h4>
                    <img src={accountLogo} className='accLogo' />
                </div>
            </nav>


        </div>
    )
}

export default Navbar