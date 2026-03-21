import { Link } from 'react-router-dom';
import richiPhoto from '../assets/richiInDaBox.JPG';
import img0996 from '../assets/IMG_0996.jpg';
import sunKissed from '../assets/richiMogging.webp';

const W = '20rem';
const H = '11rem';

function PhotoCard({ src, alt, caption, rotate = false }) {
    return (
        <div className="flex flex-col items-center">
            <div className="overflow-hidden" style={{ width: W, height: H }}>
                {rotate ? (
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            transform: 'rotate(-90deg)',
                            width: H,
                            height: W,
                            transformOrigin: 'center center',
                            position: 'relative',
                            left: '4.5rem',
                            top: '-4.5rem',
                        }}
                        className="object-cover"
                    />
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        style={{ width: '100%', height: '100%' }}
                        className="object-cover"
                    />
                )}
            </div>
            {caption && (
                <div className="mt-3 flex justify-center w-full">
                    <p style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl text-center">
                        {caption}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Life({ isDark, setIsDark }) {
    return (
        <div className="relative min-h-screen w-full p-8 md:p-12 overflow-y-auto">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
            `}</style>

            <Link
                to="/"
                className="absolute top-8 left-8 underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 fade-in"
                style={{ animationDelay: '0.1s' }}
            >
                &larr; back
            </Link>

            <button
                onClick={() => setIsDark(!isDark)}
                className="absolute top-1 right-3 fade-in flex items-center justify-center w-11 h-11 cursor-pointer overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
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

            <div className="absolute top-15 left-8 md:top-24 md:left-8 z-10 fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl font-normal tracking-[-0.01em]">
                    miscellaneous.
                </h1>
            </div>

            <div className="pt-30 md:pt-35">
                <div className="grid grid-cols-3 gap-x-10 gap-y-14 w-fit">
                    <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                        <PhotoCard src={richiPhoto} alt="Richi the cat" caption="my goat, richi" rotate />
                    </div>
                    <div className="fade-in" style={{ animationDelay: '0.6s' }}>
                        <PhotoCard src={img0996} alt="photo" caption="ipad kid ahh cat" />
                    </div>
                    <div className="fade-in" style={{ animationDelay: '0.8s' }}>
                        <PhotoCard src={sunKissed} alt="photo" caption="what is bro looking at??" />
                    </div>
                </div>
            </div>
        </div>
    );
}
