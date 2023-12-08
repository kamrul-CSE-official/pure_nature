import { Link } from "react-router-dom";
import article1 from "../../assets/article2.gif";
import Swal from "sweetalert2";
import LoginModal from "./LoginModal";

export default function Article() {
  const handleCreateAnArticle = async () => {
    const { value: formValues } = await Swal.fire({
      title: "You have to login!",
      html:
        '<input id="email" class="swal2-input" placeholder="Enter your email">' +
        '<input id="password" class="swal2-input" type="password" placeholder="Enter your password">' +
        '<input class="swal2-input btn" type="submit" title="Login With Google">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        };
      },
    });

    if (formValues) {
      Swal.fire(
        `Entered Email: ${formValues.email}, Entered Password: ${formValues.password}`
      );
    }
  };

  return (
    <div className="relative">
      <div>
        <div className="bg-green-500 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Exploring the Benefits of Rooftop Gardening
          </h1>
          <p className="text-lg">Discover the Joy of Gardening in the Sky</p>
        </div>

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
            <p className="text-gray-700 mb-4">
              <strong>1. Green Oasis in the City</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Rooftop gardens provide a green oasis in the midst of the concrete
              jungle. They offer a retreat from the noise and stress of city
              life, allowing individuals to connect with nature without leaving
              their homes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>2. Environmental Benefits</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Beyond personal well-being, rooftop gardens contribute to
              environmental sustainability. They help reduce the urban heat
              island effect, improve air quality, and promote biodiversity in
              urban areas.
            </p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
      <button
        onClick={() => handleCreateAnArticle()}
        title="Create An Article"
        className="btn bg-green-600 text-white font-extrabold flex items-center justify-center sticky bottom-2 right-0"
      >
        <span className="text-2xl mb-1">+</span> Create An Article
      </button>
      <LoginModal />
    </div>
  );
}
