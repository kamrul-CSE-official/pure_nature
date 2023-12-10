import { Link } from "react-router-dom";
// import article1 from "../../assets/article2.gif";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Article() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVERapi}/articles`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="relative">
        <div className="bg-green-500 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Exploring the Benefits of Rooftop Gardening
          </h1>
          <p className="text-lg">Discover the Joy of Gardening in the Sky</p>
        </div>
        {data.slice().sort((a, b) => b - a).map((item) => (
          <div key={item?._id} className="container mx-auto p-8">
            <div className="max-w-2xl mx-auto">
              <img
                className="w-full h-[18rem] object-cover mb-6 rounded-md"
                src={item?.img}
                alt="Rooftop Gardening"
              />
              <p className="text-gray-500 text-sm mb-4">
                Published on {item?.date} | {item?.author}
              </p>
              <h1 className="text-4xl font-bold mb-4">{item?.title}</h1>
              <p className="text-gray-700 mb-4">
                {item?.content.slice(1, 250)}...
                <Link
                  to={`/articleDetails/${item?._id}`}
                  className="text-blue-600 text-xl font-bold mx-2"
                >
                  Read More
                </Link>
                ..
              </p>
            </div>
          </div>
        ))}
        {/* add article btn */}
        <div className="sticky bottom-0 right-0">
          <Link to="/addArticle">
            <button className="btn bg-green-600 text-white">
              + Add Article
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
