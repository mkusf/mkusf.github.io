export default function AboutMe({ id }) {
    return(
        <div id={id} className="mt-10 py-12 sm:py-16 px-4 sm:px-8" >
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">About Me</h3>
                <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed">
                    Welcome to my website! I am a Computing Science student at Simon Fraser University (graduating Fall 2027) with a passion for building clean, reliable, and impactful software.
                </p>
                <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed mt-4">
                    I specialize in full-stack development and have hands-on experience with <span className="text-[#A78BFA]">React, Tailwind CSS, Java, C, C++, Python,</span> and modern web technologies.
                </p>
                <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed mt-4">
                    Beyond coursework, I thrive in team environments where Agile practices like Scrum keep development structured and efficient. I enjoy hackathons for the challenge and collaboration, and I actively sharpen my skills through cybersecurity challenges and personal projects.
                </p>
                <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed mt-4">
                    When I'm not coding, you'll likely find me enjoying the outdoors, working out at the gym, or playing my favorite video games.
                </p>
            </div>
        </div>
    );
}