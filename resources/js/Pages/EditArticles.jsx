import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Button, Input, Navbar } from "@material-tailwind/react";

export default function EditArticles(props) {
    const { data, setData, post, processing, errors } = useForm({
        title: props.articles.title,
        content: props.articles.content,
        image: props.articles.image,
    });

    const [article, setArticle] = useState(props.articles);

    useEffect(() => {
        setArticle(props);
    }, [props]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setData((data) => ({
            ...data,
            image: file,
        }));

        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setPreviewImage(reader.result);
        // };
        // if (file) {
        //     reader.readAsDataURL(file);
        // }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = data.title;
        const content = data.content;
        const image = data.image;

        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("content", data.content);
        formData.append("image", data.image);

        router.post(route("update.dashboard", {id: props.articles.id}), formData);
    };

    console.log('props', props)
    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Dashboard" />
            <h1 className="text-center text-black">Dashboard Chickmed</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex px-12 py-6 w-full flex-col items-start gap-2">
                    <h2 className="text-black">Masukkan Judul Artikel</h2>
                    <Input
                        color="orange"
                        label="Judul Artikel"
                        className="focus:ring-0"
                        id="title"
                        name="title"
                        onChange={handleInputChange}
                        defaultValue={props.articles.title}
                    />
                    <h2 className="text-black">Masukkan Konten Artikel</h2>
                    <Input
                        color="orange"
                        label="Konten Artikel"
                        className="focus:ring-0"
                        id="content"
                        name="content"
                        onChange={handleInputChange}
                        defaultValue={props.articles.content}
                    />
                    <h2 className="text-black">Masukkan Gambar</h2>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-warning w-full"
                        data-theme="light"
                        onChange={handleImageChange}
                    />
                    <button className="btn btn-primary btn-sm text-white">
                        Update
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
