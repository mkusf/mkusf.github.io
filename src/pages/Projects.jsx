import { useState } from "react";



export default function Projects({ id }) {
    const [rightArrow, setRightArrow] = useState("assets/right.png");
    const [leftArrow, setLeftArrow] = useState("assets/left.png");
    const [project, setProject] = useState(0);
    const project_total = 2;
    const techStack = [
    { src: "assets/Git-Icon-White.svg", alt: "Git logo" },
    { src: "assets/Github_logo.svg", alt: "GitHub logo" },
    { src: "assets/React-icon.svg", alt: "React logo" },
    { src: "assets/Javascript_Logo.png", alt: "JavaScript logo" },
    { src: "assets/tailwind.svg", alt: "TailwindCSS logo" },
    { src: "assets/jest.svg", alt: "Jest logo" },
    { src: "assets/render_logo.svg", alt: "Render logo" },
    ];

    function changeProject(newState) {
        const project_index = (newState + project_total) % project_total;
        setProject(project_index);
    }
    
    return(
        <div id={id} className="flex flex-col gap-5">
            <div className="mt-20 font-light text-5xl text-center">
                Projects
            </div>
            {/* Selector */}
            <div className="rounded-3xl mx-3 flex justify-center gap-2">
                <img 
                    onClick={() => changeProject(project - 1)}
                    onMouseEnter={() => setLeftArrow("assets/left-hover.png")}
                    onMouseLeave={() => setLeftArrow("assets/left.png")}
                    onMouseDown={() => setLeftArrow("assets/left-active.png")}
                    onMouseUp={() => setLeftArrow("assets/left-hover.png")}
                    onTouchStart={() => setLeftArrow("assets/left-active.png")}
                    onTouchEnd={() => setLeftArrow("assets/left.png")}
                    className="object-scale-down w-8 cursor-pointer select-none"
                    src={leftArrow} alt="Left arrow button"
                />
                {/* Project Titles */}
                <div className="bg-[#1E1E1E] w-40 rounded-xl relative py-5">
                    <div
                        className={`
                            absolute inset-0 flex items-center justify-center
                            text-2xl transition-opacity duration-500 ${
                        project === 0
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                    >
                        Trip Tips
                    </div>
                    <div
                        className={`
                            absolute inset-0 flex items-center justify-center 
                            text-2xl transition-opacity duration-500 ${
                        project === 1
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                    >
                        Stop N Go
                    </div>
                </div>
                <img 
                    onClick={() => changeProject(project + 1)}
                    onMouseEnter={() => setRightArrow("assets/right-hover.png")}
                    onMouseLeave={() => setRightArrow("assets/right.png")}
                    onMouseDown={() => setRightArrow("assets/right-active.png")}
                    onMouseUp={() => setRightArrow("assets/right-hover.png")}
                    onTouchStart={() => setRightArrow("assets/right-active.png")}
                    onTouchEnd={() => setRightArrow("assets/right.png")}
                    className="object-scale-down w-8 cursor-pointer select-none"
                    src={rightArrow} alt="Right arrow button"
                />
            </div>
            {/* Shows which project is selected*/}
            <div className={`flex-row flex justify-center gap-2`}>
                <div className={project === 0 ? `bg-[#F3F4F6] w-3 h-3 rounded-full` : `bg-[#3D3D3D] w-3 h-3 rounded-full`}></div>
                <div className={project === 1 ? `bg-[#F3F4F6] w-3 h-3 rounded-full` : `bg-[#3D3D3D] w-3 h-3 rounded-full`}></div>
            </div>
            {/* 
            Text of Project:
            Icon
            Body text
            */}
            <div className="bg-[#1E1E1E] min-h-20 rounded-2xl mx-3 p-5 flex flex-col">
                {/* Body TripTips */}
                {project === 0 &&
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row flex-wrap gap-3 justify-center">
                            {/* icons of techstack */}
                            {techStack.map((tech, idx) => (
                                <img
                                    key={idx}
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="object-contain w-10 h-10"
                                />
                            ))}
                        </div>
                        <a href="https://final-project-4-winds.onrender.com" className="text-[#8B5CF6] hover:text-[#14B8A6] active:text-[#14B8A6]">Link to Website</a>
                        <div className="flex flex-col gap-2">
                            <div className="self-start font-light text-base">
                                Trip Tips is a team project for SFU's CMPT276 course. 
                                Developed along side three peers, this project was created to execute a Agile software development life cycle using mix of Scrum and KanBan.
                            </div>
                            <div>
                                Planning
                            </div>
                            <div>
                                Development
                            </div>
                            <div>
                                CI/CD
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}