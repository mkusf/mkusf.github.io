import { useState } from "react";



export default function Projects({ id }) {
    const [rightArrow, setRightArrow] = useState("assets/right.png");
    const [leftArrow, setLeftArrow] = useState("assets/left.png");
    const [project, setProject] = useState(0);
    const project_total = 2;
    const TripStack = [
    { src: "assets/Git-Icon-White.svg", alt: "Git logo" },
    { src: "assets/Github_logo.svg", alt: "GitHub logo" },
    { src: "assets/React-icon.svg", alt: "React logo" },
    { src: "assets/Javascript_Logo.png", alt: "JavaScript logo" },
    { src: "assets/tailwind.svg", alt: "TailwindCSS logo" },
    { src: "assets/jest.svg", alt: "Jest logo" },
    { src: "assets/render_logo.svg", alt: "Render logo" },
    ];

    const TrafficStack = [
    { src: "assets/roboflow.svg", alt: "Roboflow logo" },
    { src: "assets/googlecollab.svg", alt: "Google Collab logo" },
    { src: "assets/ultralytics.svg", alt: "Ultralytics logo" },
    ];

    function changeProject(newState) {
        const project_index = (newState + project_total) % project_total;
        setProject(project_index);
    }
    
    return(
        <div id={id} className="flex flex-col gap-5">
            <div className="mt-20 font-semibold text-4xl sm:text-5xl lg:text-6xl text-center">
                Projects
            </div>
            {/* Selector */}
            <div className="rounded-3xl mx-3 flex justify-center gap-2 mt-2 ">
                <img 
                    onClick={() => changeProject(project - 1)}
                    onMouseEnter={() => setLeftArrow("assets/left-hover.png")}
                    onMouseLeave={() => setLeftArrow("assets/left.png")}
                    onMouseDown={() => setLeftArrow("assets/left-active.png")}
                    onMouseUp={() => setLeftArrow("assets/left-hover.png")}
                    onTouchStart={() => setLeftArrow("assets/left-active.png")}
                    onTouchEnd={() => setLeftArrow("assets/left.png")}
                    className="object-scale-down w-8 lg:w-11 cursor-pointer select-none"
                    src={leftArrow} alt="Left arrow button"
                />
                {/* Project Titles */}
                <div className="bg-[#1E1E1E] w-80 rounded-xl relative py-5 lg:py-8 ">
                    <div
                        className={`
                            absolute inset-0 flex items-center justify-center
                            text-2xl lg:text-3xl transition-opacity duration-500 ${
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
                            text-xl lg:text-3xl transition-opacity duration-500 ${
                        project === 1
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                    >
                        Traffic Light Detector
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
                    className="object-scale-down w-8 lg:w-11 cursor-pointer select-none"
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
                        <div className="flex flex-row flex-wrap gap-3 justify-center w-full sm:justify-evenly">
                            {/* icons of techstack */}
                            {TripStack.map((tech, idx) => (
                                <img
                                    key={idx}
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="object-contain w-10 h-10 lg:w-15 lg:h-15"
                                />
                            ))}
                        </div>
                        <a href="https://final-project-4-winds.onrender.com" className="text-[#8B5CF6] sm:text-lg lg:text-xl hover:text-[#14B8A6] active:text-[#14B8A6]">Link to Website</a>
                        <div className="flex flex-col gap-2 sm:px-3 sm:pb-10">
                            <div className="self-start text-base sm:text-lg lg:text-xl lg:mt-3 text-[#D1D5DB]">
                                TripTips is a full-stack trip planning application 
                                I built with three peers as part of SFU's CMPT 276 course. We applied an <span className="text-[#A78BFA]">Agile software development </span>
                                life cycle that combined <span className="text-[#A78BFA]">Scrum</span> and <span className="text-[#A78BFA]">Kanban</span> practices, 
                                allowing us to stay adaptable while meeting deadlines. I led the project planning process by creating a detailed work breakdown structure, defining user stories, and coordinating weekly sprint meetings alongside daily check-ins to keep the team aligned.
                            </div>
                            <div className="self-start text-xl sm:text-2xl lg:text-3xl">
                                Technical Implementation
                            </div>
                            <div className="self-start text-base sm:text-lg lg:text-xl sm:px-5 text-[#D1D5DB]">
                                On the technical side, We implemented key front-end features using <span className="text-[#A78BFA]">React </span> 
                                and <span className="text-[#A78BFA]">Tailwind CSS</span>, and
                                integrated both the <span className="text-[#A78BFA]">TripAdvisor API</span> and the <span className="text-[#A78BFA]">Google Maps JavaScript API</span> to provide a rich,
                                location-based experience. To support collaboration, I introduced a structured Git branching
                                strategy that minimized conflicts and kept our codebase clean.
                            </div>
                            <div className="self-start text-xl sm:text-2xl lg:text-3xl">
                                Deployment & Testing
                            </div>
                            <div className="self-start text-base sm:text-lg sm:px-5 lg:text-xl text-[#D1D5DB]">
                                For deployment, I set up a <span className="text-[#A78BFA]">CI/CD pipeline</span> with 
                                GitHub Actions and Render, enabling our team to
                                push updates with minimal friction. My team wrote 
                                <span className="text-[#A78BFA]"> automated tests</span> in Jest to ensure reliability
                                and reduce regressions. These practices not only streamlined our workflow but also reduced manual
                                testing time significantly, freeing the team to focus on feature development.
                            </div>
                            <div className="self-start text-xl sm:text-2xl  lg:text-3xl">
                                Results & Lessons Learned
                            </div>
                            <div className="self-start text-base sm:text-lg  sm:px-5 lg:text-xl text-[#D1D5DB]">
                                The result was a polished prototype that met all functional requirements, delivered on time, and
                                received positive feedback from classmates for its clean user experience. Beyond the technical outcomes, this project
                                deepened my ability to translate ambiguous requirements into concrete tasks, reinforced the 
                                 value of <span className="text-[#A78BFA]"> strong communication </span>
                                in team settings, and gave me practical insight into balancing Scrum's structure
                                with Kanban's flexibility.
                            </div>
                        </div>
                    </div>
                }
                {project === 1 &&
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row flex-wrap gap-3 w-full justify-center-safe -mt-10 lg:-mt-15 lg:-mb-10">
                            {/* icons of techstack */}
                            {TrafficStack.map((tech, idx) => (
                                <img
                                    key={idx}
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="object-scale-down w-30 lg:w-50"
                                />
                            ))}
                            <img src="assets/python.svg" alt="Python logo" className="object-scale-down w-12 lg:w-20"/>
                        </div>
                        <div className="flex flex-col gap-2 sm:px-3 sm:pb-10">
                            <div className="self-start text-base sm:text-lg lg:text-xl text-[#D1D5DB]">
                                The Traffic Light Detection Model was developed as part of SFU's CMPT 310 course
                                on Artificial Intelligence. Working in a team of three, we set out to build a 
                                system capable of real-time recognition of traffic light states using deep learning.
                                 Our focus was on creating a practical application that combined data collection, 
                                 model training, and evaluation
                            </div>
                            <div className="self-start text-xl sm:text-2xl lg:text-3xl">
                                Technical Implementation
                            </div>
                            <div className="self-start text-base sm:text-lg lg:text-xl sm:px-5 text-[#D1D5DB]">
                                We collected and <span className="text-[#A78BFA]">annotated</span> over 500 traffic light images using RoboFlow to create a 
                                robust and balanced dataset. Leveraging Ultralytics's YOLOv8 framework in Python, we 
                                trained an object detection model designed to classify traffic lights into three states:
                                green, yellow, and red. Evaluation metrics such as precision and recall were used to 
                                guide tuning and model improvements.
                            </div>
                            <div className="self-start text-xl sm:text-2xl  lg:text-3xl">
                                Results & Lessons Learned
                            </div>
                            <div className="self-start text-base sm:text-lg  sm:px-5 lg:text-xl text-[#D1D5DB]">
                                The final model achieved roughly <span className="text-[#A78BFA]"> 80% accuracy </span> in real-time detection across all three
                                classes, demonstrating strong potential for integration into larger intelligent transportation
                                systems. This project gave me valuable experience in data annotation, training and evaluating
                                machine learning models, and collaborating effectively within a small AI-focused team.
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}