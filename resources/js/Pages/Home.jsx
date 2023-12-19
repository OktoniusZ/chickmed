import { useEffect, useState } from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Home() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Head title="Home" />
            <nav className={`p-4 bg-white text-black text-lg ${hasScrolled ? 'shadow-md' : ''} fixed w-full z-10 transition-all duration-300`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="img/Logo.svg" alt="Logo" className="h-16 w-16 mr-2" />
                    </div>

                    {/* Navigation Items */}
                    <div className="flex items-center space-x-10">
                        <Link href="/" className="text-orange-500 font-semibold">Home</Link>
                        <Link href="/about">Tentang Kami</Link>
                        <Link href="/services">Service</Link>
                        <Link href="/contact">Artikel</Link>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto p-6 pt-40 text-center">
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-white">Hello World</h1>
                        {/* Add other content for the left column */}
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Add content for the right column */}
                    </div>
                </div>
            </div>
        </>
    );
}
