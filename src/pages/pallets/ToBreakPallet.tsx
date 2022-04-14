import React, { useState } from "react";
import "../../theme/pallet.css";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import Tabs from "../../components/Tabs";
import HeaderTab from "../../components/HeaderTab";

export const ToBreakPallet = () => {
  const [user, setUser] = useState<string>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuPallete">
        <IonInput
          style={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "10%",
            height: "50px",
          }}
          className="input"
          value={user}
          type="text"
          placeholder="Quantidade"
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
        <Tabs />
      </IonContent>
    </>
  );
};

export default ToBreakPallet;
