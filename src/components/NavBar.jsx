import { useState } from "react";
import menuIcon from "/assets/menu-icon.png";
import closeIcon from "/assets/grp4.png";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" z-50 sticky top-0 flex flex-col w-screen">
            <div className=' flex justify-between items-center gap-3 bg-[#1E1E1E] px-2.5 min-h-20'>
                <img className = " w-18 h-18" alt="Website Icon" src="/assets/mkusf-web-icon-removebg.png"></img>
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt="menu toggle"
                    className="w-7 h-6 mr-4 bg-cover cursor-pointer "
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div className={ isOpen ? 
                "absolute top-20 left-0 z-40 opacity-100 pointer-events-auto transition-opacity duration-425 bg-[#242424] min-h-30 w-screen shadow-xl/60" 
                : "absolute top-20 left-0 z-40 opacity-0 pointer-events-none bg-[#242424] min-h-30 w-screen inset-shadow-xl/60"}></div>
        </div>
    );
}