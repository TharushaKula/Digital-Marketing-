import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, imageSrc, imageAlt, children }: HeroSectionProps) {
    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl drop-shadow-md mb-8">
                    {subtitle}
                </p>
                {children}
            </div>
        </div>
    );
}
