"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="login-container">
      <div className="left-body">
        <div className="login-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 1.99999C13.1763 2.00044 9.96111 3.18337 7.42968 5.33719C4.89824 7.491 3.21564 10.4752 2.68288 13.7559C2.15012 17.0367 2.80195 20.3999 4.52177 23.2441C6.24158 26.0883 8.91719 28.2278 12.07 29.28C12.77 29.41 13.07 28.98 13.07 28.61V26.23C9.17998 27.07 8.35998 24.35 8.35998 24.35C8.08643 23.4928 7.5107 22.7643 6.73998 22.3C5.46998 21.44 6.83998 21.45 6.83998 21.45C7.28358 21.5127 7.707 21.6759 8.07789 21.9272C8.44878 22.1785 8.75733 22.5112 8.97998 22.9C9.36732 23.5947 10.0147 24.1072 10.7798 24.3247C11.5449 24.5422 12.3651 24.447 13.06 24.06C13.1164 23.3505 13.4292 22.6857 13.94 22.19C10.84 21.83 7.56998 20.63 7.56998 15.27C7.54731 13.8779 8.0632 12.5308 9.00998 11.51C8.58144 10.3042 8.63154 8.97997 9.14998 7.80999C9.14998 7.80999 10.32 7.42999 13 9.23999C15.2915 8.61494 17.7085 8.61494 20 9.23999C22.67 7.42999 23.84 7.80999 23.84 7.80999C24.3584 8.97997 24.4085 10.3042 23.98 11.51C24.9268 12.5308 25.4426 13.8779 25.42 15.27C25.42 20.65 22.15 21.83 19.03 22.18C19.3642 22.5188 19.6219 22.9252 19.7858 23.372C19.9497 23.8188 20.0159 24.2955 19.98 24.77V28.61C19.98 29.07 20.23 29.42 20.98 29.28C24.1369 28.2265 26.8153 26.0829 28.5348 23.2334C30.2544 20.384 30.9026 17.0152 30.3633 13.7312C29.824 10.4471 28.1324 7.46257 25.5918 5.31276C23.0513 3.16295 19.828 1.98849 16.5 1.99999Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="left-welcome-content login-item">
          <div className="left_heading">Welcome Back</div>
          <div className="left_welcome_p">
            Welcome back! Please enter your details.
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="left_form">
            <div className="left_inputs login-item">
              <input
                type="email"
                className=""
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleUsernameChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="left_inputs login-item">
              <input
                type="password"
                className=""
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="left_buttons login-item">
              <button className="signin_button" type="submit">
                Sign in
              </button>
              <button className="google_signin_button" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M24.1226 10.8783H23.25V10.8334H13.5V15.1667H19.6224C18.7292 17.6892 16.3291 19.5 13.5 19.5C9.91033 19.5 6.99996 16.5896 6.99996 13C6.99996 9.41039 9.91033 6.50002 13.5 6.50002C15.1569 6.50002 16.6644 7.1251 17.8122 8.14614L20.8764 5.08194C18.9415 3.27873 16.3535 2.16669 13.5 2.16669C7.51725 2.16669 2.66663 7.01731 2.66663 13C2.66663 18.9827 7.51725 23.8334 13.5 23.8334C19.4827 23.8334 24.3333 18.9827 24.3333 13C24.3333 12.2736 24.2585 11.5646 24.1226 10.8783Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.91577 7.95764L7.47506 10.5679C8.43815 8.18352 10.7706 6.50002 13.5 6.50002C15.157 6.50002 16.6644 7.1251 17.8122 8.14614L20.8764 5.08194C18.9416 3.27873 16.3535 2.16669 13.5 2.16669C9.33894 2.16669 5.73035 4.5159 3.91577 7.95764Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M13.5 23.8333C16.2982 23.8333 18.8408 22.7625 20.7632 21.021L17.4103 18.1838C16.2861 19.0387 14.9123 19.5011 13.5 19.5C10.6822 19.5 8.28967 17.7033 7.38834 15.1959L3.85559 17.9178C5.64851 21.4262 9.28959 23.8333 13.5 23.8333Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M24.1226 10.8783H23.25V10.8333H13.5V15.1666H19.6225C19.1952 16.3672 18.4256 17.4163 17.4087 18.1843L17.4103 18.1832L20.7632 21.0204C20.526 21.236 24.3333 18.4166 24.3333 13C24.3333 12.2736 24.2586 11.5646 24.1226 10.8783Z"
                    fill="#1976D2"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </form>

        <div className="register-group login-item">
          <span className="register-content">Need an account?</span>
          <button className="register-button">Create an account</button>
        </div>
      </div>

      <div className="right-body">
        <div className="right-content-container">
          <div className="top-dec">
            <div className="right-content-dec" />
            <div className="right-content-dec" />
          </div>
          <div className="right-content">
            <p>
              “Untitled truly has solved all our design and content problems,
              freeing up our time to work on more important things. We can't
              imagine working without it.”
            </p>
          </div>
          <div className="bottom-dec">
            <div className="right-content-dec" />
            <div className="right-content-dec" />
          </div>
        </div>
        <div className="right-auther">
          <div className="auther-name">Mischca Sullivan</div>
          <div className="auther-stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M7.49998 1.4375L5.36716 5.75938L0.599976 6.44844L4.04998 9.81406L3.23435 14.5625L7.49998 12.3219L11.7656 14.5625L10.95 9.81406L14.4 6.45312L9.63279 5.75938L7.49998 1.4375Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M7.49998 1.4375L5.36716 5.75938L0.599976 6.44844L4.04998 9.81406L3.23435 14.5625L7.49998 12.3219L11.7656 14.5625L10.95 9.81406L14.4 6.45312L9.63279 5.75938L7.49998 1.4375Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M7.49998 1.4375L5.36716 5.75938L0.599976 6.44844L4.04998 9.81406L3.23435 14.5625L7.49998 12.3219L11.7656 14.5625L10.95 9.81406L14.4 6.45312L9.63279 5.75938L7.49998 1.4375Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M7.49998 1.4375L5.36716 5.75938L0.599976 6.44844L4.04998 9.81406L3.23435 14.5625L7.49998 12.3219L11.7656 14.5625L10.95 9.81406L14.4 6.45312L9.63279 5.75938L7.49998 1.4375Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M7.49998 1.4375L5.36716 5.75938L0.599976 6.44844L4.04998 9.81406L3.23435 14.5625L7.49998 12.3219L11.7656 14.5625L10.95 9.81406L14.4 6.45312L9.63279 5.75938L7.49998 1.4375Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="company-slide">
          <div className="company-name">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M23 17L25.23 21.32L30 22L26.5 25.167L28 30L23 27.208L18 30L19.5 25.167L16 22L20.9 21.32L23 17Z"
                fill="white"
              />
              <path
                d="M25 5H22V4C21.9984 3.47005 21.7872 2.96227 21.4125 2.58753C21.0377 2.2128 20.5299 2.00158 20 2H12C11.4701 2.00158 10.9623 2.2128 10.5875 2.58753C10.2128 2.96227 10.0016 3.47005 10 4V5H7C6.47005 5.00158 5.96227 5.2128 5.58753 5.58753C5.2128 5.96227 5.00158 6.47005 5 7V28C5.00158 28.5299 5.2128 29.0377 5.58753 29.4125C5.96227 29.7872 6.47005 29.9984 7 30H14V28H7V7H10V10H22V7H25V14H27V7C26.9984 6.47005 26.7872 5.96227 26.4125 5.58753C26.0377 5.2128 25.5299 5.00158 25 5ZM20 8H12V4H20V8Z"
                fill="white"
              />
            </svg>
            <div className="company-name">Kai Agency</div>
          </div>
          <div className="slide-arrows">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.8125 9.99999C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H5.39063L9.41563 14.9617C9.59175 15.1378 9.6907 15.3767 9.6907 15.6258C9.6907 15.8748 9.59175 16.1137 9.41563 16.2898C9.23951 16.466 9.00064 16.5649 8.75157 16.5649C8.5025 16.5649 8.26363 16.466 8.08751 16.2898L2.46251 10.6648C2.37511 10.5777 2.30576 10.4742 2.25844 10.3603C2.21112 10.2463 2.18677 10.1242 2.18677 10.0008C2.18677 9.87738 2.21112 9.75521 2.25844 9.64125C2.30576 9.5273 2.37511 9.42381 2.46251 9.33671L8.08751 3.71171C8.17471 3.6245 8.27824 3.55533 8.39218 3.50813C8.50612 3.46094 8.62824 3.43665 8.75157 3.43665C8.8749 3.43665 8.99702 3.46094 9.11096 3.50813C9.2249 3.55533 9.32843 3.6245 9.41563 3.71171C9.50284 3.79891 9.57201 3.90244 9.61921 4.01638C9.6664 4.13032 9.6907 4.25244 9.6907 4.37577C9.6907 4.4991 9.6664 4.62122 9.61921 4.73516C9.57201 4.8491 9.50284 4.95263 9.41563 5.03983L5.39063 9.06249H16.875C17.1236 9.06249 17.3621 9.16126 17.5379 9.33708C17.7137 9.51289 17.8125 9.75135 17.8125 9.99999Z"
                  fill="white"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5383 10.6633L11.9133 16.2883C11.7372 16.4644 11.4983 16.5634 11.2492 16.5634C11.0001 16.5634 10.7613 16.4644 10.5852 16.2883C10.409 16.1122 10.3101 15.8733 10.3101 15.6242C10.3101 15.3752 10.409 15.1363 10.5852 14.9602L14.6094 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2487 2.1875 10C2.1875 9.75137 2.28627 9.51292 2.46209 9.3371C2.6379 9.16129 2.87636 9.06252 3.125 9.06252H14.6094L10.5867 5.03751C10.4106 4.86139 10.3117 4.62252 10.3117 4.37345C10.3117 4.12438 10.4106 3.88551 10.5867 3.70939C10.7628 3.53327 11.0017 3.43433 11.2508 3.43433C11.4999 3.43433 11.7387 3.53327 11.9148 3.70939L17.5398 9.33439C17.6273 9.4216 17.6966 9.52523 17.7438 9.63931C17.7911 9.75339 17.8153 9.87569 17.8152 9.99917C17.815 10.1226 17.7905 10.2449 17.743 10.3589C17.6955 10.4728 17.6259 10.5763 17.5383 10.6633Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
