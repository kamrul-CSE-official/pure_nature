import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

export default function ArticleDetails() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigation = useNavigate();
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
          .delete(`${import.meta.env.VITE_SERVERapi}/articles/${id}`)
          .then((res) => {
            if (res) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              navigation("/article");
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
    <div>
      <div className="container mx-auto p-8">
        <div className="w-full mx-auto">
          <img
            className="w-full h-[30rem] object-cover mb-6 rounded-md"
            src={data?.article?.img}
            alt="Rooftop Gardening"
          />
          <p className="text-gray-500 text-sm mb-4">
            Published on {data?.article?.date} | {data?.article?.author}
          </p>
          <h1 className="text-4xl font-bold mb-4">{data?.article?.title}</h1>
          <p className="text-gray-700 mb-4">{data?.article?.content}</p>
        </div>
        {data?.article?.email == user.email && (
          <div className="join gap-2">
            <Link className="btn btn-primary">Edit</Link>
            <button
              onClick={() => handleDelete(data?.article?._id)}
              className="btn btn-error text-white"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
