import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Article from "@/Components/Article";

export default function Articles() {
    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>

            {/* Start Landing Page */}
            <div className="flex mx-32 mb-48 justify-between gap-10 pt-48">
                <div className="w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1556316918-880f9e893822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Chicken"
                        className="h-96 w-full object-cover"
                    />
                </div>
                <div className="w-1/2">
                    <h1 className="font-bold text-6xl mb-4">
                        Yang Harus Anda <br />
                        <span className="text-orange-600">Ketahui</span> Tentang
                        <br />
                        Penyakit Ayam
                    </h1>
                    <p className="mb-10 text-lg w-4/5">
                        Penyakit pada ayam bisa menjadi masalah serius, dan
                        pemahaman yang baik tentang gejala, pencegahan, dan
                        pengobatan adalah suatu keharusan. Di ChickMed,
                    </p>
                    <button className="btn bg-orange-600 text-white hover:bg-orange-400">
                        Read Article
                    </button>
                </div>
            </div>
            {/* End Landing Page */}

            {/* Start Artikel Page  */}
            <div className="mx-32 mb-40">
                <div className="mb-8 text-center">
                    <h1 className="font-bold text-6xl mb-8 text-orange-600">
                        Artikel
                    </h1>
                    <p className="mx-auto w-3/5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga, repudiandae distinctio! Cumque expedita
                        dicta ea quis architecto ipsa repellat incidunt maxime
                        magnam! Veniam cum illum corrupti possimus, deserunt
                        dicta voluptates perspiciatis quae facilis! Provident
                        nostrum quam, maiores dignissimos esse fugit?
                    </p>
                </div>
                <div className="flex justify-between items-center mb-10">
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className="flex justify-between items-center mb-10">
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className="flex justify-between items-center mb-10">
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
            {/* End Artikel Page  */}

            <hr className="text-orange-600 border-orange-600" />

            {/* Footer Component */}
            <Footer></Footer>
        </>
    );
}
``;
