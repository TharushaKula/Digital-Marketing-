import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Clock, Info } from "lucide-react";

export default function Heritage() {
    return (
        <div>
            <HeroSection
                title="Sacred Heritage"
                subtitle="The Spiritual Soul of Kandy"
                imageSrc="/images/heritage-hero.png"
                imageAlt="Temple of the Sacred Tooth Relic Details"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                            Sri Dalada Maligawa
                        </h2>
                        <p className="text-lg text-stone-700 leading-relaxed mb-6">
                            The Temple of the Sacred Tooth Relic is the spiritual soul of Kandy, housing the sacred left canine tooth of Lord Buddha. This hallowed complex is a beacon of Buddhist faith, drawing thousands of devotees and pilgrims from around the world.
                        </p>
                        <p className="text-lg text-stone-700 leading-relaxed mb-8">
                            Visitors are invited to witness the daily <em>Pooja</em> rituals, where the air is filled with rhythmic drumming and the scent of fresh lotus flowers.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                Daily Pooja Rituals
                            </h3>
                            <ul className="space-y-2 text-amber-900 font-medium">
                                <li>🌅 05:30 AM</li>
                                <li>☀️ 09:30 AM</li>
                                <li>🌇 06:30 PM</li>
                            </ul>
                        </div>

                        <div className="flex items-start gap-3 text-stone-600 bg-stone-200 p-4 rounded-lg">
                            <Info className="h-6 w-6 shrink-0 mt-1" />
                            <p className="text-sm">
                                <strong>Visitor Etiquette:</strong> Please dress modestly (covering shoulders and knees) and remove footwear before entering the temple complex.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/heritage-hero.png" // Reusing hero for now, could act as a 'detail' shot
                                alt="Intricate Wood Carvings"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <span className="text-white font-serif text-xl">Intricate Wood Carvings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
