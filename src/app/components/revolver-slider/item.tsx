import Image from "next/image";
import { TListItem } from ".";
import "./styles.css";

interface IProps extends TListItem {
  index: number;
  activeIndex: number;
  onClick: () => void;
}

export default function RevolverItem({
  index: i,
  onClick,
  activeIndex,
  ...v
}: IProps) {
  return (
    <>
      <button
        key={i}
        className={["rs-item", activeIndex === i ? "active" : ""].join(" ")}
        type="button"
        onClick={onClick}
      >
        <div className="rs-item__image">
          <Image fill alt={v.name} src={v.images[0]?.src} />
        </div>
        <div className="rs-item__text">
          <span className="name">{v.name}</span>
          <span>{v.category.join(", ")}</span>
        </div>
      </button>
    </>
  );
}
