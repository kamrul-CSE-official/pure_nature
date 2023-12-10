import { Link } from "react-router-dom";
import article1 from "../../assets/article2.gif";
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
        {data.map((item) => (
          <div key={item?.key}>
            {item?.title} <img src={item?.img} alt="" />
          </div>
        ))}
        {/* article-1 */}
        <div className="container mx-auto p-8">
          <div className="max-w-2xl mx-auto">
            <img
              className="w-full h-[18rem] object-cover mb-6 rounded-md"
              src={article1}
              alt="Rooftop Gardening"
            />
            <p className="text-gray-500 text-sm mb-4">
              Published on December 8, 2023 | MD.Kamrul Hasan
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Exploring the Benefits of Rooftop Gardening
            </h1>
            <p className="text-gray-700 mb-4">
              Rooftop gardening has gained popularity as urban dwellers seek
              creative ways to bring greenery into their lives. In this article,
              we'll explore the numerous benefits of cultivating a garden in the
              sky and how it can enhance your quality of life.{" "}
              <Link
                to="/articleDetails"
                className="text-blue-600 text-xl font-bold"
              >
                Read More
              </Link>
              ..
            </p>
          </div>
        </div>
        {/* article-2 */}
        <div className="container mx-auto p-8">
          <div className="max-w-2xl mx-auto">
            <img
              className="w-full h-[18rem] object-cover mb-6 rounded-md"
              src={article1}
              alt="Rooftop Gardening"
            />
            <p className="text-gray-500 text-sm mb-4">
              Published on December 8, 2023 | MD.Kamrul Hasan
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Exploring the Benefits of Rooftop Gardening
            </h1>
            <p className="text-gray-700 mb-4">
              Rooftop gardening has gained popularity as urban dwellers seek
              creative ways to bring greenery into their lives. In this article,
              we'll explore the numerous benefits of cultivating a garden in the
              sky and how it can enhance your quality of life.{" "}
              <Link
                to="/articleDetails"
                className="text-blue-600 text-xl font-bold"
              >
                Read More
              </Link>
              ..
            </p>
          </div>
        </div>
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
