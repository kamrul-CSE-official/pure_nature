import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${scrollValue < 550 ? "hidden" : "block"}`}>
      <button
        onClick={handleScrollTop}
        className="btn btn-circle bg-green-600 text-white font-extrabold hover:bg-green-400"
        title="Scroll top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollTop;
