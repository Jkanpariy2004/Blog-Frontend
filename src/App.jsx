import { Route, Routes } from "react-router-dom"
import Blogs from "./Components/Blogs"
import CreateBlog from "./Components/CreateBlog"
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="bg-dark text-center py-2 shadow-lg">
        <h1 className="text-white fa-2">Blog App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/craete-blog" element={<CreateBlog />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
