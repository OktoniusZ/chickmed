import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-832511df.js";
import { A as Article } from "./Article-3fc48f94.js";
import "react";
import "@inertiajs/react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const playStoreIcon = "/assets/pstore-40a61b87.png";
const HomeHero = "/assets/hero-home-14dc541a.jpg";
const HeroSolution = "/assets/hero-solution-fd242612.jpg";
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { title: "Home" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl flex flex-col my-24 mt-6 lg:my-24 lg:mb-48 p-6 text-center lg:text-left lg:flex-row justify-between items-center mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center lg:items-start  mb-8 lg:mb-0 lg:w-1/2", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-5xl md:text-6xl mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "ChickMed" }),
          " - Poultry ",
          /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
          " Health Monitor"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 max-w-sm", children: "Welcome to ChickMed, the revolutionary app for poultry health monitoring. Let's make your chickens healthier and happier" }),
        /* @__PURE__ */ jsx("button", { className: "btn bg-orange-600 text-white hover:bg-orange-400", children: "Get Started" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: HomeHero,
          alt: "Chicken",
          className: "object-cover"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col lg:flex-row-reverse lg:justify-between items-center p-6 text-center lg:text-right my-48 max-w-screen-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-4xl md:text-6xl mb-8 max-w-xl", children: [
          "Solusi Pintar Untuk",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "Kesehatan" }),
          " Ayam",
          " ",
          /* @__PURE__ */ jsx("br", {}),
          " Anda"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0", children: "Dengan ChickMed, Anda memiliki alat yang andal untuk merawat ayam peliharaan dengan lebih baik." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0", children: "Kami memadukan kecerdasan buatan dengan gambar kotoran ayam untuk mendeteksi penyakit dengan cepat dan akurat. Lindungi kawanan ayam Anda dengan aplikasi canggih ini!" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 lg:ml-[-100px]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: HeroSolution,
          alt: "Chick",
          className: "object-cover"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-6xl mb-8 text-orange-600", children: "Artikel" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-center mx-auto", children: "ChickMed menyediakan beberapa artikel seputar ternak ayam yang bisa bebas dibaca oleh semua pengguna." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10", children: [
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {})
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-orange-600 underline font-bold mt-12", children: /* @__PURE__ */ jsx("a", { href: "#", children: "See more article" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "bg-orange-500 w-full mt-48 h-[350px] bg-hero-about bg-center relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-screen-2xl mx-auto p-6 text-center lg:text-left flex flex-col justify-center items-center lg:justify-start lg:items-start pt-24", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-white font-bold text-5xl mb-8", children: "Get Closer With Us" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: playStoreIcon,
            className: "h-16 lg:h-24",
            alt: "Google Play Store"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "text-orange-600 border-orange-600" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};
