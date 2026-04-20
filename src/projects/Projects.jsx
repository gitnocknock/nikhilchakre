import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Projects({ isDark, setIsDark }) {
    const projects = [
        {
            title: "buzzbuzz",
            tech: "react, typescript, python, django, postgresql",
            image: `${import.meta.env.BASE_URL}assets/buzzbuzz.png`,
            bullets: [
                "made a campus wide map that shows clubs/events that are going on.",
                "used selenium to scrape the events and clubs and used position stack to plot them on a map."
            ]
        },
        {
            title: "airl chess agent",
            tech: "python, machine learning",
            image: `${import.meta.env.BASE_URL}assets/airl.jpg`,
            bullets: [
                "adversarial inverse reinforcement learning that uses your chess games to play games like the user.",
                "used cnn's and behavioral pre-training to ensure that the agent follows similar techniques to users games."
            ]
        },
        {
            title: "flight guard ai",
            tech: "react, typescript, python, next.js, convex",
            image: `${import.meta.env.BASE_URL}assets/flightguard.png`,
            bullets: [
                "used fetch.ai to find flights and use AeroDataBox to find cheap flights.",
                "used convex for real time syncing."
            ]
        },
        {
            title: "techdrop",
            tech: "react, typescript, spring boot, postgresql, docker",
            image: `${import.meta.env.BASE_URL}assets/techdrop.png`,
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
                    
                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Project Idea
                    </p>
                    <div className="space-y-4 text-[1.1rem] leading-relaxed mb-8">
                        <p>
                            My Discovery Project is an interactive Python application using a webcam and Google's MediaPipe
                            to detect human hand gestures in real time. It allows users to play rock, paper, scissors
                            against the computer. The program maps hand joints and determines the gesture while
                            the computer generates a random move. The winner is then evaluated and displayed on screen.
                        </p>
                    </div>

                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Project Progress
                    </p>
                    <div className="space-y-4 text-[1.1rem] leading-relaxed mb-8">
                        <ul className="list-none opacity-80 space-y-4 m-0 p-0">
                            <li>
                                <span className="italic font-semibold">Feb 17–24: Research and setup</span>
                                <div className="mt-1"> Downloaded dependencies and set up the project structure. Read through the MediaPipe documentation to understand the API. Ran initial tests to verify webcam input was working correctly.
                                </div>
                            </li>
                            <li>
                                <span className="italic font-semibold">Feb 25 – Mar 10: Hand detection</span>
                                <div className="mt-1 ">
                                    Got the hand landmark detection working in real time, 
                                    where 21 key points on the hand are tracked and drawn on screen. 
                                    Ran into issues with detection accuracy in low lighting but adjusted the confidence threshold to improve it.</div>
                            </li>
                            <li>
                                <span className="italic font-semibold">Mar 11–24: Gesture classification</span>
                                <div className="mt-1 ">Built logic to classify hand gestures as rock, paper, 
                                    or scissors by checking the position and curl of each finger using the landmark coordinates. 
                                    Got the three gestures recognizing correctly under good lighting conditions.</div>
                            </li>
                            <li>
                                <span className="italic font-semibold">Mar 25 – Apr 7: Game logic</span>
                                <div className="mt-1">Added win/loss logic and built random generator to make the computer throw rock/paper/scissors.
                                     Displayed the result on screen after each round with a countdown timer before each match. Also tried to make the UI more appealing.</div>
                            </li>
                            <li>
                                <span className="italic font-semibold">Apr 8–21: Testing and ePortfolio</span>
                                <div className="mt-1 ">Worked on fixing up bugs on the win and loss since it would sometimes incorrectly give out the wrong user who won.</div>
                            </li>
                            <li>
                                <span className="italic font-semibold">Apr 22: Showcase prep</span>
                                <div className="mt-1">Recorded demo video and cleaned up the code base.</div>
                            </li>
                        </ul>
                    </div>

                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Successes and Failures
                    </p>
                    <div className="space-y-4 text-[1.1rem] leading-relaxed mb-8">
                        <p>
                            One challenge was detection accuracy in low lighting, which I fixed by adjusting the confidence threshold. Another issue was the win/loss logic returning incorrect results, which I fixed by rewriting the comparison logic to correctly handle all three matchup combinations.
                        </p>
                    </div>

                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Skills Gained
                    </p>
                    <div className="space-y-4 text-[1.1rem] leading-relaxed mb-8">
                        <p>
                            Some skills I gained were getting a more in-depth understanding of Python and
                            having a deeper understanding of its documentation. The two other skills I learned were
                            OpenCV and MediaPipe for webcam feed and displaying graphics on screen and for hand tracking.
                            A ECE skills are computer vision since the video uses a live video and extracts meaingful data.
                        </p>
                    </div>

                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Final Thoughts
                    </p>
                    <div className="space-y-4 text-[1.1rem] leading-relaxed mb-8">
                        <p>
                            This project was a great introduction to computer vision for me since I never really had any experince with it. Going into it I had some experience with machine learning libraries, as I already work on a machine learning project, but I had never worked with gesture detection and doing this project gave me a better understanding of how computers understand visual data. It has also made me consider thread Signal & Information Processing Thread since it has to do with Machine Learning. If I were to continue the project, I would improve the gesture accuracy in different lighting conditions and potentially add multiplayer support so two people could play against each other using both hands.
                        </p>
                    </div>

                    <p className='leading-relaxed font-bold text-[1.9rem]'>
                            Demo Video
                    </p>
                    <div className="w-full mb-8">
                        <video 
                            className="w-full rounded shadow-md border border-opacity-20 border-current bg-black" 
                            controls
                        >
                            <source src={`${import.meta.env.BASE_URL}assets/ECE1100Video.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
