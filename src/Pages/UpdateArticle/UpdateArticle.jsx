import moment from "moment";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function UpdateArticle() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Comming soon");
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Article</h1>
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
            rows="5"
            className={`textarea textarea-accent w-full`}
            required
          ></textarea>
          {/* {contentError && <p className="text-red-500">{contentError}</p>} */}
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
