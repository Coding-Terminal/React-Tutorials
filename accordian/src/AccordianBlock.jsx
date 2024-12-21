import React, { useState } from "react";
import ArrowRight from "./icons/ArrowRight";
import ArrowUp from "./icons/ArrowUp";

const AccordianBlock = ({ heading, content, selfIdx, openIdx, setOpen }) => {
  return (
    <div>
      <div className="headingContainer">
        <p> {heading || "Coding Terminal"}</p>
        <p
          className="closebtn"
          onClick={() => {
            selfIdx == openIdx ? setOpen(null) : setOpen(selfIdx);
          }}
        >
          {" "}
          {selfIdx == openIdx ? (
            <ArrowUp></ArrowUp>
          ) : (
            <ArrowRight></ArrowRight>
          )}{" "}
        </p>
      </div>
      {selfIdx == openIdx ? (
        <div className="contentConatiner">
          <p> {content || "Subscribe to coding terminal "} </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AccordianBlock;
