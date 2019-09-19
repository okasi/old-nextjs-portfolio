import React from "react";
import Tilt from "react-tilt";

const TwitterButton = () => {
  return (
    <a
      href="https://twitter.com/okasi_me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Tilt
        options={{
          reverse: true
        }}
      >
        <svg
          style={{ height: "11.5vh" }}
          viewBox="0 0 63 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M18.75 10.8253L43.75 10.8253L56.25 32.476L43.75 54.1266L18.75 54.1266L6.25 32.476L18.75 10.8253Z"
              fill="#008CFF"
            />
            <path
              d="M18.75 10.8253L43.75 10.8253L56.25 32.476L43.75 54.1266L18.75 54.1266L6.25 32.476L18.75 10.8253Z"
              fill="#008CFF"
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
            Twitter
          </text>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="74.5"
              height="76.9519"
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
    </a>
  );
};

export default TwitterButton;
