export default function Home({ id }) {
    return(
        <div id={id} className="z-0 pt-30 md:pt-40 flex flex-col sm:flex-row sm:justify-evenly">
            {/* Introduction */}
            <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="text-4xl sm:text-6xl font-light">
                    Hi, I'm
                </div>
                <div className="mt-3 sm:mt-7 text-5xl sm:text-8xl text-left text-[#A78BFA]">
                    Markus Feng
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="sm:flex sm:flex-row text-[#D1D5DB] text-md sm:text-xl italic sm:gap-2 sm:justify-center sm:items-center text-center">
                        Computer Science Student<p className="leading-2 sm:leading-0" >•</p> Aspiring Software Engineer
                    </div>
                    <a href="#AboutMe" className=" sm:hover:text-[#14B8A6] sm:mt-0 text-[#6D28D9] active:text-[#14B8A6] text-md sm:text-xl not-italic text-center">
                        Find out more about me
                    </a>
                </div>
            </div>
            {/* Link to Projects */}
            <div className="sm:hidden my-15 flex justify-center">
                <a href="#Projects" className="bg-[#e070ae] hover:bg-[#e24998] active:bg-[#e24998] text-3xl  rounded-3xl py-1 px-4">
                    My Projects
                </a>
            </div>
            {/* 
            Links 
            -GitHub
            -LinkedIn
            -Mail
            */}
            <div className="flex justify-center text-2xl sm:hidden"> Contact me! </div>
            <div className={`
                flex flex-row sm:flex-col justify-around items-center
                mb-10 mx-5 py-5 sm:my-0 sm:px-5 sm:gap-12 2xl:gap-14
                bg-[#1E1E1E] border-[#3D3D3D] border-1 rounded-2xl
                `}>
                <a className={`
                    pb-[1.5px] outline-3 outline-[#6D28D9] rounded-4xl outline-offset-3
                    active:outline-[#A78BFA] sm:hover:outline-[#14B8A6]
                `} href="https://github.com/mkusf">
                    <img className="object-scale-down w-11 h-11 2xl:w-16 2xl:h-16" alt="GitHub Logo" src="assets/github-logo.png"/>
                </a>
                <a className={`
                    pl-[2.5px] py-[1px] outline-3 outline-[#6D28D9] rounded-sm outline-offset-2
                    active:outline-[#A78BFA] sm:hover:outline-[#14B8A6]
                `} href="https://www.linkedin.com/in/markus-feng-302649290">
                    <img className=" object-scale-down w-11 h-11 2xl:w-16 2xl:h-16" alt="LinkedIn Logo" src="assets/linkedin-logo.png"/>
                </a>
                <a className={`
                    w-12 h-9 2xl:w-17 2xl:h-14 outline-3 outline-[#6D28D9] rounded-sm outline-offset-1
                    content-center
                    active:outline-[#A78BFA] sm:hover:outline-[#14B8A6]
                `} href="mailto:markusfeng@yahoo.ca">
                    <img className=" object-scale-down" alt="Mail Icon" src="assets/email.png"/>
                </a>
            </div>
        </div>
        );
}