import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Calendar, Drum, Flame } from "lucide-react";

export default function Culture() {
    return (
        <div>
            <HeroSection
                title="Living Culture"
                subtitle="Rhythm, Fire, and Devotion"
                imageSrc="/images/culture-hero.png"
                imageAlt="Kandy Esala Perahera Procession"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-900 text-stone-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="order-2 md:order-1 relative h-[500px] w-full bg-stone-800 rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/culture-hero.png"
                            alt="Fire Dancers"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
                            <p className="text-amber-400 font-serif italic text-lg">"The thunderous energy of traditional drummers."</p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-4xl font-serif font-bold text-amber-500 mb-6">
                            Esala Perahera Festival
                        </h2>
                        <p className="text-lg text-stone-300 leading-relaxed">
                            Kandy’s culture is most vibrant during the annual Esala Perahera festival, held every August. It is one of the oldest and grandest of all Buddhist festivals in Sri Lanka, featuring dancers, jugglers, musicians, fire-breathers, and lavishly decorated elephants.
                        </p>

                        <div className="bg-stone-800 border border-stone-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                2026 Procession Dates
                            </h3>
                            <p className="text-stone-300 font-medium">
                                Grand Randoli Processions: <span className="text-white">August 23rd – 27th</span>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                <Drum className="h-5 w-5" />
                                Cultural Experience
                            </h3>
                            <ul className="space-y-4 text-stone-300">
                                <li className="flex items-start gap-3">
                                    <Flame className="h-5 w-5 text-orange-500 mt-1" />
                                    <div>
                                        <strong className="text-white">Fire Dancers:</strong> Witness acrobatic leaps and spinning fire torches that light up the night.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Drum className="h-5 w-5 text-orange-500 mt-1" />
                                    <div>
                                        <strong className="text-white">Traditional Drummers:</strong> Be mesmerized by the rhythmic beat of the Geta Bera.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
