import { useNavigate } from "react-router-dom";
import Carousel from "../UI/Carousel";
import FQA from "../UI/FQA";
import Pricing from "../UI/Pricing";
import Service from "../UI/Service";
import Status from "../UI/Status";
import TimeLine from "../UI/TimeLine";
import SidebarDrawer from "../UI/SidebarDrawer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.licdn.com/dms/image/v2/D5612AQEyBZ3OW-e3qQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727125872501?e=2147483647&v=beta&t=P9KLBTqdAqWldw3Ir-G6m1ktfBLW3CsNIoG1Y_GqfDY)",
        }}
      >
        <div className="hero-overlay bg-yellow-200/50"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-yellow-800">
              Website Performance
            </h1>

            <p className="mb-5 text-yellow-700">
              Ensure your website performs at its best with a comprehensive web audit. Identify technical issues, 
              optimize load times, enhance SEO performance, and improve overall user experience to drive higher 
              engagement and conversions.
            </p>

            <button
              className="px-9 rounded-lg shadow-xl py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Pricing />
      {/* <Carousel /> */}
      <Service />
      <Status />
      <TimeLine />

      <FQA />
      <SidebarDrawer/>
      
    </>
  );
}
