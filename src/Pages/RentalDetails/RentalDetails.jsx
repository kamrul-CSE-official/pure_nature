import PickDateAndTime from "./PickDateAndTime";

export default function RentalDetails() {
  return (
    <div className="container mx-auto p-8">
      <div className="card bg-base-100 shadow-xl mb-8">
        <figure>
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1480866593555-32dc933d6a77?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="rentalDetails"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Hanging Flower Garden
            <div className="badge badge-secondary">৳ 10,000 per day</div>
          </h2>
          <p>
            If a dog chews shoes, whose shoes does he choose? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Atque ipsam veritatis
            cupiditate commodi esse, facere explicabo rerum cumque aliquam ex,
            asperiores perspiciatis quam illo ducimus? Recusandae alias saepe ex
            quo!
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <PickDateAndTime />
    </div>
  );
}
