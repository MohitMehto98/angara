import { useEffect, useRef, useState } from "react";
import data from "./data.json";

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef(null);
  const handleNext = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex == data.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrev = () => {
    if (imageIndex == 0) {
      setImageIndex(data.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <>
      <div
        className="container"
        onMouseEnter={() => clearInterval(ref.current)}
        onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
      >
        <div className="left-arrow" onClick={() => handlePrev()}>
          {"<"}
        </div>
        <img src={data[imageIndex].download_url} alt="" />
        <div className="right-arrow" onClick={() => handleNext()}>
          {">"}
        </div>
      </div>
    </>
  );
}
