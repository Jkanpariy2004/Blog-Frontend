import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateBlog() {
    const [description, setDescription] = useState("");
    const Navigate = useNavigate();

    const handleEditorChange = (value) => {
        setDescription(value);
    };

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        watch,
        formState: { errors },
    } = useForm();

    const formSubmit = async (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("shortDesc", data.shortDesc);
        formData.append("description", description);
        formData.append("auther", data.auther);
        formData.append("image", data.image[0]);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/create-blog", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                toast("Blog created successfully!");
                Navigate('/');
            } else {
                toast.error(result.message || "An error occurred.");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error("Failed to create the blog. Please try again.");
        }
    };



    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between mt-5">
                    <h4>Create Blog</h4>
                    <Link to="/" className="btn btn-dark">
                        Back
                    </Link>
                </div>
                <div className="card border-0 shadow-lg">
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Title
                                </label>
                                <input
                                    {...register('title', { required: true })}
                                    type="text"
                                    className={`form-control ${errors.title && 'is-invalid'}`}
                                    placeholder="Enter Blog Title"
                                />
                                {errors.title && <p className="invalid-feedback">Title field is required</p>}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Short Description
                                </label>
                                <textarea
                                    {...register('shortDesc', { required: true })}
                                    className={`form-control ${errors.shortDesc && 'is-invalid'}`}
                                    cols={30}
                                    rows={3}
                                    placeholder="Enter Blog Short Description"
                                />
                                {errors.shortDesc && <p className="invalid-feedback">Short Description field is required</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Description
                                </label>
                                <ReactQuill
                                    value={description}
                                    onChange={handleEditorChange}
                                    modules={{
                                        toolbar: [
                                            [{ header: "1" }, { header: "2" }, { font: [] }],
                                            [{ list: "ordered" }, { list: "bullet" }],
                                            [{ align: [] }],
                                            ["bold", "italic", "underline"],
                                            ["link", "image"],
                                            ["blockquote", "code-block"],
                                            ["clean"],
                                        ],
                                    }}
                                    formats={[
                                        "header",
                                        "font",
                                        "list",
                                        "bullet",
                                        "align",
                                        "bold",
                                        "italic",
                                        "underline",
                                        "link",
                                        "image",
                                        "blockquote",
                                        "code-block",
                                    ]}
                                    theme="snow"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Image
                                </label>
                                <input
                                    {...register('image', { required: true })}
                                    type="file"
                                    className={`form-control ${errors.image && 'is-invalid'}`}
                                />

                                {errors.image && <p className="invalid-feedback">Blog Image field is required</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Author
                                </label>
                                <input
                                    {...register('auther', { required: true })}
                                    type="text"
                                    className={`form-control ${errors.auther && 'is-invalid'}`}
                                    placeholder="Enter Author Name"
                                />
                                {errors.auther && <p className="invalid-feedback">Auther field is required</p>}
                            </div>
                            <div>
                                <button className="btn btn-dark w-100">Create Blog</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
