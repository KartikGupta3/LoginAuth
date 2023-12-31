import { useState } from "react";
import React from "react";
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
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      const response = await axios.post(
        "http://localhost:4170/login",
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
      if (response.data === "Success") {
        window.location.href = "/Success";
      }
    } catch (error) {
      console.error("Error: Unexpected response status");
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
            <div className="flex flex-col p-12 gap-4 text-white">
              <div className="font-semibold text-xl font-gilroy">Login</div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Username</div>
                  <div>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="user@gmail.com"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Password</div>
                  <div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                    />
                  </div>
                </div>
              </div>
              <button className="text-sm">Forgot Password ?</button>
              <button
                class="flex items-center justify-center bg-[#BD0C47] rounded-[10px] w-full h-[50px]"
                onClick={handleLogIn}
              >
                Log In
              </button>
              <div className="flex flex-col items-center gap-4">
                <div className="text-sm">or continue with</div>
                <button className="flex gap-8">
                  <button class=" flex items-center justify-center bg-[#ffffff] rounded-[10px] border-solid border-[#bcbec0] border w-16 lg:w-[116px] h-[40px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.7662 9.64963H22.7996V9.59983H11.9998V14.3998H18.7815C17.7921 17.1939 15.1335 19.1997 11.9998 19.1997C8.02366 19.1997 4.79992 15.9759 4.79992 11.9998C4.79992 8.02366 8.02366 4.79992 11.9998 4.79992C13.8352 4.79992 15.5049 5.4923 16.7763 6.62329L20.1705 3.22914C18.0273 1.23178 15.1605 0 11.9998 0C5.37291 0 0 5.37291 0 11.9998C0 18.6267 5.37291 23.9996 11.9998 23.9996C18.6267 23.9996 23.9996 18.6267 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64963Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M1.38278 6.41449L5.32531 9.30584C6.3921 6.66468 8.97565 4.79992 11.999 4.79992C13.8344 4.79992 15.5041 5.4923 16.7755 6.62328L20.1697 3.22914C18.0265 1.23178 15.1597 0 11.999 0C7.38988 0 3.39275 2.60215 1.38278 6.41449Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12 24C15.0995 24 17.9159 22.8138 20.0452 20.8848L16.3313 17.7421C15.0861 18.6891 13.5644 19.2013 12 19.2001C8.87884 19.2001 6.22868 17.2099 5.2303 14.4326L1.31717 17.4475C3.30313 21.3336 7.33627 24 12 24Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M23.7662 9.64964H22.7996V9.59984H11.9998V14.3998H18.7815C18.3082 15.7296 17.4557 16.8916 16.3293 17.7423L16.3311 17.7411L20.045 20.8838C19.7823 21.1226 23.9996 17.9997 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64964Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </button>
                  <button class=" flex items-center justify-center bg-[#ffffff] rounded-[10px] border-solid border-[#bcbec0] border w-16 lg:w-[116px] h-[40px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button class=" flex items-center justify-center bg-[#ffffff] rounded-[10px] border-solid border-[#bcbec0] border w-16 lg:w-[116px] h-[40px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12.0735C24 5.4045 18.627 -0.00149536 12 -0.00149536C5.36999 4.63868e-06 -0.00300598 5.40451 -0.00300598 12.075C-0.00300598 18.1005 4.38599 23.0955 10.122 24.0015V15.564H7.07699V12.075H10.125V9.4125C10.125 6.387 11.9175 4.716 14.658 4.716C15.972 4.716 17.3445 4.9515 17.3445 4.9515V7.9215H15.831C14.3415 7.9215 13.8765 8.853 13.8765 9.8085V12.0735H17.2035L16.6725 15.5625H13.875V24C19.611 23.094 24 18.099 24 12.0735Z"
                        fill="#059BE5"
                      />
                    </svg>
                  </button>
                </button>
                <Link to="/SignUp">
                  <button className="text-gray-300 text-sm">
                    Don’t have an account yet?{" "}
                    <span className="text-white">Register for free</span>
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

export default Login;
