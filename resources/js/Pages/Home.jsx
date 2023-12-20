import playStoreIcon from "../../images/pstore.png";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Article from "@/Components/Article";

export default function Home() {
    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>

            {/* Start Landing Page */}
            <div className="max-w-screen-2xl flex flex-col my-24 mt-6 lg:my-24 lg:mb-48 p-6 text-center lg:text-left lg:flex-row justify-between items-center mx-auto">
                <div className="flex flex-col justify-center items-center lg:items-start  mb-8 lg:mb-0">
                    <h1 className="font-bold text-6xl mb-8">
                        <span className="text-orange-600">ChickMed</span> -
                        Poultry <br /> Health Monitor
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
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1556316918-880f9e893822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Chicken"
                        className="h-80 w-120 object-cover"
                    />
                </div>
            </div>
            {/* End Landing Page */}

            {/* Start Solusi Page */}
            <div className="flex justify-center flex-col lg:flex-row lg:justify-between items-center p-6 text-center lg:text-left my-48 max-w-screen-2xl mx-auto">
                <div className="">
                    <h1 className="font-bold text-4xl md:text-6xl mb-8 max-w-xl">
                        Solusi Pintar Untuk{" "}
                        <span className="text-orange-600">Kesehatan</span> Ayam{" "}
                        <br /> Anda
                    </h1>
                    <p className="mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
                        Dengan ChickMed, Anda memiliki alat yang andal untuk
                        merawat ayam peliharaan dengan lebih baik.
                    </p>
                    <p className="mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
                        Kami memadukan kecerdasan buatan dengan gambar kotoran
                        ayam untuk mendeteksi penyakit dengan cepat dan akurat.
                        Lindungi kawanan ayam Anda dengan aplikasi canggih ini!
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Chick"
                        className="object-cover h-96"
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
                <div className="flex justify-center items-center flex-col md:flex-row flex-wrap">
                    <div className="shadow-sm px-6 py-8 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover h-72"
                            alt=""
                        />
                        <div className="flex my-1">
                            <p>
                                <FontAwesomeIcon
                                    icon={faBook}
                                    className="text-orange-600 mr-3"
                                />
                            </p>
                            <p className="text-xs text-gray-600 leading-6">
                                Diupload 3 minggu yang lalu..
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Identifikasi kesehatan ayam
                            </h1>
                            <p className="w-72 text-gray-600 text-sm">
                                Ayam sehat memiliki jengger berwarna merah cerah
                                dan tekstur yang...
                            </p>
                        </div>
                    </div>
                    <div className="shadow-sm px-6 py-8 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover h-72"
                            alt=""
                        />
                        <div className="flex my-1">
                            <p>
                                <FontAwesomeIcon
                                    icon={faBook}
                                    className="text-orange-600 mr-3"
                                />
                            </p>
                            <p className="text-xs text-gray-600 leading-6">
                                Diupload 3 minggu yang lalu..
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Identifikasi kesehatan ayam
                            </h1>
                            <p className="w-72 text-gray-600 text-sm">
                                Ayam sehat memiliki jengger berwarna merah cerah
                                dan tekstur yang...
                            </p>
                        </div>
                    </div>
                    <div className="shadow-sm px-6 py-8 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover h-72"
                            alt=""
                        />
                        <div className="flex my-1">
                            <p>
                                <FontAwesomeIcon
                                    icon={faBook}
                                    className="text-orange-600 mr-3"
                                />
                            </p>
                            <p className="text-xs text-gray-600 leading-6">
                                Diupload 3 minggu yang lalu..
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Identifikasi kesehatan ayam
                            </h1>
                            <p className="w-72 text-gray-600 text-sm">
                                Ayam sehat memiliki jengger berwarna merah cerah
                                dan tekstur yang...
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-orange-600 underline font-bold mt-12">
                    <a href="#">See more article</a>
                </p>
            </div>
            {/* End Artikel Page  */}

            {/* Start Banner Page */}
            <div class="bg-orange-500 w-full my-48 h-[350px]">
                <div className="max-w-screen-2xl mx-auto p-6 text-center lg:text-left flex flex-col justify-center items-center lg:justify-start lg:items-start pt-24">
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
