import React, { useState } from "react";
import "../../theme/pallet.css";
import {
  IonButton,
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

export const TransferMenu = () => {
  const [user, setUser] = useState<string>();
  const [myValues, setMyValues] = useState([
    "1 - PALLETE (ESCOLOOL5)",
    "2 - MATERIAL (ESCOLOOL6)",
  ]);
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuQuery">
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
      </IonContent>
    </>
  );
};

export default TransferMenu;
