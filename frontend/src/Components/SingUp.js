import React, { useState } from "react";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.png";
import image8 from "./Images/image8.png";
import { Link } from "react-router-dom";
import axios from "axios";
const SingUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmpass) {
      try {
        const response = await axios.post(
          "http://localhost:4170/register",
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.data.status === "Success") {
          window.location.href = "/LogIn";
        }
      } catch (error) {
        console.error("Error: Unexpected response status");
      }
    }
  };
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
          className="hidden lg:inline absolute top-64 left-[350px] h-16 z-[9999]"
          src={image4}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-40 right-[390px] h-16 z-[9999]"
          src={image5}
          alt=""
        />
        <img
          className="hidden lg:inline absolute bottom-28 right-[350px] h-16 z-[9999]"
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
          className="hidden lg:inline absolute top-12 right-[350px] h-96"
          src={image8}
          alt=""
        />
        <div className="flex items-center justify-center bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] h-screen w-screen z-99">
          <div className="bg-[rgba(88,130,193,0.28)] rounded-[40px] w-[500px] h-[550px] border border-solid backdrop-blur-sm">
            <div className="flex flex-col p-12 gap-8 text-white">
              <div className="font-semibold text-xl font-gilroy">Sign Up</div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-white text-sm text-black">
                  <div>Username</div>
                  <div>
                    <input
                      placeholder="username"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Password</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Confirm Password</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={confirmpass}
                      onChange={(e) => setConfirmpass(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                class="flex items-center justify-center bg-[#BD0C47] rounded-[10px] w-full h-[50px]"
                onClick={handleRegister}
              >
                Register
              </button>
              <div className="flex items-center justify-center">
                <Link to="/LogIn">
                  <button className="text-gray-300 text-sm">
                    Already have an account ?{" "}
                    <span className="text-white">Go to Login</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
