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

export const Selection = () => {
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
        <IonLabel
          style={{
            margin: "0",
            position: "relative",
            MarginTop: "5%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Peso Bruto
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
            left: "10%",
            height: "50px",
            marginBottom: "3%",
            backgroundColor: "gray",
          }}
          className="input"
          value={user}
          type="text"
          placeholder=""
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
      </IonContent>
    </>
  );
};

export default Selection;
