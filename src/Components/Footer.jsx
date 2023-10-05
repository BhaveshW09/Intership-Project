import React from "react";

export const Footer = () => {
  return (
    <>
      <div className=" bg-[#202221] text-white ">
        <div
          className="  text-xs flex flex-col lg:flex-row 
        lg:max-w-[1280px] mx-4  lg:m-auto justify-center items-center lg:justify-between py-10 gap-10"
        >
          {/* Left Footer */}
          <div className=" max-w-[600px] m-auto flex flex-col justify-center lg:justify-between gap-10 ">
            <div className="">
              <input
                className=" border p-1 rounded-md relative w-[350px] lg:w-[392px] px-6 py-3 bg-[#202221] "
                type="text"
                placeholder="Enter your email here"
              />
              <button className=" rounded-md py-2 px-4 bg-black absolute left-[192px] lg:left-[355px] mt-[5px]">
                Subscribe To Newsletter
              </button>
            </div>
            <div className="">
              <h3 className=" text-2xl font-semibold ">
                Signup and start enjoying the benifits today!
              </h3>
              <button className=" mt-5 py-3 px-6 rounded-2xl bg-[#7D59C3] text-white">
                Sign Up To Lilypads
              </button>
            </div>
            <div className=" flex w-[400px]">
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_12)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <g clip-path="url(#clip0_731_12)">
                  <path
                    d="M37 22.6667C32.3975 22.6667 28.6667 26.3975 28.6667 31C28.6667 35.1592 31.7142 38.6067 35.6984 39.2325V33.4083H33.5817V31H35.6984V29.1642C35.6984 27.0758 36.9417 25.9225 38.8459 25.9225C39.7575 25.9225 40.7109 26.085 40.7109 26.085V28.135H39.6609C38.625 28.135 38.3025 28.7775 38.3025 29.4367V31H40.6134L40.2442 33.4083H38.3025V39.2325C42.2859 38.6075 45.3334 35.1583 45.3334 31C45.3334 26.3975 41.6025 22.6667 37 22.6667Z"
                    fill="#7C5AC7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_12"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_12"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_12"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_12"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_731_12">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(27 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_18)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <g clip-path="url(#clip0_731_18)">
                  <path
                    d="M45.4683 25.7133C44.8321 25.9947 44.1574 26.1796 43.4666 26.2617C44.1948 25.8262 44.7397 25.1408 45 24.3333C44.3166 24.74 43.5675 25.025 42.7866 25.1792C42.2622 24.618 41.5669 24.2458 40.8091 24.1205C40.0513 23.9952 39.2733 24.1237 38.596 24.4862C37.9188 24.8487 37.3803 25.4247 37.0642 26.1248C36.7482 26.8249 36.6723 27.6098 36.8483 28.3575C35.4626 28.288 34.1069 27.9279 32.8694 27.3006C31.6319 26.6732 30.5401 25.7925 29.665 24.7158C29.3552 25.2479 29.1924 25.8527 29.1933 26.4683C29.1933 27.6767 29.8083 28.7442 30.7433 29.3692C30.19 29.3517 29.6488 29.2023 29.165 28.9333V28.9767C29.1651 29.7814 29.4436 30.5613 29.9532 31.1842C30.4628 31.8071 31.1721 32.2346 31.9608 32.3942C31.4472 32.5334 30.9086 32.5539 30.3858 32.4542C30.6082 33.1469 31.0417 33.7527 31.6255 34.1868C32.2093 34.6208 32.9143 34.8615 33.6416 34.875C32.9187 35.4428 32.091 35.8625 31.2057 36.1101C30.3205 36.3578 29.3951 36.4285 28.4825 36.3183C30.0756 37.3429 31.9301 37.8868 33.8241 37.885C40.235 37.885 43.7408 32.5742 43.7408 27.9683C43.7408 27.8183 43.7366 27.6667 43.73 27.5183C44.4124 27.0251 45.0013 26.4142 45.4691 25.7142L45.4683 25.7133Z"
                    fill="#7C5AC7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_18"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_18"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_18"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_18"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_731_18">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(27 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_24)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <g clip-path="url(#clip0_731_24)">
                  <path
                    d="M32.7833 25.1667C32.7831 25.6087 32.6073 26.0325 32.2946 26.3449C31.9819 26.6573 31.5579 26.8327 31.1158 26.8325C30.6738 26.8323 30.25 26.6565 29.9376 26.3438C29.6252 26.031 29.4498 25.607 29.45 25.165C29.4502 24.723 29.626 24.2991 29.9388 23.9867C30.2515 23.6743 30.6755 23.499 31.1175 23.4992C31.5595 23.4994 31.9834 23.6752 32.2958 23.9879C32.6082 24.3006 32.7836 24.7246 32.7833 25.1667ZM32.8333 28.0667H29.5V38.5H32.8333V28.0667ZM38.1 28.0667H34.7833V38.5H38.0667V33.025C38.0667 29.975 42.0417 29.6917 42.0417 33.025V38.5H45.3333V31.8917C45.3333 26.75 39.45 26.9417 38.0667 29.4667L38.1 28.0667Z"
                    fill="#7C5AC7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_24"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_24"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_24"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_24"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_731_24">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(27 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_60)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <g clip-path="url(#clip0_731_60)">
                  <path
                    d="M44.9525 26.415C45.3333 27.9 45.3333 31 45.3333 31C45.3333 31 45.3333 34.1 44.9525 35.585C44.7408 36.4058 44.1217 37.0517 43.3375 37.27C41.9133 37.6667 37 37.6667 37 37.6667C37 37.6667 32.0892 37.6667 30.6625 37.27C29.875 37.0483 29.2567 36.4033 29.0475 35.585C28.6667 34.1 28.6667 31 28.6667 31C28.6667 31 28.6667 27.9 29.0475 26.415C29.2592 25.5942 29.8783 24.9483 30.6625 24.73C32.0892 24.3333 37 24.3333 37 24.3333C37 24.3333 41.9133 24.3333 43.3375 24.73C44.125 24.9517 44.7433 25.5967 44.9525 26.415ZM35.3333 33.9167L40.3333 31L35.3333 28.0833V33.9167Z"
                    fill="#7D59C3"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_60"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_60"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_60"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_60"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_731_60">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(27 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_66)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <path
                  d="M30.5941 27.0895C30.6135 26.8938 30.5393 26.6989 30.3916 26.5673L28.8983 24.7676V24.4977H33.5369L37.1227 32.361L40.2748 24.4977H44.6966V24.7668L43.4184 25.991C43.3087 26.0754 43.2556 26.2138 43.2767 26.3496V35.3485C43.2556 35.4852 43.3087 35.6228 43.4184 35.7071L44.6663 36.9313V37.2005H38.3925V36.9313L39.6825 35.6767C39.8107 35.5502 39.8107 35.5122 39.8107 35.319V28.0446L36.2174 37.1709H35.7323L31.5492 28.0446V34.1606C31.5146 34.4179 31.5998 34.6769 31.7812 34.8634L33.4619 36.9026V37.1718H28.6966V36.9026L30.3773 34.8634C30.5561 34.6769 30.6371 34.4162 30.5941 34.1606V27.0895Z"
                  fill="#7D59C3"
                />
                <defs>
                  <filter
                    id="filter0_d_731_66"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_66"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_66"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_66"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_731_72)">
                  <circle cx="37" cy="31" r="25" fill="white" />
                </g>
                <path
                  d="M31.2308 28.8808C31.2308 28.2325 31.3441 27.62 31.5675 27.0483C31.7808 26.4931 32.0979 25.9835 32.5016 25.5467C32.9046 25.1156 33.3657 24.7428 33.8716 24.4392C34.3907 24.1251 34.9527 23.8882 35.54 23.7358C36.1343 23.5798 36.7463 23.5011 37.3608 23.5017C38.31 23.5017 39.1933 23.7025 40.0125 24.1025C40.8209 24.4952 41.5091 25.0979 42.005 25.8475C42.5166 26.61 42.7708 27.4725 42.7708 28.4342C42.7708 29.0108 42.7141 29.575 42.5983 30.1267C42.4846 30.678 42.3038 31.2134 42.06 31.7208C41.8276 32.2121 41.5237 32.6662 41.1583 33.0683C40.791 33.4641 40.3463 33.7801 39.8516 33.9967C39.3146 34.232 38.7337 34.3505 38.1475 34.3442C37.74 34.3442 37.3333 34.2483 36.9316 34.0558C36.53 33.8642 36.2416 33.6008 36.0683 33.2633C36.0075 33.4975 35.9241 33.8358 35.8133 34.2783C35.7066 34.72 35.635 35.005 35.6033 35.1342C35.57 35.2625 35.5083 35.4767 35.4183 35.7733C35.3573 35.9928 35.279 36.2071 35.1841 36.4142L34.8975 36.9758C34.7735 37.2169 34.6349 37.4501 34.4825 37.6742C34.3316 37.8925 34.145 38.1533 33.9225 38.4534L33.7983 38.4975L33.7158 38.4075C33.6266 37.4634 33.5808 36.8983 33.5808 36.7117C33.5808 36.1592 33.6466 35.5392 33.7766 34.8508C33.9041 34.1633 34.1058 33.2992 34.3766 32.26C34.6475 31.2217 34.8025 30.6108 34.8441 30.43C34.6533 30.0408 34.5566 29.5325 34.5566 28.9075C34.5566 28.4083 34.7125 27.9408 35.025 27.5008C35.3383 27.0625 35.7341 26.8433 36.2141 26.8433C36.5816 26.8433 36.8666 26.965 37.0708 27.2092C37.2758 27.4525 37.3758 27.7592 37.3758 28.1333C37.3758 28.53 37.2441 29.1042 36.9791 29.855C36.7141 30.6067 36.5825 31.1675 36.5825 31.54C36.5825 31.9175 36.7175 32.2333 36.9875 32.4808C37.2539 32.7285 37.6063 32.8627 37.97 32.855C38.3 32.855 38.6058 32.78 38.89 32.6292C39.1697 32.4828 39.4118 32.2737 39.5975 32.0183C40.0018 31.4636 40.2901 30.833 40.445 30.1642C40.525 29.8125 40.5866 29.4783 40.625 29.1642C40.6658 28.8483 40.6833 28.55 40.6833 28.2667C40.6833 27.2275 40.3533 26.4175 39.6975 25.8375C39.0383 25.2575 38.18 24.9692 37.1241 24.9692C35.9233 24.9692 34.9191 25.3575 34.115 26.1367C33.31 26.9133 32.905 27.9008 32.905 29.0983C32.905 29.3625 32.945 29.6175 33.0208 29.8642C33.095 30.11 33.1758 30.3058 33.2633 30.4508C33.35 30.5933 33.4316 30.7325 33.5058 30.8608C33.5808 30.9892 33.62 31.0808 33.62 31.1358C33.62 31.3042 33.5758 31.5233 33.4866 31.7942C33.3941 32.065 33.285 32.2 33.1533 32.2C33.1408 32.2 33.0891 32.1908 32.9991 32.1717C32.6874 32.0786 32.4059 31.9047 32.1833 31.6675C31.947 31.4217 31.7605 31.1325 31.6341 30.8158C31.5081 30.5003 31.41 30.1743 31.3408 29.8417C31.2661 29.5269 31.2291 29.2044 31.2308 28.8808Z"
                  fill="#7D59C3"
                />
                <defs>
                  <filter
                    id="filter0_d_731_72"
                    x="0"
                    y="0"
                    width="74"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_731_72"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_72"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_72"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className=" m-auto w-96 h-[1px] lg:h-96 lg:w-[1px] bg-white opacity-60"></div>

          {/* Right Footer */}
          <div className=" flex max-w-[600px] justify-between items-center">
            {/* 1st sec */}
            <div className=" flex flex-col gap-10 ">
              <div>
                <svg
                  width="90"
                  height="54"
                  viewBox="0 0 90 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
                    fill="#322D76"
                  />
                  <path
                    d="M90 40.9651C84.9525 47.5181 77.6577 52.1985 69.1002 53.5849C60.3014 55.0104 51.7771 52.6929 44.9922 47.7653C50.0397 41.2123 57.3364 36.5319 65.892 35.1455C74.6889 33.7221 83.2151 36.0375 90 40.9651Z"
                    stroke="white"
                  />
                  <path
                    d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
                    fill="#322D76"
                  />
                  <path
                    d="M0 40.8456C6.61232 36.0705 14.8718 33.7612 23.453 34.9869C32.2753 36.2476 39.821 41.0145 44.992 47.7653C38.3797 52.5404 30.1182 54.8497 21.5391 53.624C12.7207 52.3612 5.17298 47.5943 0 40.8456Z"
                    stroke="white"
                  />
                  <g opacity="0.8">
                    <path
                      d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
                      fill="#A6244B"
                    />
                    <path
                      d="M74.9063 11.7876C75.1455 20.2152 72.5159 28.7581 66.886 35.6695C61.0973 42.7745 53.1946 46.8555 44.994 47.766C44.7547 39.3384 47.3844 30.7955 53.0142 23.8841C58.801 16.779 66.7036 12.6961 74.9063 11.7876Z"
                      stroke="white"
                    />
                  </g>
                  <g opacity="0.8">
                    <path
                      d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
                      fill="#A6244B"
                    />
                    <path
                      d="M15.5956 11.3201C23.5629 12.3315 31.2106 16.3362 36.8758 23.2167C42.6998 30.2909 45.3608 39.1078 44.9922 47.764C37.0248 46.7525 29.3752 42.7458 23.7119 35.8674C17.8879 28.7953 15.2269 19.9763 15.5956 11.3201Z"
                      stroke="white"
                    />
                  </g>
                  <path
                    d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
                    fill="#765EA8"
                  />
                  <path
                    d="M45.4531 0C50.8496 6.23983 54.1401 14.5253 54.1401 23.6223C54.1401 32.9749 50.6613 41.4725 44.9922 47.7659C39.5957 41.5261 36.3052 33.2386 36.3052 24.1435C36.3052 14.7931 39.784 6.29339 45.4531 0Z"
                    stroke="white"
                  />
                </svg>
              </div>
              <ul>
                <li>Network</li>
                <li className=" text-white opacity-60">Community</li>
                <li className=" text-white opacity-60">Investor</li>
                <li className=" text-white opacity-60">Broker</li>
              </ul>
              <ul>
                <li>Technology</li>
                <li className="text-white opacity-60">
                  Artificial Intelligence
                </li>
                <li className="text-white opacity-60">Block Chain</li>
              </ul>
            </div>

            {/* 2nd sec */}
            <div className=" flex flex-col gap-10  lg:mx-10">
              <div>
                <p>Reach Us At</p>
                <p className="text-white opacity-60">
                  6751 Columbia Gateway Dr., 3rd floor, Columbia, MD 21046
                </p>
              </div>
              <ul>
                <li>Product</li>
                <li className=" text-white opacity-60">Invest</li>
                <li className=" text-white opacity-60">Discover</li>
                <li className=" text-white opacity-60">Transact</li>
                <li className=" text-white opacity-60">Manage</li>
              </ul>
              <div>
                <p>Highlights</p>
                <p className="text-white opacity-60">
                  Impact of COVID-19 on the food and beverage industry and the
                  retail sector
                </p>
                <p className="text-white opacity-60">
                  Commercial lending during COVID-19: navigating the impact
                </p>
              </div>
            </div>

            {/* 3rd sec */}
            <div className=" flex flex-col gap-10 ">
              <ul>
                <li>Our Story</li>
                <li className="text-white opacity-60">Approach</li>
                <li className="text-white opacity-60">AboutUs</li>
              </ul>
              <ul>
                <li>Knowledge Center</li>
                <li className="text-white opacity-60">Resource</li>
                <li className="text-white opacity-60">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
