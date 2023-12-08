import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../assets/logo.png";
import banner1 from "../../assets/Banner1.gif";
import banner2 from "../../assets/Banner2.gif";
import banner3 from "../../assets/Banner3.gif";

export default function Home() {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${banner1})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   height: "100vh",
    // }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pure Nature | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      {/* Your other content goes here */}
      <div>
        <Carousel
          showThumbs={false}
          autoPlay="true"
          showArrows={true}
          infiniteLoop="true"
        >
          <div>
            <img src={banner1} alt="Slide 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={banner2} alt="Slide 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={banner3} alt="Slide 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
