import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";
import RightNav from "../Components/Share/RightNav";
import LeftNav from "../Components/Share/LeftNav";

export default function MainLayouts() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <button className="btn btn-error font-bold">Notice</button>
        <Marquee>
          <p className="font-bold">
            Welcome To{" "}
            <span className="text-green-800 font-bold">Rooftop Garden</span> পক্ষ
            থেকে আপনাদের সকলকে জানাই আন্তরিক প্রিতি ও শুভেচ্ছা। আপনারা জেনে
            খুশি হবেন যে আসন্ন ইংরেজি মাসের নতুন বছর উপলক্ষে আমাদের{" "}
            <span className="text-green-800 font-bold">Rooftop Garden </span> সকল
            কাস্টমারদের জন্য স্পেসাল ডিসকাউক্ট এর ব্যবস্থা রয়েছে, বিস্তারিত
            জানতে চোখ রাখুন আমাদের ওয়েব সাইটে। ধন্যবাদ 😊
          </p>
        </Marquee>
      </div>
      <div className="px-5 mx-auto grid grid-cols-1 md:grid-cols-4">
        <div>
          <LeftNav />
        </div>
        <div className="md:col-span-2">
          {" "}
          <Outlet />
        </div>
        <div>
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
}
