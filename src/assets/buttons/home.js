import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

const HomeButton = () => {
  return (
    <Link to="/home">
      <Tilt>
        <svg
          style={{ height: "12.5vh" }}
          viewBox="0 0 63 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M18.75 10.8253L43.75 10.8253L56.25 32.476L43.75 54.1266L18.75 54.1266L6.25 32.476L18.75 10.8253Z"
              fill="#B5B5B5"
            />
            <path
              d="M18.75 10.8253L43.75 10.8253L56.25 32.476L43.75 54.1266L18.75 54.1266L6.25 32.476L18.75 10.8253Z"
              fill="#B5B5B5"
            />
          </g>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="central"
            stroke="#fff"
            fill="white"
            strokeWidth="0.25px"
            fontSize="0.68em"
          >
            Home
          </text>
          <defs>
            <filter
              id="filter0_d"
              x="0.25"
              y="5.82532"
              width="62"
              height="55.3013"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Tilt>
    </Link>
  );
};
export default HomeButton;
