import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

import Img1 from "../assets/item1.png";
import Img2 from "../assets/item4.png";
import Img3 from "../assets/item5.png";
import "../styles/Item.css";

export const ImgSlider = () => {
  const [currentImg, setCurrentImg] = useState(Img1);
  const [sliderImgs] = useState([Img1, Img2, Img3]);
  const [currenIdx, setCurrenIdx] = useState(0);

  const carouselBtnHandler = (next) => {
    let tempIdx = next ? currenIdx + 1 : currenIdx - 1;

    if (tempIdx > 2) {
      tempIdx = 0;
    } else if (tempIdx < 0) {
      tempIdx = 2;
    }
    setCurrentImg(sliderImgs[tempIdx]);
    setCurrenIdx(tempIdx);
  };

  return (
    <Container>
      <div className="d-flex d-flex justify-content-center align-items-center">
        <img style={{ width: "90%" }} src={currentImg} alt="slide" />
      </div>

      <div className="d-flex d-flex justify-content-center align-items-center mt-2">
        <span
          onClick={() => carouselBtnHandler(false)}
          className="round carouselBtn"
        >
          &#8249;
        </span>
        <img
          onClick={() => setCurrentImg(Img1)}
          style={{ width: "25%", marginLeft: "1%" }}
          src={Img1}
          alt="First slide"
        />
        <img
          onClick={() => setCurrentImg(Img2)}
          style={{ width: "25%", marginLeft: "1%" }}
          src={Img2}
          alt="First slide"
        />
        <img
          onClick={() => setCurrentImg(Img3)}
          style={{ width: "25%", marginLeft: "1%" }}
          src={Img3}
          alt="First slide"
        />
        <span
          onClick={() => carouselBtnHandler(true)}
          className="round carouselBtn"
        >
          &#8250;
        </span>
      </div>
    </Container>
  );
};
