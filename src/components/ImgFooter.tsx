import React, { useState } from "react";
import { IonImg } from "@ionic/react";

const ImgFooter = () => {
  const [img, setImg] = useState("../assets/img/footer.png");
  return (
    <>
      <IonImg
        src={img}
        style={{
          position: "fixed",
          left: "10%",
          bottom: 0,
          width: "80%",
          marginBottom: "10%",
        }}
      />
    </>
  );
};

export default ImgFooter;
