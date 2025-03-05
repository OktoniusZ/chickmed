import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-91806c7b.js";
import { useForm, Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import "@headlessui/react";
function EditArticles(props) {
  const { data, setData, post, processing, errors } = useForm({
    title: props.articles.title,
    content: props.articles.content,
    image: props.articles.image
  });
  const [article, setArticle] = useState(props.articles);
  const [previewImage, setPreviewImage] = useState();
  useEffect(() => {
    setArticle(props);
  }, [props]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((data2) => ({
      ...data2,
      [name]: value
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData((data2) => ({
      ...data2,
      image: file
    }));
    setData((data2) => ({
      ...data2,
      image: file
    }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    setPreviewImage(props.articles.image);
  }, []);
  console.log(props.articles.image);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image);
    router.post(
      route("update.dashboard", { id: props.articles.id }),
      formData
    );
  };
  return /* @__PURE__ */ jsxs(Authenticated, { user: props.auth.user, children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("h1", { className: "text-center text-black font-bold text-2xl", children: "Edit Artikel" }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("div", { className: "flex px-12 py-6 w-full flex-col items-start gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Judul Artikel" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          color: "blue",
          label: "Judul Artikel",
          className: "focus:ring-0",
          id: "title",
          name: "title",
          onChange: handleInputChange,
          defaultValue: props.articles.title
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Konten Artikel" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          color: "blue",
          label: "Konten Artikel",
          className: "focus:ring-0",
          id: "content",
          name: "content",
          onChange: handleInputChange,
          defaultValue: props.articles.content
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-gray-500", children: "Masukkan Gambar" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          accept: "image/jpg, image/jpeg, image/png",
          multiple: true,
          onChange: handleImageChange,
          "data-theme": "light",
          className: "file-input file-input-bordered file-input-primary w-full"
        }
      ),
      previewImage && /* @__PURE__ */ jsx("div", { className: "mt-2 border-dashed border-2 border-gray-400 p-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: previewImage,
          alt: "Thumbnail Preview",
          className: "h-36 w-64 object-cover mx-auto"
        }
      ) }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-sm text-white w-40 h-10 mt-4 ", children: "Update" })
    ] }) })
  ] });
}
export {
  EditArticles as default
};
