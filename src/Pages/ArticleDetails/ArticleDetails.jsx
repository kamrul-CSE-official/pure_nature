import { useLoaderData } from "react-router-dom";

export default function ArticleDetails() {
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
      </div>
    </div>
  );
}
