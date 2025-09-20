import { useState } from "react";
import menuIcon from "/assets/menu-icon.png";
import closeIcon from "/assets/grp4.png";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex justify-between items-center gap-3 bg-[#1E1E1E] w-screen px-2.5 '>
            <img className = " w-18 h-18" alt="Website Icon" src="/assets/mkusf-web-icon-removebg.png"></img>
            <img
                src={isOpen ? closeIcon : menuIcon}
                alt="menu toggle"
                className="w-7 h-6 mr-4 bg-cover cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            />
        </div>
    );
}