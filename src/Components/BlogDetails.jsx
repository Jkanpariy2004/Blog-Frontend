import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogDetails() {
    const [blog, setBlog] = useState(null);
    const params = useParams();

    const fetchBlog = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/blog/${params.id}`);
        const result = await response.json();
        setBlog(result.data);
    };

    useEffect(() => {
        if (params.id) {
            fetchBlog();
        }
    }, [params.id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between mt-5">
                    <h2>{blog.title}</h2>
                    <div>
                        <Link to="/" className="btn btn-dark">Back To Blogs</Link>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-12'>
                        <p>by <span className='fw-bold'>{blog.auther}</span> on {blog.date}</p>
                        {
                            (blog.image) && <img src={blog.image} alt={blog.image} className='w-100' />
                        }
                    </div>
                    <div className='mt-3 mb-3'>
                        {blog.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
