import { useState } from "react";
import LazyLoad from "react-lazy-load";
import Style from "./Gallery.module.css";

export default function Gallery() {
  const imgData = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1580600301354-0ce8faef576c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "অসাধারন একটি প্রজেক্ট ছিলো",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1571146696514-4abef1714e3f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "প্রজেক্টা করতে অনেক সময় লাগেছিলো কিন্তু প্রজেক্ট কমপ্রিট হবার পর 😍",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1673141390222-2bd01b623bf3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "আলহামদুলিল্লাহ্ আমাদের আরো একটি সাকসেসফুল প্রজেক্ট",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1602795969916-bfe693173620?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "মাসাআল্লাহ্ অসাধারন একটা প্রজেক্ট ছিলো",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1521708266372-b3547456cc2d?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "মাসাআল্লাহ্ অসাধারন একটা প্রজেক্ট ছিলো",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1528475295645-81db59a20ac3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "মাসাআল্লাহ্ অসাধারন একটা প্রজেক্ট ছিলো",
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
            className="btn rounded-full absolute top-10 right-10 bg-red-500"
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
