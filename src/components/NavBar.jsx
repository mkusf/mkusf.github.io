import { useState } from "react";
import { NavLink } from 'react-router-dom';
import menuIcon from "/assets/menu-icon.png";
import closeIcon from "/assets/grp4.png";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" z-50 fixed top-0 flex flex-col w-screen">
            {/* NavBar */}
            <div className=' flex justify-between items-center gap-3 bg-[#1E1E1E] px-2.5 min-h-20 '>
                <img className = " z-40 w-18 h-18" alt="Website Icon" src="/assets/mkusf-web-icon-removebg.png"></img>
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt="menu toggle"
                    className="z-40 w-7 h-6 mr-4 bg-cover cursor-pointer "
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {/* See through cover */}
            <div onClick={ () => setIsOpen(false)} className={`fixed inset-0 z-30 bg-black transition-opacity duration-300
                ${ isOpen ? "fixed top-0 left-0 z-30 opacity-50 pointer-events-auto bg-black h-screen w-screen " : "opacity-0 pointer-events-none"}
                `}
            />
            {/* Menu Options*/}
            {/* Menu background*/}
            <div className={ isOpen ? `
                fixed top-20 left-0 z-40 flex flex-col 
                opacity-100 pointer-events-auto transition-opacity duration-300
                bg-[#242424]
                min-h-40 w-screen 
                pl-2 gap-y-2
                ` : `
                fixed top-20 left-0 z-40 flex flex-col
                opacity-0 pointer-events-none transition-opacity duration-300 
                bg-[#242424]
                min-h-40 w-screen 
                pl-2 gap-y-2
            `}>
                {/*
                Menu page buttons:
                Home
                Projects
                AboutMe
                Contact
                */}
                <a onClick={() => setIsOpen(false)} href="#Home" className={`
                    font-sansation text-2xl font-light
                `}>
                    Home
                </a>
                <a onClick={() => setIsOpen(false)} href="#Projects"  className={`
                    font-sansation text-2xl font-light
                `}>
                    Projects
                </a>
                <a onClick={() => setIsOpen(false)} href="#AboutMe" className={`
                    font-sansation text-2xl font-light
                `}>
                    About Me
                </a>
                <a onClick={() => setIsOpen(false)} href="#Contact" className={`
                    font-sansation text-2xl font-light
                `}>
                    Contact
                </a>
            </div>
            
        </div>
    );
}