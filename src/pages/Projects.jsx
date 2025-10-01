import { useState } from "react";



export default function Projects({ id }) {
    const [rightArrow, setRightArrow] = useState("assets/right.png");
    const [leftArrow, setLeftArrow] = useState("assets/left.png");
    const [project, setProject] = useState(0);
    const project_total = 2;

    function changeProject(newState) {
        const project_index = (newState + project_total) % project_total;
        setProject(project_index);
    }
    
    return(
        <div id={id} className="flex flex-col">
            <div className="mt-20 font-light text-5xl text-center">
                Projects
            </div>
            {/* Selector */}
            <div className="rounded-3xl mx-3 flex justify-center gap-2 mt-5">
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
                <div className="bg-[#1E1E1E] w-40 rounded-xl relative">
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
            <div className="flex-row flex justify-center mt-2 gap-2">
                <div className="bg-[#F3F4F6] w-3 h-3 rounded-full"></div>
                <div className="bg-[#3D3D3D] w-3 h-3 rounded-full"></div>
            </div>
        </div>
    );
}