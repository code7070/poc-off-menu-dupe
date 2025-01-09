import { motion } from "framer-motion";
import { TListItem } from ".";
import ButtonClose from "./btn-close";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";

interface Props {
  onClose: () => void;
  item: TListItem;
}

export default function PopupItem({ onClose, item }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="pop-overlay"
    >
      <div className="slider-wrapper">
        <div className="slider-outer">
          <Swiper
            modules={[Navigation]}
            loop
            centeredSlides
            spaceBetween={80}
            slidesPerView={1.6}
            onSwiper={(e) => {
              setTimeout(() => e.slideTo(1), 200);
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {[...item.images, item.images[0]].map((i, n) => (
              <SwiperSlide key={n}>
                {({ isActive }) => (
                  <div
                    className={[
                      "slide-item",
                      isActive ? "slide-active" : "",
                    ].join(" ")}
                  >
                    <div className="slide-image-outer">
                      <div className="slide-image-inner">
                        <Image fill alt={i.name} src={i.src} />
                      </div>
                    </div>
                    <div className="slide-text">
                      <span className="st-name">{item.name}</span>
                      <span>{item.category.join(", ")}</span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <div className="nav-slider">
              <button type="button" className="swiper-button-prev  nav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button type="button" className="swiper-button-next  nav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>

      {/*  */}

      <ButtonClose onClick={onClose} />
    </motion.div>
  );
}
