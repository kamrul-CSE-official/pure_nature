import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";

export default function MainLayouts() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <button className="btn btn-error">Notice</button>
        <Marquee>
          <p className="font-bold">
            আসালামুয়ালাইকুম{" "}
            <span className="text-green-800 font-bold">Pure Nature</span> পক্ষ
            থেকে আপনাদের সকলকে জানাই আন্তরিক প্রিতি আর ভালোবাসা। আপনারা জেনে
            খুশি হবে যে আসন্ন বিজয় দিবস উপলক্ষে আমাদের{" "}
            <span className="text-green-800 font-bold">Pure Nature</span> সকল
            কাস্টমারদের জন্য স্পেসাল ডিসকাউক্ট এর ব্যেবস্তা রয়েছে, বিস্তারিত
            জনতে চোখ রাখুন আমাদের ওয়েব সাইটে। ধন্যবাদ 😊
          </p>
        </Marquee>
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
