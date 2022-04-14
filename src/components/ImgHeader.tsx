import React, { useState } from "react";
import { IonImg } from "@ionic/react";

const ImgHeader = () => {
  const [img, setImg] = useState("../assets/img/header.jpg");
  return (
    <>
      <IonImg
        src={img}
        style={{
          width: "80%",
          marginLeft: "10%",
          marginBottom: "-10px",
          marginTop: "0px",
        }}
      />
    </>
  );
};

export default ImgHeader;
