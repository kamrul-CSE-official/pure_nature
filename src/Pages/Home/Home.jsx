// import { Helmet } from "react-helmet-async";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import logo from "../../assets/logo.png";
import banner1 from "../../assets/Banner1.gif";
import banner2 from "../../assets/Banner2.gif";
import banner3 from "../../assets/Banner3.gif";
import DataFetch from "../../Hooks/DataFetch";

export default function Home() {
  const { data, loading, error } = DataFetch({
    api: "http://localhost:5000/products",
  });
  console.log("Data: ", data, "Loading", loading, "Error: ", error);
  const flowerPlants = data.filter((item) => item.type == "Flower Plant");
  console.log(flowerPlants);

  return (
    <div>
      {/* <Helmet>
        <title>Pure Nature | Home</title>
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet> */}
      {/* Your other content goes here */}
      <div>
        <Carousel
          showThumbs={false}
          autoPlay="true"
          showArrows={true}
          infiniteLoop="true"
        >
          <div>
            <img src={banner1} alt="Slide 1" loading="lazy" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={banner2} alt="Slide 2" loading="lazy" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={banner3} alt="Slide 3" loading="lazy" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div>
        <div>
          <h3 className="text-3xl font-bold">
            Awesome <span className="text-green-500">Flower</span> Plants
          </h3>
          <div>
            {flowerPlants.map((item) => (
              <img key={item._id} src={item.img} alt={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
