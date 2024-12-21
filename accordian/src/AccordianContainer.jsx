import React, { useState } from "react";
import AccordianBlock from "./AccordianBlock";

const AccordianContainer = ({ content }) => {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {content.map((obj, idx) => (
        <AccordianBlock
          key={obj.id}
          {...obj}
          selfIdx={idx}
          openIdx={open}
          setOpen={setOpen}
        ></AccordianBlock>
      ))}
    </div>
  );
};

export default AccordianContainer;
