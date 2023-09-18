import Image from "next/image";

export default function Home() {
  return (
    <main className="login-container">
      <div className="left-body">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 1.99999C13.1763 2.00044 9.96111 3.18337 7.42968 5.33719C4.89824 7.491 3.21564 10.4752 2.68288 13.7559C2.15012 17.0367 2.80195 20.3999 4.52177 23.2441C6.24158 26.0883 8.91719 28.2278 12.07 29.28C12.77 29.41 13.07 28.98 13.07 28.61V26.23C9.17998 27.07 8.35998 24.35 8.35998 24.35C8.08643 23.4928 7.5107 22.7643 6.73998 22.3C5.46998 21.44 6.83998 21.45 6.83998 21.45C7.28358 21.5127 7.707 21.6759 8.07789 21.9272C8.44878 22.1785 8.75733 22.5112 8.97998 22.9C9.36732 23.5947 10.0147 24.1072 10.7798 24.3247C11.5449 24.5422 12.3651 24.447 13.06 24.06C13.1164 23.3505 13.4292 22.6857 13.94 22.19C10.84 21.83 7.56998 20.63 7.56998 15.27C7.54731 13.8779 8.0632 12.5308 9.00998 11.51C8.58144 10.3042 8.63154 8.97997 9.14998 7.80999C9.14998 7.80999 10.32 7.42999 13 9.23999C15.2915 8.61494 17.7085 8.61494 20 9.23999C22.67 7.42999 23.84 7.80999 23.84 7.80999C24.3584 8.97997 24.4085 10.3042 23.98 11.51C24.9268 12.5308 25.4426 13.8779 25.42 15.27C25.42 20.65 22.15 21.83 19.03 22.18C19.3642 22.5188 19.6219 22.9252 19.7858 23.372C19.9497 23.8188 20.0159 24.2955 19.98 24.77V28.61C19.98 29.07 20.23 29.42 20.98 29.28C24.1369 28.2265 26.8153 26.0829 28.5348 23.2334C30.2544 20.384 30.9026 17.0152 30.3633 13.7312C29.824 10.4471 28.1324 7.46257 25.5918 5.31276C23.0513 3.16295 19.828 1.98849 16.5 1.99999Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="left-welcome-content">
          <div className="left_heading">Welcome Back</div>
          <div className="left_welcome_p">
            Welcome back! Please enter your details.
          </div>
        </div>

        <div className="left_inputs">
          <input type="email" className="" placeholder="Email" />
        </div>

        <div className="left_inputs">
          <input type="password" className="" placeholder="Password" />
        </div>

        <div className="left_buttons">
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
        <div className="register-group">
          <span className="register-content">Need an account?</span>
          <button className="register-button">Create an account</button>
          </div>
      </div>

      <div className="right-body">
        <div className="right-content">
          1
        </div>
        <div className="right-auther">
          <div className="auther-name"></div>
          <div className="stars"></div>
        </div>
        <div className="right-company">
          <div className="company-name"></div>
          <div className="arrows"></div>
        </div>
      </div>
    </main>
  );
}
