import { Link } from "react-router-dom";

export default function Rental() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1580600301354-0ce8faef576c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1571146696514-4abef1714e3f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673141390222-2bd01b623bf3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more image URLs as needed
  ];
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Explore Our Rooftop Garden Gallery
        </h1>
        <p className="text-lg">A Visual Delight of Greenery and Beauty</p>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="mb-4">
              <img
                className="w-full h-64 object-cover rounded-md"
                src={imageUrl}
                alt={`Rooftop Garden ${index + 1}`}
              />
              <div className="mt-2 flex flex-col justify-between items-center">
                <p className="text-gray-700">Rooftop Garden {index + 1}</p>
                <Link to="/rentalDetails">
                  <button className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
