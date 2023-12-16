import { useLoaderData } from "react-router-dom";
import Loading from "../../Components/Share/Loading";

export default function ProductsDetails() {
  const data = useLoaderData();
  if (!data) {
    return <Loading />;
  }
  return (
    <div>
      {" "}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={data.img} alt={data.name} />
        </figure>
        <div className="card-body relative">
          <div className="absolute top-0 right-10">
            <p className="text-xl font-extrabold">৳ {data.price}</p>{" "}
            <p className="text-xl font-bold text-gray-500 line-through">
              ৳ {data.price + 20}
            </p>
          </div>

          <h2 className="card-title">{data.name}</h2>
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
          <p>{data.details}</p>
          <ul className="list-decimal font-bold">
            <li>Supplier: {data.supplier}</li>
            <li>Stock: {data.stock}</li>
          </ul>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
