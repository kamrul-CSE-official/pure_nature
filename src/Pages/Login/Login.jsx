import { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
  const { login, signUpWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((result) => {
        if (result.email) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Loged in Account",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  const handleLogInWithGoogle = () => {
    signUpWithGoogle()
      .then((req) => {
        if (req.email) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Loged in Account",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-green-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-green-800">
          <form onSubmit={handleLogin} className="card-body">
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
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-500 font-bold text-white">
                Login
              </button>
            </div>
          </form>
          <button
            onClick={() => handleLogInWithGoogle()}
            className="btn btn-circle mx-auto"
          >
            <FcGoogle size={25} />
          </button>
          <Link to="/regester" className="text-white m-3">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
