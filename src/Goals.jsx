import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Goals({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-24 px-8" style={{ animationDelay: '0.2s' }}>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center py-4">
                career goals
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-4 md:left-[20%] underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; home
            </Link>

            <div className="w-full max-w-3xl text-left mt-32 space-y-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-opacity-20 border-current pb-2">Long-Term Vision</h2>
                    <p className="text-[1.1rem] leading-relaxed">
                        My career goal is to become a Solutions Architect and help people. Specifically, I aim to focus on developing scalable web architectures,
                        distributed microservices, and AI-driven systems that can autonomously optimize processes.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-opacity-20 border-current pb-2">Goals moving forward</h2>
                    <p className="text-[1.1rem] leading-relaxed">
                        To realize this long-term vision, I am focused on gaining hands-on industry experience through software engineering internships
                        over the next few years. As an incoming Software Engineer Intern at the Georgia Tech Research Institute, my immediate priority
                        is to master enterprise CI/CD workflows, Docker containerization, and AWS deployments. Following this, I plan to
                        learn new in-demand technical skills and secure
                        internships at fast-paced tech companies where I can build cool systems that help everyday people. Eventually I want to be able to land an offer at a Tech company that is both exciting and helps people.
                    </p>
                </section>

            </div>
        </div>
    );
}
