import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faCircleExclamation, faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { N as Navbar, F as Footer } from "./Footer-832511df.js";
import "react";
import "@inertiajs/react";
function Service() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { title: "Service" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl flex mx-auto my-24 mt-12 flex-col md:flex-row p-6 text-center md:text-left gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-5xl lg:text-6xl mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "Terobosan " }),
          "dalam ",
          /* @__PURE__ */ jsx("br", {}),
          " Pemantauan ",
          /* @__PURE__ */ jsx("br", {}),
          " Kesehatan Ayam"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg", children: "ChickMed adalah solusi lengkap untuk kesehatan ayam Anda. Dengan fitur-fitur unggulan dan komitmen kami untuk terus berkembang, ChickMed siap membawa perawatan ayam Anda ke tingkat berikutnya." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://t4.ftcdn.net/jpg/02/58/75/53/360_F_258755338_crANKj0iTUK4ZRH8JuXhykr3M4wbK6Om.jpg",
          alt: "Chicken",
          className: "w-screen h-80 object-cover"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row justify-between my-48 max-w-screen-2xl mx-auto p-6 text-center md:text-left gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-auto flex flex-col md:w-1/2 flex-wrap gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-10 flex-wrap", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                icon: faVirus,
                size: "3x",
                style: { color: "#ff8402" }
              }
            ),
            /* @__PURE__ */ jsx("h4", { className: "font-bold mt-3", children: "Disease Detection" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-[250px]", children: "We help find your chicken disease." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center ", children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                icon: faCircleExclamation,
                size: "3x",
                style: { color: "#ff8402" }
              }
            ),
            /* @__PURE__ */ jsx("h4", { className: "font-bold mt-3", children: "Reporting" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-[250px]", children: "We regulary give you report about your chickens." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-10 flex-wrap", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center ", children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                icon: faClock,
                size: "3x",
                style: { color: "#ff8402" }
              }
            ),
            /* @__PURE__ */ jsx("h4", { className: "font-bold mt-3", children: "Schedulling" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-[250px]", children: "We remind you for feeding your chicken and regulary vaccinate." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center ", children: [
            /* @__PURE__ */ jsx(
              FontAwesomeIcon,
              {
                icon: faCircleCheck,
                size: "3x",
                style: { color: "#ff8402" }
              }
            ),
            /* @__PURE__ */ jsx("h4", { className: "font-bold mt-3", children: "Accurate" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-[250px]", children: "We give an accurate diagnose for your chickens." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-auto md:w-1/2", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-bold text-6xl mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "Keunggulan " }),
          "yang",
          " ",
          /* @__PURE__ */ jsx("br", {}),
          "ditawarkan"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-justify text-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: "ChickMed hadir untuk menjawab semua kekhawatiran Anda. Aplikasi revolusioner kami menggunakan teknologi machine learning terkini untuk menganalisis gambar kotoran ayam dan memberikan diagnosis yang andal." }),
          /* @__PURE__ */ jsx("p", { className: "", children: "Ini adalah panduan terbaik untuk memastikan kesejahteraan kawanan ayam Anda." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "text-orange-600 border-orange-600" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Service as default
};
