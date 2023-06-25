import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaStarOfLife } from "react-icons/fa";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Numberimg from "../../public/assets/homepage/125.png";
import SliderLogo from "../../public/assets/homepage/90deglogo.png";
const SlideList = [
  {
    id: 1,
    image: SliderLogo,

    header: "WE CREATE THE TECH OF THE FUTURE",
    date: "20.05.2013",
  },
  {
    id: 2,
    image: SliderLogo,

    header: "WE CREATE THE TECH OF THE FUTURE",
    date: "20.05.2013",
  },
  {
    id: 3,
    image: SliderLogo,

    header: "WE CREATE THE TECH OF THE FUTURE",
    date: "20.05.2013",
  },
  {
    id: 4,
    image: SliderLogo,

    header: "WE CREATE THE TECH OF THE FUTURE",
    date: "20.05.2013",
  },
  {
    id: 5,
    image: SliderLogo,

    header: "WE CREATE THE TECH OF THE FUTURE",
    date: "20.05.2013",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const [showPagination, setShowPagination] = useState(false);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setShowArrows(false);
        setShowPagination(true);
        setPerPage(1);
      } else {
        setShowArrows(true);
        setShowPagination(false);
        setPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: showArrows,
    pagination: showPagination,
    start: currentSlide,
  };
  const videoPath = "/website-promo.mp4";
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div className="px-10">
        <div className="">
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1  gap-6">
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1 w-2/3">
              <div>
                {/* <div className="flex justify-end">
                  <div className="flex justify-between bg-ngl_white w-32 py-2 px-4 rounded-xl text-ngl_black rotate-[10deg] text-base">
                    <p>Gateway</p>
                    <FaStarOfLife size={10} className="my-auto" />
                  </div>
                </div> */}
                <p className="text-text_56 font-semibold leading-tight">
                  We are a team that put all of your options in one{" "}
                  <span className="text-ngl_orange">convenient location.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col text-ngl_black">
              <div>
                <Image
                  src={Numberimg}
                  alt="numver img"
                  className="w-40 h-auto"
                />
              </div>
              <p className="text-ngl_gray py-5">
                Already 125 companies around the world have approached us to
                modernize their business platform.
              </p>
              <div className="flex flex-row pb-2">
                <p className="text-ngl_orange">4.9</p>
                <p className="pl-2">Positive rating</p>
              </div>
              <div className="flex flex-row text-ngl_orange">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              <div className="pt-20">
                <Splide
                  options={splideOptions}
                  className="px-10  custom-splide "
                >
                  {SlideList.map((slide, index) => (
                    <SplideSlide key={index}>
                      <div
                        className={`flex justify-between p-6 mx-2 rounded-xl ${
                          index % 2 === 0 ? "bg-ngl_orange" : "bg-ngl_black"
                        } ${
                          index % 2 === 0 ? "text-ngl_black" : "text-ngl_white"
                        }`}
                      >
                        <div className="flex flex-col font-semibold w-3/5 my-auto">
                          <p className="text-lg">{slide.header}</p>
                          <p className="text-sm">{slide.date}</p>
                        </div>

                        <div className="">
                          <Image
                            src={slide.image}
                            alt="slider img"
                            className="mx-auto slider_img_w xsm:w-auto xsm:h-auto"
                          />
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
            <div className="">
              <video
                className="w-auto h-auto rounded-3xl"
                controls
                autoPlay
                // play={true}
                loop
                muted
              >
                <source src={videoPath} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
