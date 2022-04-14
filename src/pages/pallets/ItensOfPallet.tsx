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
  IonTextarea,
} from "@ionic/react";
import Tabs from "../../components/Tabs";
import HeaderTab from "../../components/HeaderTab";

export const ItensOfPallet = () => {
  const [user, setUser] = useState<string>();
  const [text, setText] = useState<string>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>
      <br />
      <IonContent>
        <p
          style={{
            display: "flex",
            fontSize: "20px",
            left: "10%",
            position: "relative",
            fontWeight: "bold",
          }}
        >
          Materiais do Palete: <span style={{ color: "red" }}>00001</span>
        </p>
        <IonTextarea
          style={{
            margin: "0",
            position: "absolute",
            top: "7%",
            left: "10%",
            height: "50%",
            border: "1px solid black",
            width: "80%",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          placeholder=""
          value={text}
          onIonChange={(e) => setText(e.detail.value!)}
        >
          <IonLabel
            style={{
              margin: "0",
              position: "absolute",
              top: "105%",
              left: "55%",
              height: "50px",
              width: "100%",
            }}
          ></IonLabel>
        </IonTextarea>
        <Tabs />
      </IonContent>
    </>
  );
};

export default ItensOfPallet;
