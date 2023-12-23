import { useEffect } from "react";
import React from "react";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.png";
import image8 from "./Images/image8.png";
const HomePage = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = "/LogIn";
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="relative">
        <img
          className="hidden lg:inline absolute bottom-0 right-0 h-32"
          src={image1}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-16 left-[430px] h-52 z-1"
          src={image2}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-20 left-[390px] h-24 z-1"
          src={image3}
          alt=""
        />
        <img
          className="hidden lg:inline absolute top-36 left-[390px] h-24 z-[9999]"
          src={image4}
          alt=""
        />
        <img
          className="hidden lg:inline absolute top-64 left-[350px] h-16 z-[999]"
          src={image4}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-40 right-[390px] h-16 z-[999]"
          src={image5}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-28 right-[350px] h-16 z-[999]"
          src={image5}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-0 left-0 h-72"
          src={image6}
          alt=""
        />
        <img
          className="hidden lg:inline absolute top-0 left-[490px] h-20"
          src={image7}
          alt=""
        />
        <img
          className="hidden lg:inline absolute top-8 right-[350px] h-96"
          src={image8}
          alt=""
        />
        <div className="flex items-center justify-center bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] h-screen w-screen z-[9999] text-3xl text-white font-serif">
          Welcome to Login/SignUp Portal
        </div>
      </div>
    </>
  );
};

export default HomePage;
