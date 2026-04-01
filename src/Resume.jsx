import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Resume({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-24 px-8" style={{ animationDelay: '0.2s' }}>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center py-4">
                resume
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-4 md:left-[20%] underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; home
            </Link>

            <div className="w-full max-w-3xl text-left mt-32 space-y-10 mb-12">
                <a 
                    href={`${import.meta.env.BASE_URL}Nikhil_Chakre_Resume.pdf`} 
                    download
                    className="inline-block border border-current px-6 py-2 rounded mb-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                    Download PDF Resume
                </a>

                {/* Resume PDF Embed */}
                <div className="w-full h-[85vh] border border-opacity-20 border-current shadow-md overflow-hidden rounded-md bg-white">
                    <object 
                        data={`${import.meta.env.BASE_URL}Nikhil_Chakre_Resume.pdf`} 
                        type="application/pdf" 
                        className="w-full h-full"
                    >
                        <div className="flex flex-col items-center justify-center p-12 text-center h-full text-black">
                            <p className="mb-4 text-xl font-bold">Your browser does not cleanly support inline PDFs.</p>
                            <p className="mb-6 opacity-80">No worries, you can download it directly instead!</p>
                            <a 
                                href={`${import.meta.env.BASE_URL}Nikhil_Chakre_Resume.pdf`} 
                                download
                                className="inline-block border border-black px-6 py-3 rounded hover:bg-black/10 transition-colors font-bold"
                            >
                                Download Resume
                            </a>
                        </div>
                    </object>
                </div>
            </div>
        </div>
    );
}
