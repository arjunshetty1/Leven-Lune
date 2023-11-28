"use client";
import Image from "next/image";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.jpg";

const Hero = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="w-full  px-4 md:px-16">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginLeft: "2rem",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginRight: "2rem",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div className="min-w-[600px]  h-[400px] w-full md:w-[1200px] md:min-w-[200px] md:h-[500px]">
          <Image
            src={slider1}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]  "
          />
        </div>
        <div className=" min-w-[600px] h-[400px] w-full md:w-[1200px] md:min-w-[200px] md:h-[500px]">
          <Image
            src={slider2}
            alt="slider_image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="min-w-[600px] h-[400px] w-full md:w-[1200px]  md:min-w-[200px] md:h-[500px]">
          <Image
            src={slider3}
            alt="slider_image"
            className="object-cover w-full h-full"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};

export default Hero;
