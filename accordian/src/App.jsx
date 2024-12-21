import React from "react";
import AccordianContainer from "./AccordianContainer";

let accordianContent = [
  {
    id: "123",
    heading: "Coding Terminal Hey",
    content: "Subscribe to our channel1 ",
  },
  {
    id: "121",
    heading: "Coding Terminal Hello ",
    content: "Subscribe to our channel2 ",
  },
  {
    id: "1239",
    heading: "Coding Terminal Buy ",
    content: "Subscribe to our channel3 ",
  },
  {
    id: "12e3",
    heading: "Coding Terminal saturady ",
    content: "Subscribe to our channel4 ",
  },
];

const App = () => {
  return (
    <>
    <AccordianContainer content={accordianContent}></AccordianContainer>
    </>
  )
};

export default App;
