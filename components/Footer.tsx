import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif tracking-widest uppercase mb-4">Kandy</h3>
                        <p className="text-gray-400 max-w-sm">
                            Discover the sacred hill capital of Sri Lanka, a UNESCO World Heritage city blending ancient tradition with natural splendor.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/heritage" className="text-gray-400 hover:text-white transition-colors">Heritage</Link></li>
                            <li><Link href="/nature" className="text-gray-400 hover:text-white transition-colors">Nature</Link></li>
                            <li><Link href="/culture" className="text-gray-400 hover:text-white transition-colors">Culture</Link></li>
                            <li><Link href="/accommodation" className="text-gray-400 hover:text-white transition-colors">Stay</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Kandy Tourism. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
