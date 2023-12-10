import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddArticle() {
  const { user } = useContext(AuthContext);

  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    img: "",
  });

  const [contentError, setContentError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateContent = () => {
    const wordCount = articleData.content.trim().split(/\s+/).length;
    if (wordCount < 300) {
      setContentError("Content must be at least 300 words.");
      return false;
    } else {
      setContentError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateContent()) {
      return;
    }

    articleData.date = moment().format("MMMM D, YYYY");
    articleData.author = user.name;
    articleData.email = user.email;
    articleData.authorImg = user.img;
    console.log("Article submitted:", articleData);
    axios.post(`${import.meta.env.VITE_SERVERapi}/articles`).then((res) => {
      if (res.insertedId && res.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article has created.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    // Reset form fields
    setArticleData({
      title: "",
      //   content: "",
      img: "",
    });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add Article</h1>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={articleData.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full input input-bordered input-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-600"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={articleData.content}
              onChange={handleInputChange}
              rows="5"
              className={`textarea textarea-accent w-full ${
                contentError ? "border-red-500" : ""
              }`}
              required
            ></textarea>
            {contentError && <p className="text-red-500">{contentError}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={articleData.img}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full input input-bordered input-accent text-area"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Article
          </button>
        </form>
        <div className="my-5 border-3">
          <p>
            Author: <span className="font-bold">{user?.name}</span>
          </p>
          <p>
            Date:{" "}
            <span className="font-bold">{moment().format("MMMM D, YYYY")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
