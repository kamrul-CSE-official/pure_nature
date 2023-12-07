import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h2 className="text-xl font-extrabold">Page Not Found!</h2>
      <img
        className="w-1/3"
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1701974728~exp=1701975328~hmac=0bb0de0f42ea54f80483840774c45babf8b7fb9e56f9ea16db17c24c6115de78"
        alt="404"
      />
      <Link to="/">
        <button className="btn btn-accent text-white">Go Home</button>
      </Link>
    </div>
  );
}
