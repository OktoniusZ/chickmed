import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { usePage, Head, Link } from "@inertiajs/react";
function Navbar({ title }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { url } = usePage();
  const isRouteActive = (route) => {
    return url === route;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100 max-w-screen-2xl mx-auto flex justify-between p-6 lg:py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "img/Logo.svg",
          alt: "Logo",
          className: "h-16 w-16 mr-2"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "navbar-end", children: /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-end", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            tabIndex: 0,
            role: "button",
            className: "btn btn-ghost lg:hidden",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h8m-8 6h16"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          "ul",
          {
            tabIndex: 0,
            className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
            children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/",
                  className: `text-lg text-gray-700 ${isRouteActive("/") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
                  children: "Home"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/about",
                  className: `text-lg text-gray-700 ${isRouteActive("/about") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
                  children: "Tentang Kami"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/services",
                  className: `text-lg text-gray-700 ${isRouteActive("/services") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
                  children: "Service"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/articles",
                  className: `text-lg text-gray-700 ${isRouteActive("/articles") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
                  children: "Artikel"
                }
              ) })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "navbar-end hidden lg:flex", children: /* @__PURE__ */ jsxs("ul", { className: "menu menu-horizontal px-1", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: "/",
            className: `text-lg text-gray-700 ${isRouteActive("/") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
            children: "Home"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: "/about",
            className: `text-lg text-gray-700 ${isRouteActive("/about") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
            children: "Tentang Kami"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: "/services",
            className: `text-lg text-gray-700 ${isRouteActive("/services") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
            children: "Service"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: "/articles",
            className: `text-lg text-gray-700 ${isRouteActive("/articles") ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`,
            children: "Artikel"
          }
        ) })
      ] }) })
    ] })
  ] });
}
const logo = "/assets/logo-1f856de8.png";
const instagram = "/assets/instagram-5dd2d59c.png";
const linkedin = "/assets/linkedin-b9e0f8e9.png";
const whatsapp = "/assets/whatsapp-4c2cc211.png";
const discord = "/assets/discord-78492d48.png";
function Footer() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-2xl mx-auto flex justify-between py-24 p-6 flex-col md:flex-row gap-10 flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Logo" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "© Bangkit Academy Cohort 2023 - Team" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mr-24", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-xl", children: "Navigasi" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Tentang Kami" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Service" }) }),
          /* @__PURE__ */ jsx("li", { className: "", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Kontak Kami" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-2xl mb-4", children: "Social Media" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: instagram, alt: "" }),
          /* @__PURE__ */ jsx("img", { src: whatsapp, alt: "" }),
          /* @__PURE__ */ jsx("img", { src: linkedin, alt: "" }),
          /* @__PURE__ */ jsx("img", { src: discord, alt: "" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Footer as F,
  Navbar as N
};
