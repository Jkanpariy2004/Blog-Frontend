import { Route, Routes } from "react-router-dom"
import Blogs from "./Components/Blogs"
import CreateBlog from "./Components/CreateBlog"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from "./Components/BlogDetails";
import EditBlog from "./Components/EditBlog";

function App() {
  return (
    <>
      <div className="bg-dark text-center py-2 shadow-lg">
        <h1 className="text-white fa-2">Blog App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/craete-blog" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
