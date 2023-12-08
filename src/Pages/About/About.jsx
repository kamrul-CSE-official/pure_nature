export default function About() {
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Roof Garden</h1>
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

        <h2 className="text-3xl font-semibold my-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At [Your Roof Garden Name], we are dedicated to creating a green haven
          in the heart of the city. Our mission is to promote sustainability,
          community engagement, and the joy of gardening. We believe that
          everyone deserves a touch of nature, even in the urban landscape.
        </p>

        {/* Add more sections about your team, events, or anything relevant */}
      </div>
    </div>
  );
}
