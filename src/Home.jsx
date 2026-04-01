import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Home({ isDark, setIsDark }) {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="absolute top-8 right-8 z-10" />

            <div className="max-w-2xl mt-12 flex flex-col items-center">
                <h1
                    className="text-[3rem] font-bold m-0 mb-6 tracking-tight fade-in font-family-playfair"
                    style={{ animationDelay: '0.2s' }}
                >
                    nikhil chakre
                </h1>

                <p
                    className="text-[1.2rem] m-0 mb-10 fade-in leading-relaxed text-center"
                    style={{ animationDelay: '0.4s', fontFamily: "'Times New Roman', Times, serif" }}
                >
                    Hello and welcome to my website! This portfolio showcases my skills and abilities as a Computer Engineering student here at Georgia Tech!
                    I am super passionate about DevOps, AI, and Infrastructure! Please feel free to look around my website!
                </p>

                <nav
                    className="flex flex-wrap justify-center gap-6 mb-8 fade-in"
                    style={{ animationDelay: '0.6s' }}
                >
                    <Link to="/about" className="underline underline-offset-4 decoration-1 text-[1.2rem] transition-opacity duration-200 hover:opacity-50">about me</Link>
                    <Link to="/resume" className="underline underline-offset-4 decoration-1 text-[1.2rem] transition-opacity duration-200 hover:opacity-50">resume</Link>
                    <Link to="/goals" className="underline underline-offset-4 decoration-1 text-[1.2rem] transition-opacity duration-200 hover:opacity-50">career goals</Link>
                    <Link to="/projects" className="underline underline-offset-4 decoration-1 text-[1.2rem] transition-opacity duration-200 hover:opacity-50">projects</Link>
                </nav>

                <div
                    className="flex justify-center gap-6 fade-in"
                    style={{ animationDelay: '0.8s', fontFamily: "'Times New Roman', Times, serif" }}
                >
                    <a href="https://www.linkedin.com/in/nikhil-chakre-a58389197" className="text-[1.1rem] italic opacity-70 transition-opacity duration-200 hover:opacity-100">LinkedIn</a>
                    <a href="https://github.com/gitnocknock" className="text-[1.1rem] italic opacity-70 transition-opacity duration-200 hover:opacity-100">GitHub</a>
                </div>
            </div>
        </>
    );
}
