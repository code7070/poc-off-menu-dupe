"use client";

import { useEffect, useState } from "react";
import "./styles.css";
import useScrollDirection from "./useScrollDirection";
import RevolverItem from "./item";
import { AnimatePresence, motion } from "framer-motion";
import PopupItem from "./popup";

interface IImage {
  src: string;
  name: string;
}
interface LISTItem {
  images: IImage[];
  name: string;
  category: string[];
}
export type TListItem = LISTItem;
export const LIST: LISTItem[] = [
  {
    name: "Nature",
    category: ["Nature", "Animals", "Plants"],
    images: [
      {
        src: "/carousel/matthew-smith-Rfflri94rs8-unsplash.jpg",
        name: "matthew-smith",
      },
      {
        src: "/carousel/aaron-burden-Kp9z6zcUfGw-unsplash.jpg",
        name: "aaron-burden",
      },
    ],
  },
  {
    name: "Interior",
    category: ["Interior", "Furniture", "Decor"],
    images: [
      {
        src: "/carousel/annie-spratt-tJ8x4oCQ5jE-unsplash.jpg",
        name: "annie-spratt",
      },
      {
        src: "/carousel/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
        name: "samantha-gades",
      },
    ],
  },
  {
    name: "Beach",
    category: ["Beach", "Nature", "Island"],
    images: [
      {
        src: "/carousel/rowan-heuvel-U6t80TWJ1DM-unsplash.jpg",
        name: "rowan-heuvel",
      },
      {
        src: "/carousel/chor-tsang-07mSKrzKiRw-unsplash.jpg",
        name: "chor-tsang",
      },
    ],
  },
  {
    name: "Foods",
    category: ["Foods", "Food", "Dining"],
    images: [
      {
        src: "/carousel/brooke-lark-C1fMH2Vej8A-unsplash.jpg",
        name: "brooke-lark",
      },
      {
        src: "/carousel/dan-gold-4_jhDO54BYg-unsplash.jpg",
        name: "dan-gold",
      },
    ],
  },
  {
    name: "Party",
    category: ["Party", "Party", "Party"],
    images: [
      {
        src: "/carousel/rachel-park-hrlvr2ZlUNk-unsplash.jpg",
        name: "rachel-park",
      },
      {
        src: "/carousel/syd-sujuaan-Z_-_ihPZQpE-unsplash.jpg",
        name: "dansyd-sujuaan",
      },
    ],
  },
  {
    name: "Fairy Tale",
    category: ["Fairy Tale", "Fantasy", "Magic"],
    images: [
      {
        src: "/carousel/francesco-ungaro-CPQesMVOZzY-unsplash.jpg",
        name: "francesco-ungaro",
      },
      {
        src: "/carousel/florian-van-duyn-Dm-qxdynoEc-unsplash.jpg",
        name: "florian-van-duyn",
      },
    ],
  },
];

export default function RevolverSlider() {
  const [step, setStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState<false | number>(false);

  function doOpen(index: number) {
    setOpen(index);
  }

  function doClose() {
    setOpen(false);
  }

  const scrollDirection = useScrollDirection(50);

  function calculateActiveIndex(step: number): number {
    const normalizedStep = step % LIST.length;
    return (LIST.length - normalizedStep) % LIST.length;
  }

  useEffect(() => {
    if (scrollDirection && open === false) {
      if (scrollDirection === "up") setStep((curr) => curr + 1);
      else setStep((curr) => curr - 1);
    }
  }, [scrollDirection, open]);

  useEffect(() => {
    setActiveIndex(calculateActiveIndex(step));
  }, [step]);

  return (
    // width from (itemWidth/2) * 6 =
    <section>
      <div className="w-[1900px] h-screen fixed top-[50%] right-0 -translate-y-[50%] translate-x-[70%] overflow-y-hidden overflow-x-visible  flex items-center justify-center">
        <motion.div
          variants={{
            initial: { rotate: 10, opacity: 0 },
            animate: {
              opacity: 1,
              rotate: 0,
              transition: { duration: 0.75, ease: "easeOut", delay: 0.25 },
            },
          }}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <div
            className={["revolver-slider"].join(" ")}
            data-step={step}
            style={{
              transform: `rotate(${step * 60}deg)`,
            }}
          >
            {[...LIST, ...LIST].map((v, i) => (
              <RevolverItem
                key={i}
                index={i}
                activeIndex={activeIndex}
                onClick={doOpen}
                {...v}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {typeof open === "number" && (
          <PopupItem onClose={doClose} item={LIST[open]} />
        )}
      </AnimatePresence>
    </section>
  );
}
