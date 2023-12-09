// import LazyLoad from "react-lazy-load";
import "aos/dist/aos.css";
import Style from "./CardSm.module.css";
import { Link } from "react-router-dom";

export default function CardSm({ item }) {
  const { img, details, price, name, _id } = item;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
          {/* <LazyLoad effect="blur" height="auto" placeholderSrc={"logo.png"}>
            <img
              className={`mx-auto ${Style.cardImg}`}
              src={img}
              alt="card-img"
            />
          </LazyLoad> */}
          <img
            className={`mx-auto ${Style.cardImg}`}
            src={img}
            alt="card-img"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">৳ {price}</div>
          </h2>
          <p>{details.slice(0, 90)}...</p>

          <Link to={`/productsDetails/${_id}`}>
            {" "}
            <button className="btn btn-outline hover:bg-green-600">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}