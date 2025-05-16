import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between min-w-screen p-5">
            <Link href="/" className="flex items-center">
                <Image
                    src="/halo-company-logo.png"
                    alt="Halo company logo"
                    width={170}
                    height={100}/>
            </Link>
            <div className="text-white">
                <ul className="flex gap-10 hidden lg:flex xl:flex 2xl:flex">
                    <li className="border-b-4 border-solid border-transparent p-[0.5rem] cursor-pointer hover:border-b-4 hover:border-[var(--green-opacity)] hover:font-semibold hover:shadow-[0_6px_5px_-3.3px_var(--green-shadow)] transition-all duration-200 ease-in-out">STORY</li>
                    <li className="border-b-4 border-solid border-transparent p-[0.5rem] cursor-pointer hover:border-b-4 hover:border-[var(--green-opacity)] hover:font-semibold hover:shadow-[0_6px_5px_-3.3px_var(--green-shadow)] transition-all duration-200 ease-in-out">COMMUNITY</li>
                    <li className="border-b-4 border-solid border-transparent p-[0.5rem] cursor-pointer hover:border-b-4 hover:border-[var(--green-opacity)] hover:font-semibold hover:shadow-[0_6px_5px_-3.3px_var(--green-shadow)] transition-all duration-200 ease-in-out">SERIES</li>
                    <li className="border-b-4 border-solid border-transparent p-[0.5rem] cursor-pointer hover:border-b-4 hover:border-[var(--green-opacity)] hover:font-semibold hover:shadow-[0_6px_5px_-3.3px_var(--green-shadow)] transition-all duration-200 ease-in-out">SUPPORT</li>
                </ul>
            </div>
            <Button title="GET DEMO" bgColor="green-opacity" textColor="white" />
        </div>
    );
}
