import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Bed, Star, Coffee, Wifi, MapPin } from "lucide-react";

export default function Accommodation() {
    return (
        <div>
            <HeroSection
                title="Stay & Cost"
                subtitle="From Colonial Charm to Modern Luxury"
                imageSrc="/images/accommodation-hero.png"
                imageAlt="Split screen of cozy room and luxury pool"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <p className="text-center text-xl text-stone-600 mb-16 max-w-3xl mx-auto">
                    From colonial-era landmarks to modern luxury perched in the hills, Kandy offers a stay for every traveler.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Budget Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-500">
                        <div className="bg-blue-50 p-6 border-b border-blue-100">
                            <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center justify-between">
                                Budget & Mid-Range
                                <span className="text-sm font-sans bg-blue-200 text-blue-800 px-3 py-1 rounded-full">$10 - $90 / night</span>
                            </h2>
                            <p className="text-stone-500 mt-2">Perfect for backpackers and social travelers.</p>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Budget Item */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                    <Bed className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-stone-800">Hostels & Guesthouses</h3>
                                    <p className="text-stone-600 text-sm mb-2">Social hubs like <strong>Kandy City Stay</strong> or <strong>Nature Lovers' Hostel</strong>.</p>
                                    <p className="text-blue-600 font-bold">$10 – $30</p>
                                </div>
                            </div>

                            <div className="border-t border-stone-100"></div>

                            {/* Mid-Range Item */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-stone-800">Comfort Hotels</h3>
                                    <p className="text-stone-600 text-sm mb-2">Reliable comfort at <strong>Cassendra Kandy</strong> or <strong>Galaxy City Hotel</strong>.</p>
                                    <p className="text-blue-600 font-bold">$40 – $90</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Luxury Section */}
                    <div className="bg-stone-900 rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-500 text-white">
                        <div className="bg-stone-800 p-6 border-b border-stone-700">
                            <h2 className="text-2xl font-serif font-bold flex items-center justify-between">
                                Luxury & Boutique
                                <span className="text-sm font-sans bg-amber-900/50 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">$120+ / night</span>
                            </h2>
                            <p className="text-stone-400 mt-2">Indulge in panoramic views and historic charm.</p>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Luxury Item */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-amber-900/30 p-2 rounded-lg text-amber-500">
                                    <Star className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-amber-100">High-End Retreats</h3>
                                    <p className="text-stone-400 text-sm mb-2">Experience <strong className="text-white">The Golden Crown</strong> or <strong className="text-white">Fox Kandy</strong>.</p>
                                    <div className="flex gap-3 mt-2 text-xs text-stone-500 uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Coffee className="h-3 w-3" /> Breakfast</span>
                                        <span className="flex items-center gap-1"><Wifi className="h-3 w-3" /> Free Wi-Fi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-stone-800"></div>

                            {/* User Requested Specific Mention */}
                            <div className="relative h-40 rounded-lg overflow-hidden border border-stone-700">
                                <Image
                                    src="/images/accommodation-hero.png" // Reusing split image for context
                                    alt="Luxury Pool"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                                    <h3 className="font-bold text-lg text-white">Queen’s Hotel</h3>
                                    <p className="text-stone-300 text-sm">Historic colonial charm in the heart of the city.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
