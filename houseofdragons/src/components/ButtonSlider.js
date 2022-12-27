import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../style/buttonSlider.css";

export const ButtonSlider = ({ direction, moveSlide }) => {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img
          src={direction === "next" ? IoIosArrowForward : IoIosArrowBack}
          alt="arrows"
        />
      </button>
    </div>
  );
};

