import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Dashboard(props) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
        image: "",
    });

    const [article, setArticle] = useState(props.data.data);
    console.log(data);

    useEffect(() => {
        setArticle(props.data.data);
    }, [props.data.data]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = data.title;
        const content = data.content;
        const image = data.image;

        const articleData = {
            title,
            content,
            image,
        };
        router.post(route("add.dashboard"), articleData);
    };

    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Dashboard" />
            <h1 className="text-center text-black">Dashboard Chickmed</h1>
            <div className="flex px-12 py-6 w-full flex-col items-start gap-2">
                <h2 className="text-black">Masukkan Judul Artikel</h2>
                <Input
                    color="orange"
                    label="Judul Artikel"
                    className="focus:ring-0"
                    id="title"
                    title="title"
                />
                <h2 className="text-black">Masukkan Konten Artikel</h2>
                <Input
                    color="orange"
                    label="Konten Artikel"
                    className="focus:ring-0"
                    id="content"
                    title="content"
                />
                <h2 className="text-black">Masukkan Gambar</h2>
                <Input
                    color="orange"
                    label="Konten Artikel"
                    className="focus:ring-0"
                    id="image"
                    title="image"
                />
                <button className="btn btn-warning btn-sm text-white">
                    Submit
                </button>
            </div>

            <h1 className="text-center text-black">Data Artikel</h1>
            <div className="overflow-x-auto px-12 text-black">
                <table className="table">
                    <thead className="text-black">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>
                                <button className="btn mr-2 btn-primary btn-sm text-white">
                                    Edit
                                </button>
                                <button className="btn btn-error btn-sm text-white">
                                    Delete
                                </button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered input-primary w-full max-w-xs"
                    id="title"
                    name="title"
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Content"
                    className="input input-bordered input-primary w-full max-w-xs"
                    id="content"
                    name="content"
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Image"
                    className="input input-bordered input-primary w-full max-w-xs"
                    id="image"
                    name="image"
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary">Primary</button>
            </form>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {article.map((article, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td>{article.title}</td>
                                    <td>{article.content}</td>
                                    <td>{article.image}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div> */}
        </AuthenticatedLayout>
    );
}
