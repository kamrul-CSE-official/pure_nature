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
 

  const { data, loading, error } = DataFetch({
    api: `${import.meta.env.VITE_SERVERapi}/products`,
  });
  const flowerPlants = data.filter((item) => item.type == "Flower Plant");

  return (
    <div>
      {!data || !flowerPlants || loading || error !== null ? (
        <Loading />
      ) : (
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
              {flowerPlants.slice(0, 6).map((item) => (
                <CardSm key={item._id} item={item} />
              ))}
            </Carousel>
          </div>

          <div id="bizz">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              হাইব্রীড <span className="text-green-500">বীজ</span>
            </h2>
            <Carousel responsive={responsive}>
              {flowerPlants.slice(0, 6).map((item) => (
                <CardSm key={item._id} item={item} />
              ))}
            </Carousel>
          </div>

          <div id="top">
            <h2 className="text-xl font-bold my-5 border-b-4 border-green-500 pb-4">
              সৌখিন <span className="text-green-500">টপ</span>
            </h2>
            <Carousel responsive={responsive}>
              {flowerPlants.slice(0, 6).map((item) => (
                <CardSm key={item._id} item={item} />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
