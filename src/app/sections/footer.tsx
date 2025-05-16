import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center w-full h-[250px] mt-20 gap-8">
            <div className="flex justify-center w-full">
                <h3>FOLLOW US</h3>
            </div>
            <div className="flex flex-wrap relative justify-center gap-2">
                <div>
                    <Link href={'https://x.com/'}>
                        <Image
                            src={'/x.png'}
                            alt="X"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
                <div>
                    <Link href={'https://instagram.com/'}>
                        <Image
                            src={'/instagram.png'}
                            alt="Instagram"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
                <div>
                    <Link href={'https://youtube.com/'}>
                        <Image
                            src={'/youtube.png'}
                            alt="YouTube"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
                <div>
                    <Link href={'https://discord.com/'}>
                        <Image
                            src={'/discord.png'}
                            alt="Discord"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
                <div>
                    <Link href={'https://facebook.com/'}>
                        <Image
                            src={'/facebook.png'}
                            alt="Facebook"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
                <div>
                    <Link href={'https://twitch.com/'}>
                        <Image
                            src={'/twitch.png'}
                            alt="Twitch"
                            width={50}
                            height={10}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex justify-between align-center w-full p-8">
                <div className="flex align-center">
                    <Image
                        src={'/halo-studios-logo.png'}
                        alt="Halo Studios"
                        width={120}
                        height={50}
                        objectFit="cover"
                    />
                </div>
                <div className="flex align-center">
                    <Image
                        src={'/xbox-game-studios.png'}
                        alt="Xbox Game Studios"
                        width={100}
                        height={50}
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};