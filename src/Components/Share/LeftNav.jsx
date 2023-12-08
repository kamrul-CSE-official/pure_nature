import { Link } from "react-router-dom";

export default function LeftNav() {
  return (
    <div className="sticky top-0 left-0">
      <h3 className="mx-auto text-2xl font-extrabold my-3 text-green-800">
        Our Best Products
      </h3>
      <ul className="flex flex-row flex-wrap md:flex-col items-center justify-center gap-5 my-5 md:my-10 p-2">
        <Link className="btn border-2 border-green-400 w-full hover:bg-green-400">
          চারা গাছ
        </Link>
        <Link className="btn border-2 border-green-400 w-full hover:bg-green-400">
          টপ
        </Link>
        <Link className="btn border-2 border-green-400 w-full hover:bg-green-400">
          সার
        </Link>
        <Link className="btn border-2 border-green-400 w-full hover:bg-green-400">
          বীজ
        </Link>
      </ul>
    </div>
  );
}
