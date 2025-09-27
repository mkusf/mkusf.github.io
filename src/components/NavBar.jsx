import { useState } from "react";
import { NavLink } from 'react-router-dom';
import menuIcon from "/assets/menu-icon.png";
import closeIcon from "/assets/grp4.png";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" z-50 sticky top-0 flex flex-col w-screen">
            <div className=' flex justify-between items-center gap-3 bg-[#1E1E1E] px-2.5 min-h-20'>
                {/* NavBar */}
                <img className = " w-18 h-18" alt="Website Icon" src="/assets/mkusf-web-icon-removebg.png"></img>
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt="menu toggle"
                    className="w-7 h-6 mr-4 bg-cover cursor-pointer "
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {/* Menu Options*/}
            {/* Menu background*/}
            <div className={ isOpen ? `
                absolute top-20 left-0 z-40 
                opacity-100 pointer-events-auto transition-opacity duration-300
                bg-[#242424] shadow-xl/60
                min-h-30 w-screen 
                ` : `
                absolute top-20 left-0 z-40
                opacity-0 pointer-events-none transition-opacity duration-300 
                inset-shadow-xl/60 bg-[#242424]
                min-h-30 w-screen 
            `}>
                {/* Menu page buttons */}

            </div>
        </div>
    );
}