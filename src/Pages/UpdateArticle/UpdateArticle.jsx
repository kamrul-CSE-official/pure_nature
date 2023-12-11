import moment from "moment";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

export default function UpdateArticle() {
  const data = useLoaderData();
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
    const content = articleData.content || ""; // Ensure content is defined
    const wordCount = content.trim().split(/\s+/).length;

    if (wordCount < 300) {
      setContentError("Content must be at least 300 words.");
      return false;
    } else {
      setContentError("");
      return true;
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!validateContent()) {
      return;
    }

    articleData.date = moment().format("MMMM D, YYYY");
    articleData.author = user.name;
    articleData.email = user.email;
    articleData.authorImg = user.img;
    console.log("Article submitted:", articleData);
    axios
      .post(
        `${import.meta.env.VITE_SERVERapi}/articlesUpdate/${
          data?.article?._id
        }`,
        articleData
      )
      .then((res) => {
        if (res.data.insertedId && res.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Article has been created.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // Handle error if the request fails
        console.error("Error submitting article:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });

    // Reset form fields
    setArticleData({
      title: "",
      //   content: "",
      img: "",
    });
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Article</h1>
      <form onSubmit={handleUpdate} className="mx-auto">
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
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Article
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
  );
}
