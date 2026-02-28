import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Projects({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-16 px-8 text-center" style={{ animationDelay: '0.2s' }}>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />
            <Link
                to="/"
                className="inline-block underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair mb-8 mt-16"
            >
                &larr; back
            </Link>

            <h1 className="text-[3rem] font-bold m-0 mb-4 leading-tight font-family-playfair">
                projects
            </h1>

            <p className="text-[1.1rem] opacity-70 italic font-family-playfair">
                nothing here yet.
            </p>
        </div>
    );
}
