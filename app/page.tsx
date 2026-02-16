import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Train, Bus } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="The Heart of the Highlands"
        subtitle="Welcome to Kandy, the sacred hill capital of Sri Lanka."
        imageSrc="/images/landing-hero.png"
        imageAlt="Kandy Lake at Sunset with Temple of the Tooth"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
            A Sanctuary of Tradition & Splendor
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Nestled amidst rolling tea plantations and mist-covered mountains, this UNESCO World Heritage city is a sanctuary of ancient tradition and natural splendor. Whether you are seeking spiritual peace at the Temple of the Tooth or a stroll along the tranquil Kandy Lake, our city offers an enchanting blend of warm hospitality and rich history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/landing-hero.png"
              alt="Kandy City View"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
              <span className="bg-amber-100 p-2 rounded-full text-amber-800">📍</span>
              Travel Connections
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mt-1">
                  <Train className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-stone-800">Scenic Rail Journey</h4>
                  <p className="text-stone-600">Inter-city express from Colombo.</p>
                  <div className="mt-2 text-sm text-stone-500 flex gap-4">
                    <span>⏱ 2.5–3.5 hours</span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-stone-700">
                    Costs: 2nd Class (~LKR 500) | 1st Class (~LKR 7,000)
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-100"></div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700 mt-1">
                  <Bus className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-stone-800">Direct A/C Bus</h4>
                  <p className="text-stone-600">From Colombo Pettah station.</p>
                  <div className="mt-2 text-sm text-stone-500 flex gap-4">
                    <span>⏱ ~4 hours</span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-stone-700">
                    Cost: ~LKR 3,300
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
