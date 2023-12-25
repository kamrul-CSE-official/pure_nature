import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function LeftNav() {
  const { user } = useContext(AuthContext);
  const [click, setClick] = useState("");

  return (
    <div className="sticky top-0 left-0">
      <h3 className="mx-auto text-2xl font-extrabold my-3 text-green-800">
        Our Best Products
      </h3>
      <ul className="flex flex-row flex-wrap md:flex-col items-center justify-center gap-5 mg:my-5 md:my-10 md:p-2">
        <Link
          to="/shop#chara"
          onClick={() => setClick("chara")}
          className={`btn border-2 border-green-400 md:w-full hover:bg-green-400 ${
            click === "chara" && "bg-green-400"
          }`}
        >
          চারা গাছ
        </Link>
        <Link
          to="/shop#top"
          onClick={() => setClick("tup")}
          className={`btn border-2 border-green-400 md:w-full hover:bg-green-400 ${
            click === "tup" && "bg-green-400"
          }`}
        >
          টপ
        </Link>
        <Link
          to="/shop#shar"
          onClick={() => setClick("shar")}
          className={`btn border-2 border-green-400 md:w-full hover:bg-green-400 ${
            click === "shar" && "bg-green-400"
          }`}
        >
          সার
        </Link>
        <Link
          to="/shop#bizz"
          onClick={() => setClick("bij")}
          className={`btn border-2 border-green-400 md:w-full hover:bg-green-400 ${
            click === "bij" && "bg-green-400"
          }`}
        >
          বীজ
        </Link>
        {user && (
          <div className="container mx-auto text-xl font-bold text-center my-2">
            <Link to="/profile" className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.img} />
              </div>
            </Link>
            <h3 className="text-xl">
              Hi, <span className="text-green-700">{user?.name}😍</span>
            </h3>
            <p>উপভোগ করুন সবুজ দুনিয়া! 😊</p>
          </div>
        )}
      </ul>
    </div>
  );
}
