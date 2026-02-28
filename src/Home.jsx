import { Link } from 'react-router-dom';

export default function Home({ isDark, setIsDark }) {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <button
                onClick={() => setIsDark(!isDark)}
                className="absolute top-8 right-8 fade-in flex items-center justify-center w-10 h-10 cursor-pointer overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
                style={{ animationDelay: '0.1s' }}
                aria-label="Toggle Theme"
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </div>
            </button>

            <div>
                <h1
                    className="text-[2.4rem] font-normal m-0 mb-2 tracking-[-0.01em] fade-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    hi! my name is nikhil chakre
                </h1>
                <p
                    className="text-[1.1rem] m-0 mb-6 fade-in"
                    style={{ animationDelay: '0.4s' }}
                >
                    <i className="italic">i'm studying computer engineering at georgia tech.</i>
                </p>

                <nav
                    className="flex justify-center gap-5 mb-4 fade-in"
                    style={{ animationDelay: '0.6s' }}
                >
                    <Link to="/writing" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 font-family-playfair">writing</Link>
                    <Link to="/projects" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">projects</Link>
                    <a href="https://www.linkedin.com/in/nikhil-chakre-a58389197" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">linkedIn</a>
                    <a href="https://github.com/gitnocknock" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">github</a>
                </nav>

                <div
                    className="fade-in"
                    style={{ animationDelay: '0.8s' }}
                >
                    <Link to="/life" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">life</Link>
                </div>
            </div>
        </>
    );
}
