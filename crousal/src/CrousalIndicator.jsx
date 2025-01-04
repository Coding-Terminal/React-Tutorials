import React from "react";

const CrousalIndicator = ({ data, currentIdx }) => {
  return (
    <div className="crousalIndicator">
      {data.map((item, idx) => (
        <div key={idx}
          className={
            idx == currentIdx ? "activeIndicator" : "inactiveIndicator"
          }
        ></div>
      ))}
    </div>
  );
};

export default CrousalIndicator;
