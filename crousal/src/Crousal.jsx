import React, { useState, useEffect, useRef } from "react";
import BackIcon from "./icons/BackIcon";
import ForwardIcon from "./icons/ForwardIcon";
import CrousalIndicator from "./CrousalIndicator";

const Crousal = ({ data }) => {
  let [idx, setIdx] = useState(0);

  if (data.length === 0) return null;

  const timer = useRef(null);

  const resetTimer = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIdx((prevIdx) => (prevIdx == data.length - 1 ? 0 : prevIdx + 1));
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      clearTimeout(timer.current);
    };
  }, [idx]);

  const forwardBtnHandler = () => {
    resetTimer();
    idx == data.length - 1 ? setIdx(0) : setIdx(idx + 1);
  };
  const backBtnHandler = () => {
    resetTimer();
    idx == 0 ? setIdx(data.length - 1) : setIdx(idx - 1);
  };

  return (
    <div className="crousalContainer">
      <div className="imageContainer">
        <img className="image" src={data[idx]?.imageLink}></img>
      </div>
      <div className="backBtn" onClick={backBtnHandler}>
        <BackIcon />
      </div>
      <div className="forwardBtn" onClick={forwardBtnHandler}>
        <ForwardIcon />
      </div>
      <div className="textContainer">
        <h3>{data[idx]?.title}</h3>
        <p>{data[idx]?.description}</p>
        <CrousalIndicator data={data} currentIdx={idx}></CrousalIndicator>
      </div>
    </div>
  );
};

export default Crousal;
