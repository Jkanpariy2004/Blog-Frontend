import { Link } from "react-router-dom";
import BlogCards from "./BlogCards";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState();
    const [keyword, setKeyword] = useState('');

    const fetchBlogs = async () => {
        const responce = await fetch("http://127.0.0.1:8000/api/blogs");
        const result = await responce.json();

        setBlogs(result.data);
    }

    const searchBlogs = async (e) => {
        e.preventDefault();

        const responce = await fetch("http://127.0.0.1:8000/api/search?keyword=" + keyword, {
            method: "POST"
        });

        const result = await responce.json();

        setBlogs(result.data);
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center mt-5">
                    <form onSubmit={(e) => searchBlogs(e)}>
                        <div className="d-flex">
                            <input type="text" className="form-control" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search Blog By Title" />
                            <button className="btn btn-dark ms-2">Search</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <h4>Blogs</h4>
                    <Link to="/craete-blog" className="btn btn-dark">Create</Link>
                </div>
                <div className="row">
                    {
                        (blogs) && blogs.map((blog) => {
                            return (<BlogCards blogs={blogs} setBlogs={setBlogs} key={blog.id} blog={blog} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
