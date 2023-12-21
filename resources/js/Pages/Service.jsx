import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faCircleExclamation, faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Service() {
    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>

            {/* Start Landing Page */}
            <div className="flex mx-32 mb-48 pt-48 justify-between">
                <div className="">
                    <h1 className="font-bold text-6xl mb-8">
                        <span className="text-orange-600">Terobosan </span>
                        dalam <br /> Pemantauan <br /> Kesehatan Ayam
                    </h1>
                    <p className="mb-8 text-lg">
                        ChickMed adalah solusi lengkap untuk kesehatan ayam Anda. Dengan fitur-fitur unggulan dan komitmen kami untuk terus berkembang, ChickMed siap membawa perawatan ayam Anda ke tingkat berikutnya.
                    </p>
                </div>
                <div>
                    <img
                        src="https://t4.ftcdn.net/jpg/02/58/75/53/360_F_258755338_crANKj0iTUK4ZRH8JuXhykr3M4wbK6Om.jpg"
                        alt="Chicken"
                        className="w-screen h-80 object-cover mx-10"  // Adjust the width to take up half of the page
                    />
                </div>
            </div>
            {/* End Landing Page */}

            {/* Start Solusi Page */}
            <div className="flex flex-row justify-between mb-48 mx-20">
                <div className="flex-auto flex flex-col w-1/2 me-20">
                    <div className="flex justify-center mb-16">
                        <div className="text-center mx-10">
                            <FontAwesomeIcon icon={faVirus} size="3x" style={{ color: "#ff8402" }} />
                            <h4 className="font-bold mt-3">Disease Detection</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="text-center mx-10">
                            <FontAwesomeIcon icon={faCircleExclamation} size="3x" style={{ color: "#ff8402" }} />
                            <h4 className="font-bold mt-3">Reporting</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-center mx-10">
                            <FontAwesomeIcon icon={faClock} size="3x" style={{ color: "#ff8402" }} />
                            <h4 className="font-bold mt-3">Schedulling</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="text-center mx-10">
                            <FontAwesomeIcon icon={faCircleCheck} size="3x" style={{ color: "#ff8402" }} />
                            <h4 className="font-bold mt-3">Accurate</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-auto w-1/2">
                    <h1 className="font-bold text-6xl mb-8">
                        <span className="text-orange-600">Keunggulan </span>yang <br />
                        ditawarkan
                    </h1>
                    <div className="text-justify text-lg">
                        <p className="mb-4">
                            ChickMed hadir untuk menjawab semua kekhawatiran Anda. Aplikasi revolusioner kami menggunakan teknologi machine learning terkini untuk menganalisis gambar kotoran ayam dan memberikan diagnosis yang andal.
                        </p>
                        <p className="">
                            Ini adalah panduan terbaik untuk memastikan kesejahteraan kawanan ayam Anda.
                        </p>
                    </div>
                </div>
            </div>
            {/* End Solusi Page */}


            <hr className="text-orange-600 border-orange-600" />

            {/* Footer Component */}
            <Footer></Footer>
        </>
    );
}
``;
