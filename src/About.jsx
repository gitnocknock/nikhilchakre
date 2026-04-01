import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function About({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-24 px-8" style={{ animationDelay: '0.2s' }}>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center py-4">
                about me
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-4 md:left-[20%] underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; home
            </Link>

            <div className="w-full max-w-2xl text-left mt-32 space-y-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                <div className="flex justify-center w-full mb-10">
                    <img src={`${import.meta.env.BASE_URL}assets/profile.jpg`} alt="Nikhil Chakre headshot" className="w-48 md:w-56 rounded-lg shadow-xl object-cover opacity-95" />
                </div>

                <div className="space-y-4 text-[1.1rem] leading-relaxed">
                    <p>
                        Hello! I’m Nikhil Chakre, a Computer Engineering student at the Georgia Institute of Technology.
                        I am passionate about infrastructure of websites, AI and its applications, and helping people.
                    </p>
                    <p>
                        Growing up, I was always captivated by building things from scratch. I always loved making things, mostly art or building using legos and that longing for building has stayed with me since!
                        Studying at Georgia Tech has only fueled this passion, surrounding me with
                        brilliant thinkers and challenging me to dive deep into fields.
                    </p>
                </div>

                <div className="space-y-4 text-[1.1rem] leading-relaxed">
                    <p>
                        My vision for this ePortfolio is to serve as a living showcase of my growth, technical milestones, and the values I bring as an engineer.
                        It is a professional networking tool allowing me to connect with others who share a passion for cool things!
                    </p>
                    <p>
                        Beyond my coursework, I'm involved in Engineers Without Borders, specifically with Team Nepal. We collaborate with government
                        stakeholders to design and deliver clean water infrastructure for rural residents. I enjoy helping people and that is also a big part of who I am!
                    </p>
                    <p>
                        Outside of school I love playing chess and hanging out with my friends and family! I also love travelling and have a longing to use my talents to help people. All of these qualties not only represent me as a person, but also,
                        represent me as a capable engineer ready to understand and help people.
                    </p>
                </div>

            </div>
        </div>
    );
}
