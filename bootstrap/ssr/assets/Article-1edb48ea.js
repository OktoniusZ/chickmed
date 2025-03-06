import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-6b24ba06.js";
import { A as Article } from "./Article-3fc48f94.js";
import "react";
import "@inertiajs/react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
function Articles() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { title: "Artikel" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 my-8 md:my-24 p-6 text-center md:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1556316918-880f9e893822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Chicken",
          className: "h-96 w-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-5xl lg:text-6xl mb-4", children: "Yang Harus Anda Ketahui Tentang Penyakit Ayam" }),
        /* @__PURE__ */ jsx("p", { className: "mb-10 text-lg", children: "Penyakit pada ayam bisa menjadi masalah serius, dan pemahaman yang baik tentang gejala, pencegahan, dan pengobatan adalah suatu keharusan. Di ChickMed," }),
        /* @__PURE__ */ jsx("button", { className: "btn bg-orange-600 text-white hover:bg-orange-400", children: "Read Article" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto my-24 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-6xl mb-4 text-orange-600", children: "Artikel" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl", children: "Explore ChickMed's insightful articles on poultry, covering a range of topics from health and nutrition to innovative farming practices. Dive into the world of chicken farming and discover valuable insights to enhance your understanding of poultry care and well-being." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10", children: [
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {}),
        /* @__PURE__ */ jsx(Article, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "text-orange-600 border-orange-600" }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Articles as default
};
