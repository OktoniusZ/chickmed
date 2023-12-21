import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import kamil from "../../images/kamil.jpg";
import syair from "../../images/syair.jpeg";
import jihan from "../../images/jihan.png";
import okto from "../../images/okto.jpg"
import andre from "../../images/andre.jpg"
import hengki from "../../images/hengki.jpeg"

export default function ImageSlider() {
    let teams = [
        {
            nama: "Hengki Agung Prayoga",
            job: "Mobile Development",
            url: hengki,
        },
        {
            nama: "Syair Dafiq Faizur Rahman",
            job: "Machine Learning",
            url: syair,
        },
        {
            nama: "Jihan Apriliani Nurhasanah",
            job: "Machine Learning",
            url: jihan,
        },
        {
            nama: "Muhammad Insan Kamil",
            job: "Machine Learning",
            url: kamil,
        },
        {
            nama: "Oktonius Zevanya Simanungkalit",
            job: "Cloud Computing",
            url: okto,
        },
        {
            nama: "Andre Sevtian",
            job: "Cloud Computing",
            url: andre,
        },
    ];
    return (
        <>
            {/* Start Team Page */}
            <div className="max-w-screen-2xl mx-auto my-32 cursor-pointer">
                <h1 className="text-center font-bold text-3xl mb-8">
                    Slide To <span className="text-orange-600">Know</span> Us
                    Better
                </h1>

                <Swiper
                    spaceBetween={5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    grabCursor={true}
                    breakpoints={{
                        // Mobile (less than 640px)
                        640: {
                            slidesPerView: 1,
                        },
                        // Tablet (less than 768px)
                        768: {
                            slidesPerView: 2,
                        },
                        // Desktop (less than 1024px)
                        1024: {
                            slidesPerView: 3,
                        },
                        // Large Desktop (1024px and above)
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {teams.map((data, i) => {
                        return (
                            <SwiperSlide>
                                <div
                                    className="flex justify-center items-center"
                                    key={i}
                                >
                                    <div className="relative">
                                        <img
                                            className="object-cover w-80 h-80"
                                            src={data.url}
                                        />
                                        <div className="mr-94 flex justify-center">
                                            <div className="absolute w-3/4 p-3 bg-white bottom-5">
                                                <div className="mt-2 ml-4">
                                                    <h1 className="font-bold">
                                                        {data.nama}
                                                    </h1>
                                                    <p className="text-orange-600 text-sm">
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
