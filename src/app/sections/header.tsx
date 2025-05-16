import Navbar from '../components/navbar';

export default function Header() {
    return (
        <header className="grid grid-rows-[20rem] bg-[url('/halo4-header3.png')] bg-center bg-cover bg-no-repeat w-screen h-[20rem] sm:h-[30rem] md:h-[50rem] lg:h-screen xl:h-screen 2xl:h-screen mb-20 relative shadow-inner after:absolute after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-gradient-to-b after:from-transparent after:via-black/50 after:to-black">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-10">
                <Navbar />
            </div>
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        </header>
    );
}