import { RiMailSendLine } from "react-icons/ri";
import Lottie from "lottie-react";
import ContactAnimation from "../../assets/ContactUs.json";

export default function RightNav() {
  return (
    <div className="sticky top-0 right-0">
      <div className="mx-0 mt-0 lg:mt-5 w-full">
        <figure className="w-1/2 mx-auto mb-0">
          <Lottie animationData={ContactAnimation} />
        </figure>
        <form className="flex flex-col items-center justify-center py-5 px-3 w-full gap-2">
          <h2 className="card-title">Contact With Us</h2>
          <input
            type="name"
            required
            name="user_name"
            placeholder="আপনার নাম"
            className="input input-bordered input-accent w-full"
          />
          <input
            type="text"
            required
            name="mobile"
            placeholder="আপনার মোবাইল নম্বর"
            className="input input-bordered input-accent w-full"
          />
          <input
            type="email"
            name="user_email"
            placeholder="আপনার ইমেল"
            className="input input-bordered input-accent w-full"
          />
          <textarea
            className="textarea textarea-accent w-full"
            required
            name="message"
            placeholder="মেসেজ"
          ></textarea>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-green-800 to-green-300 text-white mt-3"
          >
            সেন্ড করুন <RiMailSendLine size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
