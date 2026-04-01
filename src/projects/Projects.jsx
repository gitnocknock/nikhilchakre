import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Projects({ isDark, setIsDark }) {
    const projects = [
        {
            title: "buzzbuzz",
            tech: "react, typescript, python, django, postgresql",
            image: "/assets/buzzbuzz.png",
            bullets: [
                "made a campus wide map that shows clubs/events that are going on.",
                "used selenium to scrape the events and clubs and used position stack to plot them on a map."
            ]
        },
        {
            title: "airl chess agent",
            tech: "python, machine learning",
            image: "/assets/airl.jpg",
            bullets: [
                "adversarial inverse reinforcement learning that uses your chess games to play games like the user.",
                "used cnn's and behavioral pre-training to ensure that the agent follows similar techniques to users games."
            ]
        },
        {
            title: "flight guard ai",
            tech: "react, typescript, python, next.js, convex",
            image: "/assets/flightguard.png",
            bullets: [
                "used fetch.ai to find flights and use AeroDataBox to find cheap flights.",
                "used convex for real time syncing."
            ]
        },
        {
            title: "techdrop",
            tech: "react, typescript, spring boot, postgresql, docker",
            image: "/assets/techdrop.png",
            bullets: [
                "containerized microservices with docker compose, deploying to aws ec2 across environments.",
                "automated jenkins ci/cd pipeline to build and push updates with zero-downtime deploys."
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-24 px-8" style={{ animationDelay: '0.2s' }}>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center font-family-playfair pt-4">
                technical projects
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-4 md:left-[20%] underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; home
            </Link>

            <div className="w-full max-w-4xl text-left mt-32 space-y-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

                {/* REQUIRED DISCOVERY PROJECT SHOWCASE */}
                <section>
                    <h2 className="text-3xl font-bold mb-2">Discovery Project Showcase: Rock Paper Scissors Game via Hand Gestures</h2>
                    <h3 className="text-lg italic opacity-80 mb-6">Python, OpenCV, Google MediaPipe</h3>

                    <div className="space-y-4 text-[1.1rem] leading-relaxed">
                        <p>
                            My Discovery Project is an interactive Python application using a webcam and Google's MediaPipe
                            to detect human hand gestures in real time. It allows users to play rock, paper, scissors
                            against the computer. The program maps hand joints and determines the gesture while
                            the computer generates a random move. The winner is then evaluated and displayed on screen.
                        </p>

                    </div>
                </section>

                <hr className="border-opacity-20 border-current" />

                {/* OTHER PROJECTS */}
                <h2 className="text-2xl font-bold mb-4">Other Selected Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="space-y-4 flex flex-col">
                            {proj.image && (
                                <img
                                    src={proj.image}
                                    alt={`${proj.title} preview`}
                                    className="w-full h-48 sm:h-56 object-cover rounded shadow-md border border-opacity-20 border-current"
                                />
                            )}
                            <div className="flex-1 flex flex-col">
                                <h2 className="text-[1.3rem] font-bold m-0 leading-tight">
                                    {proj.title}
                                </h2>
                                <h3 className="text-[1rem] italic m-0 mb-3 opacity-80">
                                    {proj.tech}
                                </h3>
                                <ul className="list-disc pl-[1rem] m-0 space-y-1.5 opacity-90 text-[1.05rem]">
                                    {proj.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="leading-snug">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
