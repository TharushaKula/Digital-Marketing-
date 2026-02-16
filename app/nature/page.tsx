import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Trees, Flower } from "lucide-react";

export default function Nature() {
    return (
        <div>
            <HeroSection
                title="Lush Biodiversity"
                subtitle="Royal Botanical Gardens, Peradeniya"
                imageSrc="/images/nature-hero.png"
                imageAlt="Royal Botanical Gardens Palm Avenue"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-xl text-stone-600 leading-relaxed font-light">
                        Spanning 147 acres and bordered by the Mahaweli River, the Peradeniya Royal Botanical Gardens date back to the 14th century. A living library of the tropics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-stone-100 hover:shadow-xl transition-shadow">
                        <div className="relative h-64 w-full">
                            <Image
                                src="/images/nature-hero.png"
                                alt="Orchid House"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex-1">
                            <h3 className="text-xl font-bold font-serif text-green-900 mb-3 flex items-center gap-2">
                                <Flower className="h-5 w-5" />
                                The Orchid House
                            </h3>
                            <p className="text-stone-600">
                                World-renowned for its spectacular collection of orchids, displaying a vibrant array of colors and shapes unique to the island.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-stone-100 hover:shadow-xl transition-shadow">
                        <div className="relative h-64 w-full bg-stone-200">
                            {/* Fallback pattern since we're reusing images */}
                            <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                                <Trees className="h-16 w-16 opacity-20" />
                            </div>
                            <Image
                                src="/images/nature-hero.png"
                                alt="Royal Palms"
                                fill
                                className="object-cover opacity-80" // Slight visual diff
                            />
                        </div>
                        <div className="p-6 flex-1">
                            <h3 className="text-xl font-bold font-serif text-green-900 mb-3 flex items-center gap-2">
                                <Trees className="h-5 w-5" />
                                Royal Palm Avenue
                            </h3>
                            <p className="text-stone-600">
                                Walk through towering avenues of Royal Palms that create a majestic natural corridor, a testament to the garden's historic grandeur.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-stone-100 hover:shadow-xl transition-shadow">
                        <div className="p-8 flex flex-col justify-center h-full bg-green-50">
                            <h3 className="text-2xl font-serif font-bold text-green-900 mb-4">
                                The Giant Javan Fig
                            </h3>
                            <p className="text-stone-700 italic mb-6">
                                "A natural cathedral of green."
                            </p>
                            <p className="text-stone-600">
                                Do not miss the giant Javan fig tree, whose sprawling canopy covers a massive area, creating a cool, shaded retreat unlike anywhere else.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
