import { RxHamburgerMenu } from "react-icons/rx";
import { BiMoon, BiSun } from "react-icons/bi";
import React, { useEffect } from 'react';
import logo from '../images/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { darkMode, reload, sideBar } from "../store/action";
import { NavLink } from "react-router-dom";

const Header = () => {
    const darkModeData = useSelector(state => state.darkMode);
    const dispatch = useDispatch();


    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            dispatch(darkMode());
        }
    }, []);

    useEffect(() => {
        if (darkModeData) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    }, [darkModeData]);

    return (
        <div className='w-[100vw] z-10 h-[10vh] max-sm:h-[8vh] dark:bg-black dark:text-white border-b-[.1vw] dark:border-b-ligthBlack dark:border-lightBlack flex justify-between items-center px-[5vw]'>
            <button onClick={() => dispatch(reload())} className="text-[2vw] font-serif max-sm:text-[5vw] font-bold flex justify-center items-center gap-[.3vw]">
                <img className="w-[2.5vw] max-sm:w-[8vw]" src={logo} alt="Logo" />
                Medium
            </button>
            <div className='flex justify-center items-center gap-[1vw] max-sm:gap-[1.5vw]'>
                <button onClick={() => dispatch(darkMode())} className="active:scale-95">
                    {darkModeData ? (
                        <BiSun className="font-semibold  text-[2.2vw] max-sm:text-[5vw]  dark:border-gray-900 border-[.1vw] rounded-full p-[.1vw]" />
                    ) : (
                        <BiMoon className="font-semibold  text-[2.2vw] max-sm:text-[5vw]  dark:border-lightBlack border-[.1vw] rounded-full p-[.1vw]" />
                    )}
                </button>
                <NavLink to="/" >
                    <button className="active:scale-95 hover:text-orange-500 font-bold text-[1.1vw] max-sm:text-[3vw]">Home</button>
                </NavLink>
                <NavLink to="/Create">
                    <button className="active:scale-95 hover:text-orange-500 font-bold text-[1.1vw] max-sm:text-[3vw]">Create</button>
                </NavLink>
                <button onClick={() => dispatch(sideBar())} className="hidden max-sm:flex active:scale-95 text-center items-center">
                    <RxHamburgerMenu className="text-[3vw] max-sm:text-[8vw] ml-[2vw]" />
                </button>
            </div>
        </div>
    );
};

export default Header;
