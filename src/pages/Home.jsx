export default function Home({ id }) {
    return(
        <div id={id} className="z-0 pt-30 md:pt-22 flex flex-col">
            <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-2xl font-light">
                    Hi, I'm
                </div>
                <div className="mt-2 text-4xl text-[#A78BFA]">
                    Markus Feng
                </div>
                <div className="text-[#D1D5DB] text-sm italic">
                    Computer Science Student <br/> Aspiring Software Engineer
                </div>
            </div>
            <div className="flex flex-row justify-around items-center mt-15 ">
                <a className={`
                    pb-[0.5px] outline-3 outline-[#6D28D9] rounded-4xl outline-offset-3
                    active:outline-[#14B8A6]
                `} href="https://github.com/mkusf">
                    <img className="object-scale-down w-8 h-8" alt="GitHub Logo" src="assets/github-logo.png"/>
                </a>
                <a className={`
                    pl-[2.4px] py-[1px] outline-3 outline-[#6D28D9] rounded-sm outline-offset-2
                    active:outline-[#14B8A6]
                `} href="https://www.linkedin.com/in/markus-feng-302649290">
                    <img className=" object-scale-down w-8 h-8" alt="LinkedIn Logo" src="assets/linkedin-logo.png"/>
                </a>
                <a className={`
                    w-8 h-6 outline-3 outline-[#6D28D9] rounded-sm outline-offset-1
                    active:outline-[#14B8A6]
                `} href="mailto:markusfeng@yahoo.ca">
                    <img className=" object-scale-down w-8 h-6" alt="Mail Icon" src="assets/email.png"/>
                </a>
            </div>
        </div>
        );
}