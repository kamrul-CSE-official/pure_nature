import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function ArticleDetails() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="w-full mx-auto">
          <img
            className="w-full h-[30rem] object-cover mb-6 rounded-md"
            src={data?.article?.img}
            alt="Rooftop Gardening"
          />
          <p className="text-gray-500 text-sm mb-4">
            Published on {data?.article?.date} | {data?.article?.author}
          </p>
          <h1 className="text-4xl font-bold mb-4">{data?.article?.title}</h1>
          <p className="text-gray-700 mb-4">{data?.article?.content}</p>
        </div>
        {data?.article?.email == user.email && (
          <div className="join gap-2">
            <Link className="btn btn-primary">Edit</Link>
            <Link className="btn btn-error text-white">Delete</Link>
          </div>
        )}
      </div>
    </div>
  );
}
