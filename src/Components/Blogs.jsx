import { Link } from "react-router-dom";
import BlogCards from "./BlogCards";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState();

    const fetchBlogs = async () => {
        const responce = await fetch("http://127.0.0.1:8000/api/blogs");
        const result = await responce.json();

        setBlogs(result.data);
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between mt-5">
                    <h4>Blogs</h4>
                    <Link to="/craete-blog" className="btn btn-dark">Create</Link>
                </div>
                <div className="row">
                    {
                        (blogs) && blogs.map((blog) => {
                            return (<BlogCards key={blog.id} blog={blog} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
