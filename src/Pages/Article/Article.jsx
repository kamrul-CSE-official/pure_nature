import { Link } from "react-router-dom";
import article1 from "../../assets/article2.gif";

export default function Article() {
  return (
    <div>
      <div>
        <div className="bg-green-500 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Exploring the Benefits of Rooftop Gardening
          </h1>
          <p className="text-lg">Discover the Joy of Gardening in the Sky</p>
        </div>
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
              <Link to="" className="text-blue-600 text-xl font-bold">
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
              <Link to="" className="text-blue-600 text-xl font-bold">
                Read More
              </Link>
              ..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
