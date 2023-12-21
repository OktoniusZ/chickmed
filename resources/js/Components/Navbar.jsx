import { useEffect, useState } from "react";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Navbar() {
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

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { url } = usePage();

    const isRouteActive = (route) => {
        // Check if the current route matches the given route
        return url === route;
    };
    return (
        <>
            {/* Starts Navigation Bar */}
            <Head title="Home" />
            <nav
                className={`p-4 bg-white text-black text-lg ${hasScrolled ? "shadow-md" : ""
                    } fixed w-full z-10 transition-all duration-300`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="img/Logo.svg"
                            alt="Logo"
                            className="h-16 w-16 mr-2"
                        />
                    </div>

                    {/* Navigation Items */}
                    <div className="flex items-center space-x-10">
                        <Link
                            href="/"
                            className={`${isRouteActive("/") ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`${isRouteActive("/about") ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                                }`}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/services"
                            className={`${isRouteActive("/services") ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                                }`}
                        >
                            Service
                        </Link>
                        <Link
                            href="/articles"
                            className={`${isRouteActive("/articles") ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                                }`}
                        >
                            Artikel
                        </Link>
                    </div>
                </div>
            </nav >
        </>
    );
}
