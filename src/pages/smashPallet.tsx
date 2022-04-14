import React, { useState } from "react";
import "../theme/pallet.css";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import Tabs from "../components/Tabs";
import HeaderTab from "../components/HeaderTab";

const SmashPallet = () => {
  const [user, setUser] = useState<string>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuPallete">
        <IonInput
          style={{ marginTop: "300px" }}
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

export default SmashPallet;
