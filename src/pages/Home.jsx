export default function Home({ id }) {
    return(
        <div id={id} className="z-0 pt-30 md:pt-22 flex flex-col">
            {/* Introduction */}
            <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-light">
                    Hi, I'm
                </div>
                <div className="mt-3 text-5xl text-[#A78BFA]">
                    Markus Feng
                </div>
                <div className="text-[#D1D5DB] text-md italic text-center">
                    Computer Science Student<p className="leading-1" >•</p> Aspiring Software Engineer
                </div>
                <a href="#AboutMe" className="-mt-2.5 text-[#6D28D9] active:text-[#14B8A6] text-md not-italic text-center">
                    More about me
                </a>
                
            </div>
            {/* Links */}
            <div className="flex flex-row justify-evenly items-center my-20 ">
                <a className={`
                    pb-[0.5px] outline-3 outline-[#6D28D9] rounded-4xl outline-offset-3
                    active:outline-[#14B8A6]
                `} href="https://github.com/mkusf">
                    <img className="object-scale-down w-11 h-11" alt="GitHub Logo" src="assets/github-logo.png"/>
                </a>
                <a className={`
                    pl-[2.4px] py-[1px] outline-3 outline-[#6D28D9] rounded-sm outline-offset-2
                    active:outline-[#14B8A6]
                `} href="https://www.linkedin.com/in/markus-feng-302649290">
                    <img className=" object-scale-down w-11 h-11" alt="LinkedIn Logo" src="assets/linkedin-logo.png"/>
                </a>
                <a className={`
                    w-12 h-9 outline-3 outline-[#6D28D9] rounded-sm outline-offset-1
                    content-center
                    active:outline-[#14B8A6]
                `} href="mailto:markusfeng@yahoo.ca">
                    <img className=" object-scale-down" alt="Mail Icon" src="assets/email.png"/>
                </a>
            </div>
        </div>
        );
}