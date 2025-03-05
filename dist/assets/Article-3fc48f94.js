import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
function Article() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "shadow-md p-3", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "object-cover h-72",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex my-1", children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
        FontAwesomeIcon,
        {
          icon: faBook,
          className: "text-orange-600 mr-3"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-6", children: "Diupload 3 minggu yang lalu.." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold", children: "Identifikasi kesehatan ayam" }),
      /* @__PURE__ */ jsx("p", { className: "w-72 text-gray-600 text-sm", children: "Ayam sehat memiliki jengger berwarna merah cerah dan tekstur yang..." })
    ] })
  ] }) });
}
export {
  Article as A
};
