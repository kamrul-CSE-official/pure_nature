import { Link, useLoaderData } from "react-router-dom";

export default function Rental() {
  const data = useLoaderData();
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Explore Our Rooftop Garden Gallery
        </h1>
        <p className="text-lg">A Visual Delight of Greenery and Beauty</p>
      </div>

      <div className="container mx-auto p-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item, index) => (
            <div key={index} className="mb-4">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={item.img}
                alt={`Rooftop Garden ${index + 1}`}
              />
              <div className="mt-2 flex flex-col justify-between items-center">
                <p className="text-gray-700">{item.title}</p>
                {/* xs */}
                <div className="rating rating-xs my-3">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <Link to={`/rentalDetails/${item._id}`}>
                  <button className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* add article btn */}
        <div className="sticky bottom-0 right-0">
          <Link to="/addRental">
            <button className="btn bg-green-600 text-white">
              + Add Rental
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
