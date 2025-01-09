import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type TDirection = "up" | "down" | null;

const useScrollDirection = (delay = 50) => {
  const [direction, setDirection] = useState<TDirection>(null);
  const [debounced] = useDebounce(direction, delay);

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (e.deltaY > 0) setDirection("up");
      else setDirection("down");
      setTimeout(() => {
        setDirection(null);
      }, delay + 2.5);
    };

    window.addEventListener("wheel", handler);

    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, [delay]);

  return debounced;
};

export default useScrollDirection;
