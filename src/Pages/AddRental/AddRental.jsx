export default function AddRental() {
  const districts = [
    "Barisal",
    "Bhola",
    "Barguna",
    "Jhalokathi",
    "Patuakhali",
    "Pirojpur",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Jamalpur",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Mymensingh",
    "Narayanganj",
    "Narsingdi",
    "Netrakona",
    "Rajbari",
    "Shariatpur",
    "Sherpur",
    "Tangail",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    "Bogura",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Chapainawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-200 p-6 rounded-md">
        <h1 className="text-3xl font-semibold mb-4">Add Rental</h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-600"
            >
              Banner URL
            </label>
            <input
              type="text"
              id="img"
              name="img"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price per Day
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-600"
            >
              Details
            </label>
            <input
              type="text"
              id="details"
              name="details"
              className="mt-1 p-8 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="place"
              className="block text-sm font-medium text-gray-600"
            >
              Place
            </label>
            <select className="select w-full">
              <option disabled selected>
                Pick a district
              </option>
              {districts.map((name, i) => (
                <option key={i}>{name}</option>
              ))}
            </select>
          </div>

          {/* Add other form fields as needed */}

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
