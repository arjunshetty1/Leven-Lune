"use client";
import Image from "next/image";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.jpg";
const RelatedPrdScroller = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="mt-20">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
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
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
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
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 4,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
        itemContainerProps={{
          style: {
            marginRight: "40px", // Adjust this value to set the desired gap between slides
          },
        }}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 300, height: 300, background: "#ff80ed" }}>
          <Image
            src={slider1}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
        </div>
        <div
          style={{ width: 300, height: 300, background: "#065535" }}
          className="object-cover w-full md:h-full min-h-[400px]"
        >
          <Image
            src={slider2}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
          <p>Product Price</p>
        </div>
        <div
          style={{ width: 300, height: 300, background: "#000000" }}
          className="object-cover w-full md:h-full min-h-[400px]"
        >
          <Image
            src={slider3}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
        </div>
        <div
          style={{ width: 300, height: 300, background: "#133337" }}
          className="object-cover w-full md:h-full min-h-[400px]"
        >
          <Image
            src={slider1}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
        </div>
        <div
          style={{ width: 300, height: 300, background: "#ffc0cb" }}
          className="object-cover w-full md:h-full min-h-[400px]"
        >
          <Image
            src={slider2}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
        </div>
        <div
          style={{ width: 300, height: 300, background: "#ffffff" }}
          className="object-cover w-full md:h-full min-h-[400px]"
        >
          <Image
            src={slider3}
            alt="slider_image"
            className="object-cover w-full md:h-full min-h-[400px]"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};

export default RelatedPrdScroller;
