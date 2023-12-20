import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Article from "@/Components/Article";

export default function Articles() {
    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>

            {/* Start Landing Page */}
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 my-8 md:my-24 p-6 text-center md:text-left">
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1556316918-880f9e893822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Chicken"
                        className="h-96 w-full object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                        Yang Harus Anda Ketahui Tentang Penyakit Ayam
                    </h1>
                    <p className="mb-10 text-lg">
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
            <div className="max-w-screen-2xl mx-auto my-24 p-6">
                <div className="mb-8 text-center">
                    <h1 className="font-bold text-6xl mb-4 text-orange-600">
                        Artikel
                    </h1>
                    <p className="mx-auto max-w-2xl">
                        Explore ChickMed's insightful articles on poultry,
                        covering a range of topics from health and nutrition to
                        innovative farming practices. Dive into the world of
                        chicken farming and discover valuable insights to
                        enhance your understanding of poultry care and
                        well-being.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
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
