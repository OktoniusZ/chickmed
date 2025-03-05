import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-91806c7b.js";
import { useForm, Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import "@headlessui/react";
function Dashboard(props) {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    content: "",
    image: ""
  });
  const [article, setArticle] = useState(props.data.data);
  console.log("props", props.data.data);
  useEffect(() => {
    setArticle(props.data.data);
  }, [props.data.data]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((data2) => ({
      ...data2,
      [name]: value
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setData((data2) => ({
      ...data2,
      image: file
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.image.name;
    data.title;
    data.content;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image);
    router.post(route("add.dashboard"), formData);
  };
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }
  console.log(props.data);
  return /* @__PURE__ */ jsxs(Authenticated, { user: props.auth.user, children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("h1", { className: "text-center text-black font-bold text-2xl", children: "Dashboard" }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("div", { className: "flex px-12 py-6 w-full flex-col items-start gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Judul Artikel" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          color: "orange",
          label: "Judul Artikel",
          className: "focus:ring-0",
          id: "title",
          name: "title",
          onChange: handleInputChange
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Konten Artikel" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          color: "orange",
          label: "Konten Artikel",
          className: "focus:ring-0",
          id: "content",
          name: "content",
          onChange: handleInputChange
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Gambar" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          className: "file-input file-input-bordered file-input-warning w-full",
          "data-theme": "light",
          onChange: handleImageChange
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "btn btn-warning btn-sm w-40 h-10 text-white mt-4", children: "Submit" })
    ] }) }),
    /* @__PURE__ */ jsx("h1", { className: "text-center text-black font-bold text-2xl", children: "Data Artikel" }),
    /* @__PURE__ */ jsx("div", { className: "content px-12 pt-16 flex flex-wrap justify-center items-center gap-6", children: article.map((data2, i) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "card w-96 bg-white-100 text-black shadow-xl",
          children: [
            /* @__PURE__ */ jsx("figure", { className: "h-48", children: /* @__PURE__ */ jsx("img", { src: data2.image, alt: "Shoes" }) }),
            /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
              /* @__PURE__ */ jsxs("h2", { className: "card-title", children: [
                truncateText(data2.title, 22),
                /* @__PURE__ */ jsx("div", { className: "badge badge-secondary text-white", children: "NEW" })
              ] }),
              /* @__PURE__ */ jsx("p", { children: truncateText(data2.content, 20) }),
              /* @__PURE__ */ jsxs("div", { className: "card-actions justify-end", children: [
                /* @__PURE__ */ jsx("div", { className: "badge badge-outline", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("edit.dashboard"),
                    method: "get",
                    data: { id: data2.id },
                    as: "button",
                    children: "Edit"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "badge badge-outline", children: /* @__PURE__ */ jsx("button", { className: "hover:bg-sky-700", children: /* @__PURE__ */ jsx("a", { href: `/delete/${data2.id}`, children: "Delete" }) }) })
              ] })
            ] })
          ]
        },
        i
      );
    }) })
  ] });
}
export {
  Dashboard as default
};
