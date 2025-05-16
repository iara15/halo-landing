import Link from "next/link"

export default function Button({ title, bgColor, textColor }: { title: string, bgColor: string, textColor: string }) {
    return (
        <Link href="/">
            <div className="button-border transition-all duration-200 ease-in-out p-1" style={{ border: `0.5px solid var(--${bgColor})` }}>
                <div className="button transition-all duration-200 ease-in-out py-2 px-10 bg-dynamic text-dynamic" style={{ backgroundColor: `var(--${bgColor})`, color: `var(--${textColor})` }}>
                    <h5>{title}</h5>
                </div>
            </div>
        </Link>
    );
}