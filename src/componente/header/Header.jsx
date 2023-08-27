import React, { useEffect, useState } from 'react';
import {FaFacebook,FaLinkedinIn, FaGoogleDrive} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import './header.css'
import{links} from '../../Data';
import {Link} from 'react-scroll'
import { animateScroll } from 'react-scroll';



const Header = () =>{
    const[showMenu, setShowMenu] = useState(false);
    const[scrollNav, setScrollNav] = useState(false);
    const[theme, setTheme] = useState('light-theme');

    const scrollTop =()=>{
        animateScroll.scrollToTop();
    };

    const changeNev =() =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    };

    const toggleTheme = () => {
        if (theme ==='light-theme'){
            setTheme('dark-theme');
        } else{
            setTheme('light-theme');
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll',changeNev);
    }, []);

    useEffect (() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(()=> {
        document.documentElement.className = theme;
    }, [theme]);

  return (
    <header className={`${scrollNav ? 'scroll-header': ''} header`}>
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                Petković</Link>

                <div className={`${showMenu ? 'nav__menu show-menu':
                 'nav__menu'}`}>
                    <div className="nav__data">
                    <ul className="nav__list">
                        {links.map(({name, path},index) =>{
                        return(
                            <li className="nav__item" key={index}>
                                <Link 
                                activeClass='nav__link text-cs'
                                to={path} 
                                spy={true}
                                hashSpy={true}
                                smooth={true} 
                                offset={-150} 
                                duration={500} 
                                onClick={() => setShowMenu(!showMenu)}
                                >
                                    {name}
                                    </Link>
                            </li>
                        );
                        })}
                    </ul>

                    <div className="header__socials">
                <a href="" className="header__social-links">
                    <FaFacebook/>
                </a>

                <a href="" className="header__social-links">
                    <FaLinkedinIn/>
                </a>

                <a href="" className="header__social-links ">
                    <FaGoogleDrive/>
                </a>
            </div>
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                       {theme === 'light-theme' ? <BsMoon/>:<BsSun/>}
                    </div>
                    <div className={`${showMenu ? 'nav__toggle animate-toggle':
                 'nav__toggle'
                }`} 
                onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        </nav>
    </header>
  );
};

export default Header
