import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
import CardSm from "../../Components/Share/cards/CardSm";
import DataFetch from "../../Hooks/DataFetch";
import Loading from "../../Components/Share/Loading";

export default function Shop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }
  }, [location.hash]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const card = {
    text: "Regina Miles",
    imageSrc: "https://i.ibb.co/SrxrKch/user-2.png",
    name: "Regina Miles",
    occupation:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  };

  const { data, loading, error } = DataFetch({
    api: `${import.meta.env.VITE_SERVERapi}/products`,
  });
  const flowerPlants = data.filter((item) => item.type == "Flower Plant");

  return (
    <div>
      {data || !loading || error == null ? (
        <div>
          <div id="chara">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              উন্নতজাতের <span className="text-green-500">চারা</span> গাছ
            </h2>
            <Carousel responsive={responsive}>
              {flowerPlants.slice(0, 6).map((item) => (
                <CardSm key={item._id} item={item} />
              ))}
            </Carousel>
          </div>
          <div id="shar">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              প্রয়জনীয় <span className="text-green-500">সার</span>
            </h2>
            <Carousel responsive={responsive}>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      alt={card.altText || "Shoes"}
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div id="bizz">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              হাইব্রীড <span className="text-green-500">বীজ</span>
            </h2>
            <Carousel responsive={responsive}>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      alt={card.altText || "Shoes"}
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div id="top">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              সৌখিন <span className="text-green-500">টপ</span>
            </h2>
            <Carousel responsive={responsive}>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      alt={card.altText || "Shoes"}
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img className="w-36" src={card.imageSrc} alt="Shoes" />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 p-4 border border-gray-400 mx-auto">
                <div>
                  <figure>
                    <img
                      className="w-36"
                      src={card.imageSrc}
                      loading="lazy"
                      alt="Shoes"
                    />
                  </figure>
                </div>

                <div>
                  <div className="text-center space-y-4 mt-4">
                    <h4 className="text-sm font-semibold text-info">
                      {card.name}
                    </h4>
                    <p>{card.occupation}</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
