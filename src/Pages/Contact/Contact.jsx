export default function Contact() {
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">{"We'd Love to Hear from You!"}</p>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or inquiries, feel free to contact us.
              We're here to help!
            </p>
            <div className="flex items-center space-x-4">
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
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-14h2v6h-2zm0 8h2v2h-2z"
                ></path>
              </svg>
              <span className="text-gray-700">
                Port City International University, Chattogram, Bangladesh
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
              <span className="text-gray-700">taposh@example.com</span>
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
              <span className="text-gray-700">+8801580-673013</span>
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
              <span className="text-gray-700">+8801823-855998</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
            <form>
              {/* Add form fields (e.g., Name, Email, Message) here */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full p-2 border rounded-md border-3 border-green-500"
                  type="name"
                  id="name"
                  name="name"
                  placeholder="name..."
                  required
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Your Email
                </label>
                <input
                  className="w-full p-2 border rounded-md border-3 border-green-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email..."
                  required
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Your Message
                </label>
                <input
                  className="w-full p-2 border rounded-md border-3 border-green-500"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="message..."
                  required
                />
              </div>

              {/* Add more form fields as needed */}

              <button
                className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
