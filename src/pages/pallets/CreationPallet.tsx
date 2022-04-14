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

export const CreationPallet = () => {
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
            top: "45%",
            left: "10%",
            height: "50px",
          }}
          className="input"
          value={user}
          type="text"
          placeholder="Depósito"
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
        <IonInput
          style={{
            margin: "0",
            position: "absolute",
            top: "60%",
            left: "10%",
            height: "50px",
          }}
          className="input"
          value={user}
          type="text"
          placeholder="Localização"
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
        <Tabs />
      </IonContent>
    </>
  );
};

export default CreationPallet;
