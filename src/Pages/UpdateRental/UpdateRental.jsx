import axios from "axios";
import moment from "moment";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function UpdateRental() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data.rental);

  const [rentalData, setRentalData] = useState({
    title: "",
    content: "",
    img: "",
    place: "",
    price: "",
  });

  const [contentError, setContentError] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRentalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateContent = () => {
    const content = rentalData.content || "";
    const wordCount = content.trim().split(/\s+/).length;

    if (wordCount < 80) {
      setContentError("Content must be at least 80 words.");
      return false;
    } else {
      setContentError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateContent()) {
      return;
    }

    rentalData.date = moment().format("MMMM D, YYYY");
    rentalData.ownerName = user.name;
    rentalData.email = user.email;
    rentalData.ownerImg = user.img;

    axios
      .patch(`${import.meta.env.VITE_SERVERapi}/rental`, rentalData)
      .then((res) => {
        if (res.data.insertedId && res.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Article has been created.",
            showConfirmButton: false,
            timer: 1500,
          });

          // Clear form fields
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error submitting article:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };
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
        <h1 className="text-3xl font-semibold mb-4">Update Rental</h1>

        <form onSubmit={handleSubmit} className="mx-auto">
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
              defaultValue={data?.rental.title}
              //   value={rentalData.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full input input-bordered input-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-600"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={data?.rental.content}
              //   value={rentalData.content}
              onChange={handleInputChange}
              rows="5"
              className={`textarea textarea-accent w-full ${
                contentError ? "border-red-500" : ""
              }`}
              required
            ></textarea>
            {contentError && <p className="text-red-500">{contentError}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="text"
              id="img"
              name="img"
              defaultValue={data?.rental.img}
              //   value={rentalData.img}
              required
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full input input-bordered input-accent text-area"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price Per Day
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              defaultValue={data?.rental.price}
              //   value={rentalData.price}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full input input-bordered input-accent text-area"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="districts"
              className="block text-sm font-medium text-gray-600"
            >
              Place / Location
            </label>
            <select
              className="select w-full"
              name="place"
              onChange={handleInputChange}
              defaultValue={data?.rental.place}
              required
            >
              <option disabled value="">
                Pick your favorite district
              </option>
              {districts.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Article
          </button>
        </form>
      </div>
    </div>
  );
}
