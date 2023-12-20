import playStoreIcon from "../../images/pstore.png";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Article from "@/Components/Article";

import HomeHero from "../../images/hero-home.png";
import HeroSolution from "../../images/hero-solution.png";

export default function Home() {
    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>

            {/* Start Landing Page */}
            <div className="max-w-screen-2xl flex flex-col my-24 mt-6 lg:my-24 lg:mb-48 p-6 text-center lg:text-left lg:flex-row justify-between items-center mx-auto">
                <div className="flex flex-col justify-center items-center lg:items-start  mb-8 lg:mb-0 lg:w-1/2">
                    <h1 className="font-bold text-5xl md:text-6xl mb-8">
                        <span className="text-orange-600">ChickMed</span> -
                        Poultry <br className="hidden md:block" /> Health
                        Monitor
                    </h1>
                    <p className="mb-8 max-w-sm">
                        Welcome to ChickMed, the revolutionary app for poultry
                        health monitoring. Let's make your chickens healthier
                        and happier
                    </p>
                    <button className="btn bg-orange-600 text-white hover:bg-orange-400">
                        Get Started
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={HomeHero}
                        alt="Chicken"
                        className="object-cover"
                    />
                </div>
            </div>
            {/* End Landing Page */}

            {/* Start Solusi Page */}
            <div className="flex justify-center flex-col lg:flex-row-reverse lg:justify-between items-center p-6 text-center lg:text-right my-48 max-w-screen-2xl mx-auto">
                <div className="lg:w-1/2">
                    <h1 className="font-bold text-4xl md:text-6xl mb-8 max-w-xl">
                        Solusi Pintar Untuk{" "}
                        <span className="text-orange-600">Kesehatan</span> Ayam{" "}
                        <br /> Anda
                    </h1>
                    <p className="mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                        Dengan ChickMed, Anda memiliki alat yang andal untuk
                        merawat ayam peliharaan dengan lebih baik.
                    </p>
                    <p className="mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                        Kami memadukan kecerdasan buatan dengan gambar kotoran
                        ayam untuk mendeteksi penyakit dengan cepat dan akurat.
                        Lindungi kawanan ayam Anda dengan aplikasi canggih ini!
                    </p>
                </div>
                <div className="lg:w-1/2 lg:ml-[-100px]">
                    <img
                        src={HeroSolution}
                        alt="Chick"
                        className="object-cover"
                    />
                </div>
            </div>
            {/* End Solusi Page */}

            {/* Start Artikel Page  */}
            <div className="max-w-screen-2xl mx-auto p-6">
                <div className="mb-8 text-center">
                    <h1 className="font-bold text-6xl mb-8 text-orange-600">
                        Artikel
                    </h1>
                    <p className="max-w-2xl text-center mx-auto">
                        ChickMed menyediakan beberapa artikel seputar ternak
                        ayam yang bisa bebas dibaca oleh semua pengguna.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>

                <p className="text-center text-orange-600 underline font-bold mt-12">
                    <a href="#">See more article</a>
                </p>
            </div>
            {/* End Artikel Page  */}

            {/* Start Banner Page */}
            <div class="bg-orange-500 w-full mt-48 h-[350px] bg-hero-about bg-center relative">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
                <div className="relative z-10 max-w-screen-2xl mx-auto p-6 text-center lg:text-left flex flex-col justify-center items-center lg:justify-start lg:items-start pt-24">
                    <h1 className="text-white font-bold text-5xl mb-8">
                        Get Closer With Us
                    </h1>
                    <img
                        src={playStoreIcon}
                        className="h-16 lg:h-24"
                        alt="Google Play Store"
                    />
                </div>
            </div>
            {/* End Banner Page */}

            <hr className="text-orange-600 border-orange-600" />

            {/* Footer Component */}
            <Footer></Footer>
        </>
    );
}
``;
