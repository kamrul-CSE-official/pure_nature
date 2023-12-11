import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";

export default function UpdateArticle() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    title: data?.article?.title || "",
    content: data?.article?.content || "",
    img: data?.article?.img || "",
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
    const content = articleData.content || "";
    const wordCount = content.trim().split(/\s+/).length;

    if (wordCount < 300) {
      setContentError("Content must be at least 300 words.");
      return false;
    } else {
      setContentError("");
      return true;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateContent()) {
      return;
    }

    const apiUrl = import.meta.env.VITE_SERVERapi;

    articleData.date = moment().format("MMMM D, YYYY");
    articleData.author = user.name;
    articleData.email = user.email;
    articleData.authorImg = user.img;

    try {
      const res = await axios.patch(
        `${apiUrl}/articlesUpdate/${data?.article?._id}`,
        articleData
      );

      if (res?.data.acknowledged && res?.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article has been successfully updated.",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      navigate(`/articleDetails/${data?.article?._id}`);
    } catch (error) {
      console.error("Error submitting article:", error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }

    // Clear the form after submission
    setArticleData({
      title: "",
      content: "",
      img: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Article</h1>
      <form onSubmit={handleUpdate} className="mx-auto">
        {/* Title input */}
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
            defaultValue={data?.article?.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full input input-bordered input-accent"
            required
          />
        </div>

        {/* Content textarea */}
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
            defaultValue={data?.article?.content}
            onChange={handleInputChange}
            rows="5"
            className={`textarea textarea-accent w-full ${
              contentError ? "border-red-500" : ""
            }`}
            required
          ></textarea>
          {contentError && <p className="text-red-500">{contentError}</p>}
        </div>

        {/* Image URL input */}
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
            defaultValue={data?.article?.img}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full input input-bordered input-accent text-area"
          />
        </div>

        {/* Update button */}
        <button
          type="submit"
          className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Article
        </button>
      </form>

      {/* Article details display */}
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
  );
}
