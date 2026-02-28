export default function Writing({ onBack }) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full text-center fade-in" style={{ animationDelay: '0.2s' }}>

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center">
                my writing
            </h1>

            <button
                onClick={onBack}
                className="fixed top-14 left-1/4 underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer bg-transparent border-none p-0 text-current font-family-playfair"
            >
                &larr; back
            </button>

            <p className="text-[1.1rem] opacity-70 italic m-0">
                nothing here yet.
            </p>
        </div>
    );
}
