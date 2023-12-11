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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import item1 from "../../assets/ui-chat.svg";
import item2 from "../../assets/truck-loaded.svg";
import item3 from "../../assets/wheat.svg";
import item4 from "../../assets/lemon.svg";

export default function Home() {
  const [selectedAccordion, setSelectedAccordion] = useState(1);

  const { data, loading, error } = DataFetch({
    api: `${import.meta.env.VITE_SERVERapi}/products`,
  });

  const flowerPlants = data.filter((item) => item.type == "Flower Plant");
  const instoments = data.filter(
    (item) => item.type == "Agricultural Instruments"
  );

  const handleAccordionChange = (index) => {
    setSelectedAccordion(index);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  if (!data || !flowerPlants || !instoments || loading || error !== null) {
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
        {/* service types */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center w-full">
          {/* item-1 */}
          <div className="h-[11.5rem] border-4 rounded-xl border-green-100 hover:bg-green-900 duration-500 hover:text-white p-3 m-2">
            <div className="flex flex-col items-center justify-center">
              <img width={100} src={item1} alt="item" />
              <h4 className="text-lg font-bold md:font-extrabold">
                24/7 Support
              </h4>
            </div>
          </div>
          {/* item-2 */}
          <div className="h-[11.5rem] border-4 rounded-xl border-green-100 hover:bg-green-900 duration-500 hover:text-white p-3 m-2">
            <div className="flex flex-col items-center justify-center">
              <img width={100} src={item2} alt="item" />
              <h4 className="text-lg font-bold md:font-extrabold">
                Free Shipping
              </h4>
            </div>
          </div>
          {/* item-3 */}
          <div className="h-[11.5rem] border-4 rounded-xl border-green-100 hover:bg-green-900 duration-500 hover:text-white p-3 m-2">
            <div className="flex flex-col items-center justify-center">
              <img width={100} src={item3} alt="item" />
              <h4 className="text-lg font-bold md:font-extrabold">
                Fresh & Healthy
              </h4>
            </div>
          </div>
          {/* item-4 */}
          <div className="h-[11.5rem] border-4 rounded-xl border-green-100 hover:bg-green-900 duration-500 hover:text-white p-3 m-2">
            <div className="flex flex-col items-center justify-center">
              <img width={100} src={item4} alt="item" />
              <h4 className="text-lg font-bold md:font-extrabold">
                Our Nursery
              </h4>
            </div>
          </div>
        </div>
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
        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold my-8">
            আমাদের সম্পর্কে আপনাদের যত জিঙ্গাসা
          </h2>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
              id="accordion1"
              checked={selectedAccordion === 1}
              onChange={() => handleAccordionChange(1)}
            />
            <div className="collapse-title text-xl font-medium">
              কেন আমাদের সার্ভিস নিবেন ?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ea
                dolore repellendus sunt quam nihil officia, eaque, eveniet
                deleniti iure illum quasi maxime iusto hic magni eius laudantium
                voluptates ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
              id="accordion2"
              checked={selectedAccordion === 2}
              onChange={() => handleAccordionChange(2)}
            />
            <div className="collapse-title text-xl font-medium">
              আমারা কেন বেস্ট ?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ea
                dolore repellendus sunt quam nihil officia, eaque, eveniet
                deleniti iure illum quasi maxime iusto hic magni eius laudantium
                voluptates ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              type="radio"
              name="my-accordion-2"
              id="accordion3"
              checked={selectedAccordion === 3}
              onChange={() => handleAccordionChange(3)}
            />
            <div className="collapse-title text-xl font-medium">
              আমারা কেন অন্যদের থেকে আলাদা ?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ea
                dolore repellendus sunt quam nihil officia, eaque, eveniet
                deleniti iure illum quasi maxime iusto hic magni eius laudantium
                voluptates ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
