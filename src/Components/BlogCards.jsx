export default function BlogCards({blog}) {
    return (
        <>
            <div className="col-12 col-md-2 col-lg-3 mt-4">
                <div className="card border-0 shadow-lg">
                    <img src={blog.image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h2 className="fs-5">{blog.title}</h2>
                        <p>{blog.shortDesc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="btn btn-dark">Detail</a>
                            <a href="#" className="text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
