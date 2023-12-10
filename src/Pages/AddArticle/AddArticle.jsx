import { useState } from "react";

export default function AddArticle() {
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    img: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit articleData to your backend
    console.log("Article submitted:", articleData);
    // Reset form fields
    setArticleData({
      title: "",
      content: "",
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
              className="textarea textarea-accent w-full"
              required
            ></textarea>
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
      </div>
    </div>
  );
}
