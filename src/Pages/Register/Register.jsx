import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {
  const { createUser, signUpWithGoogle } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleApiError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! ${error}`,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const img = form.get("img");
      const email = form.get("email");
      const password = form.get("password");

      const user = { name, email, img };

      const res = await createUser(email, password);

      await axios.post(`${import.meta.env.VITE_SERVERapi}/users`, user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Successfully Created Account ${res?.email}`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigation("/");
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const req = await signUpWithGoogle();
      const name = req?.user?.displayName;
      const email = req?.user?.email;
      const img = req?.user?.photoURL;

      const user = { name, email, img };

      await axios.post(`${import.meta.env.VITE_SERVERapi}/users`, user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Successfully Created Account ${req?.user?.email}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigation("/");
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div>
      <div className="hero min-h-[90vh] bg-green-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Regester</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-800">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-500 font-bold text-white">
                  Regester
                </button>
              </div>
            </form>
            <button
              onClick={() => handleSignUpWithGoogle()}
              className="btn btn-circle mx-auto"
            >
              <FcGoogle size={25} />
            </button>
            <Link to="/login" className="text-white m-3">
              Login Your Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
