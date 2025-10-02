import { useState } from "react";
import { NavLink } from 'react-router-dom';
import menuIcon from "/assets/menu-icon.png";
import closeIcon from "/assets/close-button.png";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`z-50 fixed top-0 flex flex-col w-screen`}>
            {/* NavBar */}
            <div className={` 
                flex justify-between items-center md:justify-start
                bg-[#1E1E1E]/50
                min-h-20
                px-5
                md:px-0
            `}>
                {/* Website Icon */}
                <a href="#Home"><img className = " md:mx-5 2xl:mx-10 bg-contain z-40 h-auto w-11 md:w-14.5 lg:w-20 active:opacity-50" alt="Website Icon" src="/assets/mkusf-web-icon-removebg.png"></img></a>
                {/*
                Tablet and More
                Anchor Buttons
                */}
                <div className="hidden justify-around md:flex grow">
                    <a onClick={() => setIsOpen(false)} href="#Home" className={`
                            md:text-2xl lg:3xl font-light 
                            block h-20 flex-1 content-center text-center active:bg-[#755eb9] hover:bg-[#755eb9]
                        `}> Home 
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#Projects" className={`
                            md:text-2xl lg:3xl font-light
                            block h-20 flex-1 content-center text-center active:bg-[#755eb9] hover:bg-[#755eb9]
                        `}> Projects 
                    </a>
                    <a onClick={() => setIsOpen(false)} href="#AboutMe" className={`
                            md:text-2xl lg:3xl font-light
                            block h-20 flex-1 content-center text-center active:bg-[#755eb9] hover:bg-[#755eb9]
                        `}> About Me 
                    </a>
                </div>
                {/* Mobile Menu Button*/}
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt="menu toggle"
                    className="z-40 w-7 h-6 bg-cover cursor-pointer md:hidden "
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {/* Mobile See through cover */}
            <div onClick={ () => setIsOpen(false)} className={`fixed inset-0 z-30 bg-black transition-opacity duration-300
                ${ isOpen ? "fixed top-0 left-0 z-30 opacity-50 pointer-events-auto bg-black h-screen w-screen " : " md:hidden opacity-0 pointer-events-none"}
                `}
            />
            {/* Mobile Menu Options*/}
            {/* Mobile Menu background*/}
            <div className={`
                    fixed top-20 left-0 z-40 flex flex-col md:hidden transition-opacity duration-300
                    bg-[#242424]
                    min-h-30 w-screen 
                    ${isOpen ? `
                    opacity-100 pointer-events-auto 
                    `: `
                    opacity-0 pointer-events-none
                `}`}>
                {/*
                Mobile Menu page buttons:
                Home
                Projects
                AboutMe
                Contact
                */}
                <a onClick={() => setIsOpen(false)} href="#Home" className={`
                    text-2xl py-2 font-light active:bg-[#755eb9] delay-225 transition-opacity duration-400
                    ${isOpen ? `
                    opacity-100 pointer-events-auto 
                    `: `
                    opacity-0 pointer-events-none
                `}`}>
                    <div className="pl-2">Home</div>
                </a>
                <a onClick={() => setIsOpen(false)} href="#Projects"  className={`
                    text-2xl py-2 font-light active:bg-[#755eb9] delay-325 transition-opacity duration-400
                    ${isOpen ? `
                    opacity-100 pointer-events-auto 
                    `: `
                    opacity-0 pointer-events-none
                `}`}>
                    <div className="pl-2">Projects</div>
                </a>
                <a onClick={() =>  setIsOpen(false)} href="#AboutMe" className={`
                    text-2xl py-2 font-light active:bg-[#755eb9] delay-425 transition-opacity duration-400
                    ${isOpen ? `
                    opacity-100 pointer-events-auto 
                    `: `
                    opacity-0 pointer-events-none
                `}`}>
                    <div className="pl-2">About Me</div>
                </a>
            </div>
            
        </div>
    );
}