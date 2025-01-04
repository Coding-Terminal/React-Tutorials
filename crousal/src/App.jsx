import React from "react";
import image1 from "./imageAssets/image1.jpg";
import image2 from "./imageAssets/image2.jpg";
import image3 from "./imageAssets/image3.jpg";
import image4 from "./imageAssets/image4.jpg";
import Crousal from "./Crousal";


const App = () => {
  const coursalData = [
    {
      imageLink: image1,
      title: "These are leaves ",
      description: "These are levas and they are beautiful",
    },
    {
      imageLink: image2,
      title: "These are Drops ",
      description: "These are Drops ",
    },
    {
      imageLink: image3,
      title: "These are gifts ",
      description: "These are gifts and they are beautiful",
    },
    {
      imageLink: image4,
      title: "These are  mountains ",
      description: "These are very beautiful mountains",
    },
  ];

  return <Crousal data={coursalData}></Crousal>;
};

export default App;
