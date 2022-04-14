import React from "react";
import { IonItem, IonLabel } from "@ionic/react";
import "../theme/global.css";
const HeaderDanger = () => {
  return (
    <>
      <div>
        <IonItem color="secondary">
          <IonLabel className="text">Item</IonLabel>
        </IonItem>
      </div>
    </>
  );
};

export default HeaderDanger;
