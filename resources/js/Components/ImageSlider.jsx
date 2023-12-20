import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import kamil from '../../images/kamil.jpg'
import syair from '../../images/syair.jpeg'

export default function ImageSlider() {
    let teams = [
        {
            nama: "Hengki Agung Prayoga",
            job: "Mobile Development",
            url: syair,
        },
        {
            nama: "Syair Dafiq Faizur Rahman",
            job: "Machine Learning",
            url: "../../images/kamil.jpg",
        },
        {
            nama: "Jihan Apriliani Nurhasanah",
            job: "Machine Learning",
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            nama: "Muhammad Insan Kamil",
            job: "Machine Learning",
            url: kamil,
        },
        {
            nama: "Oktonius Zevanya Simanungkalit",
            job: "Cloud Computing",
            url: "../../images/kamil.jpg",
        },
        {
            nama: "Andre Sevtian",
            job: "Cloud Computing",
            url: "../../images/kamil.jpg",
        },
    ];
    return (
        <>
            {/* Start Team Page */}
            <div className="pb-48 px-48">
                <h1 className="text-center font-bold text-3xl mb-8">
                    Slide To <span className="text-orange-600">Know</span> Us
                    Better
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {teams.map((data, i) => {
                        return (
                            <SwiperSlide>
                                <div
                                    className="flex justify-center items-center"
                                    key={i}
                                >
                                    <div className="relativ">
                                        <img
                                            className="object-cover w-80 h-80"
                                            src={data.url}
                                        />
                                        <div className="mr-94 flex justify-center">
                                            <div className="absolute w-3/4  h-16 bg-white bottom-5">
                                                <div className="mt-2 ml-4">
                                                    <h1 className="font-bold">
                                                        {data.nama}
                                                    </h1>
                                                    <p className="text-gray-600 text-sm">
                                                        {data.job}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            {/* Start Team Page */}
        </>
    );
}
