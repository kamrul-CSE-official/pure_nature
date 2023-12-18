import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PickDateAndTime from "./PickDateAndTime";
import Loading from "../../Components/Share/Loading";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function RentalDetails() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();

  const data = useLoaderData();
  if (!data.rental) {
    <Loading />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_SERVERapi}/rental/${id}`)
          .then((res) => {
            if (res) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              navigation("/rental");
              // window.location.reload();
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container mx-auto p-8">
      <div className="card bg-base-100 shadow-xl mb-8">
        <figure>
          <img
            className="w-full h-64 object-cover"
            src={data?.rental.img}
            alt="rentalDetails"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.rental.title}
            <div className="badge badge-secondary">
              ৳ {data?.rental.price} /- per day
            </div>
          </h2>
          {/* md */}
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>{data?.rental.content}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Owner: {data?.rental.ownerName}
            </div>
            <div className="badge badge-outline">
              Location: {data?.rental.place}
            </div>
          </div>
        </div>
      </div>
      <PickDateAndTime />
      {data?.rental?.email == user.email && (
        <div className="join gap-2">
          <Link
            to={`/articleUpdate/${data?.rental?._id}`}
            className="btn btn-primary"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(data?.rental?._id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
