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

            <div className="navbar bg-base-100 max-w-screen-2xl mx-auto flex justify-between p-6 lg:py-8 mb-12">
                <div className="flex items-center">
                    <img
                        src="img/Logo.svg"
                        alt="Logo"
                        className="h-16 w-16 mr-2"
                    />
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link
                                    href="/"
                                    className={`text-lg text-gray-700 ${
                                        isRouteActive("/")
                                            ? "text-orange-500 font-semibold"
                                            : "hover:text-orange-500"
                                    }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={`text-lg text-gray-700 ${
                                        isRouteActive("/about")
                                            ? "text-orange-500 font-semibold"
                                            : "hover:text-orange-500"
                                    }`}
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className={`text-lg text-gray-700 ${
                                        isRouteActive("/services")
                                            ? "text-orange-500 font-semibold"
                                            : "hover:text-orange-500"
                                    }`}
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/articles"
                                    className={`text-lg text-gray-700 ${
                                        isRouteActive("/articles")
                                            ? "text-orange-500 font-semibold"
                                            : "hover:text-orange-500"
                                    }`}
                                >
                                    Artikel
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                href="/"
                                className={`text-lg text-gray-700 ${
                                    isRouteActive("/")
                                        ? "text-orange-500 font-semibold"
                                        : "hover:text-orange-500"
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`text-lg text-gray-700 ${
                                    isRouteActive("/about")
                                        ? "text-orange-500 font-semibold"
                                        : "hover:text-orange-500"
                                }`}
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className={`text-lg text-gray-700 ${
                                    isRouteActive("/services")
                                        ? "text-orange-500 font-semibold"
                                        : "hover:text-orange-500"
                                }`}
                            >
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/articles"
                                className={`text-lg text-gray-700 ${
                                    isRouteActive("/articles")
                                        ? "text-orange-500 font-semibold"
                                        : "hover:text-orange-500"
                                }`}
                            >
                                Artikel
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* End Navigation Bar */}
        </>
    );
}
