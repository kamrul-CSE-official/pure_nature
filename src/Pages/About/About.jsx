export default function About() {
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our "Pure Nature" Web Site
        </h1>
        <p className="text-lg">
          Discover the Beauty of Nature in the Heart of the City
        </p>
      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to [Your Roof Garden Name], where we blend urban living with
          the tranquility of nature. Our rooftop oasis provides a serene escape
          from the hustle and bustle of city life. Whether you're a gardening
          enthusiast or simply looking for a peaceful retreat, our roof garden
          offers a unique experience.
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span className="text-gray-700">
            <span className="text-green-600">Name: </span>Taposh Chandra Das
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span className="text-gray-700">
            <span className="text-green-600">ID: </span>CSE 020069**
          </span>
        </div>

        <h2 className="text-3xl font-semibold my-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At Pure Nature, we are dedicated to creating a green haven in the
          heart of the city. Our mission is to promote sustainability, community
          engagement, and the joy of gardening. We believe that everyone
          deserves a touch of nature, even in the urban landscape.
        </p>

        {/* Add more sections about your team, events, or anything relevant */}
      </div>
    </div>
  );
}
