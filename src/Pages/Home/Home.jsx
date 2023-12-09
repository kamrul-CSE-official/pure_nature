// import { Helmet } from "react-helmet-async";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import logo from "../../assets/logo.png";
import banner1 from "../../assets/Banner1.gif";
import banner2 from "../../assets/Banner2.gif";
import banner3 from "../../assets/Banner3.gif";
import DataFetch from "../../Hooks/DataFetch";
import CardSm from "./CardSm";
import Loading from "../../Components/Share/Loading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { data, loading, error } = DataFetch({
    api: `${import.meta.env.VITE_SERVERapi}/products`,
  });

  console.log(data);
  const flowerPlants = data.filter((item) => item.type == "Flower Plant");
  const seeding = data.filter((item) => item.type == "Seedling");
  const instoments = data.filter(
    (item) => item.type == "Agricultural Instruments"
  );

  useEffect(() => {
    AOS.init();
  }, []);

  if (
    !data ||
    !flowerPlants ||
    !instoments ||
    !seeding ||
    loading ||
    error !== null
  ) {
    return <Loading />;
  }

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
        {/* Flower plants */}
        <div className="md:my-6">
          <h3 className="text-3xl font-bold">
            Awesome <span className="text-green-500">Flower</span> Plants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            {flowerPlants.slice(0, 6).map((item) => (
              <CardSm key={item._id} item={item} />
            ))}
          </div>
        </div>
        {/* Seeding */}
        <div data-aos="zoom-in-down" data-aos-delay="50" className="md:my-6">
          <h3 className="text-3xl font-bold">
            Hybride <span className="text-green-500">Seeding</span> Plants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            {seeding.slice(0, 6).map((item) => (
              <CardSm key={item._id} item={item} />
            ))}
          </div>
        </div>
        {/* instoments */}
        <div data-aos="zoom-in-down" data-aos-delay="50" className="md:my-6">
          <h3 className="text-3xl font-bold">
            Required <span className="text-green-500">Instruments</span> For You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            {instoments.slice(0, 6).map((item) => (
              <CardSm key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
