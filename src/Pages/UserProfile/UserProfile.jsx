import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
      <div className="flex items-center">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <img
            src={user.img}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
      {/* order history */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample order item */}
          {/* 1 no order */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Order #12345</p>
            <p className="text-lg font-semibold">Product Name</p>
            <p className="text-gray-600">Date: 2023-01-01</p>
          </div>
          {/* 2 no order */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Order #12345</p>
            <p className="text-lg font-semibold">Product Name</p>
            <p className="text-gray-600">Date: 2023-01-01</p>
          </div>
        </div>
      </div>
      {/* your articles */}
      <div className="mt-8 relative">
        <h3 className="text-lg font-semibold mb-4">Your Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample order item */}
          {user?.articles?.map((item) => (
            <div
              key={item._id}
              className="bg-gray-100 p-4 rounded-md hover:border-2 hover:border-s-yellow-300"
            >
              <p className="text-gray-600">Article No: {item?._id}</p>
              <p className="text-lg font-semibold">{item?.title}</p>
              <p className="text-gray-600">Date: {item?.date}</p>
              <Link
                to={`/articleDetails/${item?._id}`}
                className="text-blue-600 font-bold"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/addArticle"
          className="absolute bottom-0 right-0 text-lg font-bold text-white btn bg-green-700"
        >
          + Add Article
        </Link>
      </div>
      {/* your rental */}
      <div className="mt-8 relative">
        <h3 className="text-lg font-semibold mb-4">Your Rental</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample order item */}
          {/* 1 no article */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Order #12345</p>
            <p className="text-lg font-semibold">Product Name</p>
            <p className="text-gray-600">Date: 2023-01-01</p>
          </div>
          {/* 2 no article */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Order #12345</p>
            <p className="text-lg font-semibold">Product Name</p>
            <p className="text-gray-600">Date: 2023-01-01</p>
          </div>
          {/* 3 no article */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">Order #12345</p>
            <p className="text-lg font-semibold">Product Name</p>
            <p className="text-gray-600">Date: 2023-01-01</p>
          </div>
        </div>
        <Link
          to="/addRental"
          className="absolute bottom-0 right-0 text-lg font-bold text-white btn bg-green-700"
        >
          + Add Rental
        </Link>
      </div>
    </div>
  );
}
