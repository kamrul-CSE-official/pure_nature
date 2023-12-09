import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function LeftNav() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sticky top-0 left-0">
      <h3 className="mx-auto text-2xl font-extrabold my-3 text-green-800">
        Our Best Products
      </h3>
      <ul className="flex flex-row flex-wrap md:flex-col items-center justify-center gap-5 mg:my-5 md:my-10 md:p-2">
        <Link className="btn border-2 border-green-400 md:w-full hover:bg-green-400">
          চারা গাছ
        </Link>
        <Link className="btn border-2 border-green-400 md:w-full hover:bg-green-400">
          টপ
        </Link>
        <Link className="btn border-2 border-green-400 md:w-full hover:bg-green-400">
          সার
        </Link>
        <Link className="btn border-2 border-green-400 md:w-full hover:bg-green-400">
          বীজ
        </Link>
        <div className="container mx-auto text-xl font-bold">
          <h3 className="text-xl">
            Hi <span className="text-green-700">{user?.email}😍</span>
          </h3>
          <p>What are you doing? 😊</p>
        </div>
      </ul>
    </div>
  );
}
