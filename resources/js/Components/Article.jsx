import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Article() {
    return (
        <>
            <div className="">
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
                    <h1 className="font-bold">Identifikasi kesehatan ayam</h1>
                    <p className="w-72 text-gray-600 text-sm">
                        Ayam sehat memiliki jengger berwarna merah cerah dan
                        tekstur yang...
                    </p>
                </div>
            </div>
        </>
    );
}
