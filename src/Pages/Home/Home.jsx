import { Helmet } from "react-helmet";
import logo from "../../assets/logo.png";
import banner1 from "../../assets/Banner-1.png";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pure Nature | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="shortcut icon" href={logo} type="image/x-icon" />
      </Helmet>
      {/* Your other content goes here */}
    </div>
  );
}
