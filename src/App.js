import React, { useState } from "react";
import Title from "./components/Title";
import FormUpload from "./components/FormUpload";
import Grid from "./components/Grid";
import ImgModal from "./components/ImgModal";
import Navbar from "./components/navbar/Navbar";
import HeaderLogo from "./components/HeaderLogo";
import CustomJS from "./CustomJS";

function App() {
  // State to determine specific image for the img modal pop-up:
  const [currImage, setCurrImage] = useState(null);

  return (
    <div className="App">
      <CustomJS />
      <HeaderLogo />
      <Navbar />
      <Title />
      <FormUpload />
      <Grid setCurrImage={setCurrImage} />
      {currImage && (
        <ImgModal currImage={currImage} setCurrImage={setCurrImage} />
      )}
    </div>
  );
}

export default App;
