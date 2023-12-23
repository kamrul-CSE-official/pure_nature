import Style from "./CardSm.module.css";
import { Link } from "react-router-dom";

export default function CardSm({ item }) {
  const { img, details, price, name, _id } = item;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
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
          {/* xs */}
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
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
