import { useState } from "react";
import LazyLoad from "react-lazy-load";
import Style from "./Gallery.module.css";

export default function Gallery() {
  const imgData = [
    {
      id: 0,
      img: "https://roofgardenbd.com/wp-content/uploads/2023/05/1-1024x576.jpg",
      title: "অসাধারন একটি প্রজেক্ট ছিলো",
    },
    {
      id: 1,
      img: "https://roofgardenbd.com/wp-content/uploads/2023/05/4-1024x576.jpg",
      title:
        "",
    },
    {
      id: 3,
      img: "https://bangladeshpost.net/webroot/uploads/featureimage/2019-07/5d2353921a241.jpg",
      title: "",
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/jxfFfOl9eoY/maxresdefault.jpg",
      title: "",
    },

    {
      id: 5,
      img: "https://i.ytimg.com/vi/VSCO0UfUUhc/maxresdefault.jpg",
      title: "",
    },

    {
      id: 6,
      img: "https://dailyasianage.com/library/1515607716_2.jpg",
      title: "",
    },

    {
      id: 7,
      img: "https://www.assuregroupbd.com/images/blog/rooftop-gardening-thumb-1.jpg",
      title: "",
    },


    {
      id: 8,
      img: "https://i.ytimg.com/vi/IYzTHOBTuAc/maxresdefault.jpg",
      title: "",
    },

    {
      id: 9,
      img: "http://www.bonayon.com/image/catalog/fruit-plant-pack/bashundhara-project.JPG",
      title: "",
    },

    {
      id: 10,
      img: "http://www.bonayon.com/image/catalog/fruit-plant-pack/growing-vegetables-in-container-dhaka-baridhara-gulshan-project.jpg",
      title: "",
    },

    {
      id: 11,
      img: "http://www.bonayon.com/image/catalog/rooftop-terrace/137918818_14506121123_large.jpg",
      title: "",
    },

    {
      id: 12,
      img: "https://www.newagebd.com/files/records/news/202105/136855_14.jpg",
      title: "",
    },

    {
      id: 13,
      img: "https://www.assuregroupbd.com/images/blog/rooftop-gardening-thumb-1.jpg",
      title: "",
    },


    {
      id: 14,
      img: "https://www.assuregroupbd.com/images/blog/rooftop-gardening-thumb-2.jpg",
      title: "",
    },

    {
      id: 15,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28131657/Rooftop-garden-design-ideas-03.jpg",
      title: "",
    },


    {
      id: 16,
      img: "https://www.assuregroupbd.com/images/blog/rooftop-gardening-thumb-4.jpg",
      title: "",
    },

    {
      id: 17,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28131608/Rooftop-garden-design-ideas-02.jpg",
      title: "",
    },

    {
      id: 18,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28132106/Rooftop-garden-design-ideas-06.jpg",
      title: "",
    },

    {
      id: 19,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28132442/Rooftop-garden-design-ideas-09.jpg",
      title: "",
    },


    {
      id: 20,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28132626/Rooftop-garden-design-ideas-11.jpg",
      title: "",
    },


    {
      id: 21,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28132947/Rooftop-garden-design-ideas-15.jpg",
      title: "",
    },


    {
      id: 22,
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/04/28133129/Rooftop-garden-design-ideas-17.jpg",
      title: "",
    },
    
    
  ];
  const [model, setModel] = useState(false);
  const [modalImageData, setModalImageData] = useState([]);
  const getImg = (data) => {
    setModalImageData(data);
    setModel(true);
  };
  return (
    <div>
      <div className="bg-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Explore Our Rooftop Garden Gallery
        </h1>
        <p className="text-lg">A Visual Delight of Greenery and Beauty</p>
      </div>

      <div className="container mx-auto mb-8 mt-8">
        {/* modal */}
        <div
          className={`${
            model ? `${Style.model} ${Style.open}` : Style.model
          } relative`}
        >
          <LazyLoad effect="blur" height={762}>
            <img src={modalImageData.img} loading="lazy" alt="img-model" />
          </LazyLoad>

          <button
            onClick={() => setModel(false)}
            title="Close"
            className="btn btn-circle rounded-full absolute top-10 right-10 bg-red-500"
          >
            {/* <RiCloseCircleFill size={20} color="white" /> */} X
          </button>
          <p className="absolute bottom-0 text-xl text-white bg-[#6664645a] py-10">
            {modalImageData.title}
          </p>
        </div>
        {/* gallery */}
        <div className={Style.gallery}>
          {imgData.map((img) => (
            <div
              key={img.id}
              className={`${Style.pics} relative hover:border-4 border-green-600 rounded-md overflow-hidden`}
              onClick={() => getImg(img)}
            >
              <LazyLoad effect="blur" height="auto" placeholderSrc={"logo.png"}>
                <img src={img.img} alt={img.title} className="w-full" />
              </LazyLoad>

              <p
                className={`${Style.title} absolute bottom-0 text-center text-white overflow-hidden p-3 z-10`}
              >
                {img && img.title ? img.title.slice(0, 70) : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
