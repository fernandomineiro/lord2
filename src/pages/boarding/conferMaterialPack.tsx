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

export const BalancePallet = () => {
  const [user, setUser] = useState<string>();
  const [text, setText] = useState<string>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>
      <br />

      <IonContent className="menuPallete">
        <IonLabel
          style={{
            margin: "0",
            position: "absolute",
            top: "1%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Codº de Barras
        </IonLabel>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "90%",
            marginTop: "8%",
          }}
        >
          <IonInput
            style={{
              margin: "0",
              position: "absolute",
              top: "17%",
              left: "10%",
              height: "50px",
              width: "70%",
            }}
            className="input"
            value={user}
            type="text"
            placeholder=""
            onIonChange={(e) => setUser(e.detail.value!)}
          ></IonInput>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              padding: 0,
            }}
          ></div>
          <IonButton color="primary" style={{ height: "50px", top: "5px" }}>
            ok
          </IonButton>
        </div>
        <IonTextarea
          style={{
            margin: "0",
            position: "absolute",
            top: "15%",
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

export default BalancePallet;
