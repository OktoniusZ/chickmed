import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-6b24ba06.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "react";
import "@inertiajs/react";
const gmail = "/build/assets/gmail-455d5aa8.png";
const discord = "/build/assets/discord2-f4af729e.png";
const linkedin = "/build/assets/linkedin2-54a7bed2.png";
const swiper = "";
const kamil = "/build/assets/kamil-aedc636f.jpg";
const syair = "/build/assets/syair-95a78a04.jpeg";
const jihan = "/build/assets/jihan-af37cca2.png";
const okto = "/build/assets/okto-0fbfd60e.jpg";
const andre = "/build/assets/andre-d64472d5.jpg";
const hengki = "/build/assets/hengki-d8cd40b9.jpeg";
function ImageSlider() {
  let teams = [
    {
      nama: "Hengki Agung Prayoga",
      job: "Mobile Development",
      url: hengki
    },
    {
      nama: "Syair Dafiq Faizur Rahman",
      job: "Machine Learning",
      url: syair
    },
    {
      nama: "Jihan Apriliani Nurhasanah",
      job: "Machine Learning",
      url: jihan
    },
    {
      nama: "Muhammad Insan Kamil",
      job: "Machine Learning",
      url: kamil
    },
    {
      nama: "Oktonius Zevanya Simanungkalit",
      job: "Cloud Computing",
      url: okto
    },
    {
      nama: "Andre Sevtian",
      job: "Cloud Computing",
      url: andre
    }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto my-32 cursor-pointer", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-center font-bold text-3xl mb-8", children: [
      "Slide To ",
      /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "Know" }),
      " Us Better"
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        spaceBetween: 5,
        onSlideChange: () => console.log("slide change"),
        onSwiper: (swiper2) => console.log(swiper2),
        grabCursor: true,
        breakpoints: {
          // Mobile (less than 640px)
          640: {
            slidesPerView: 1
          },
          // Tablet (less than 768px)
          768: {
            slidesPerView: 2
          },
          // Desktop (less than 1024px)
          1024: {
            slidesPerView: 3
          },
          // Large Desktop (1024px and above)
          1200: {
            slidesPerView: 4
          }
        },
        children: teams.map((data, i) => {
          return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex justify-center items-center",
              children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "object-cover w-80 h-80",
                    src: data.url
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "mr-94 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "absolute w-3/4 p-3 bg-white bottom-5", children: /* @__PURE__ */ jsxs("div", { className: "mt-2 ml-4", children: [
                  /* @__PURE__ */ jsx("h1", { className: "font-bold", children: data.nama }),
                  /* @__PURE__ */ jsx("p", { className: "text-orange-600 text-sm", children: data.job })
                ] }) }) })
              ] })
            },
            i
          ) });
        })
      }
    )
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { title: "Tentang Kami" }),
    /* @__PURE__ */ jsxs("div", { className: "w-100 py-36 bg-hero-about bg-center relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute bg-black bg-opacity-40 bottom-0 left-0 right-0 top-0" }),
      /* @__PURE__ */ jsxs("div", { className: "relative text-center max-w-screen-2x mx-auto z-10 p-6", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-medium text-5xl md:text-6xl mb-8 max-w-[700px] mx-auto text-white", children: [
          "We've got an",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: "entire" }),
          " ",
          "team dedicated to supporting you and your business"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-white max-w-[600px] mx-auto", children: "Let's get acquainted with the ChickMed team, a dedicated group of professionals ready to support you and your business." }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-8", children: [
          /* @__PURE__ */ jsx("button", { className: "btn bg-transparent text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white w-36", children: "Contact Us" }),
          /* @__PURE__ */ jsx("button", { className: "btn bg-orange-600 text-white hover:bg-orange-400 w-36", children: "See More" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ImageSlider, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between my-36 p-6 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-5xl mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "Contact" }),
          "Us"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Call Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Call our team Monday - Friday from 8am to 5m." }),
        /* @__PURE__ */ jsxs("div", { className: "flex mb-8", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            FontAwesomeIcon,
            {
              icon: faPhone,
              className: "text-orange-600 mr-3"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: "+62 812 1234 1234" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-bold", children: "Chat with us" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Speak to aour friendly team" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-3", children: [
          /* @__PURE__ */ jsx("img", { src: gmail, alt: "gmail" }),
          /* @__PURE__ */ jsx("img", { src: discord, alt: "discord" }),
          /* @__PURE__ */ jsx("img", { src: linkedin, alt: "linkedin" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "object-cover h-96",
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Contact"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  About as default
};
