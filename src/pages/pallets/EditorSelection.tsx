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

export const EditorSelection = () => {
  const [user, setUser] = useState<string>();
  const [text, setText] = useState<string>();

  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuQuery">
        <IonTextarea
          style={{
            margin: "0",
            position: "absolute",
            top: "3%",
            left: "10%",
            height: "300px",
            border: "1px solid black",
            width: "80%",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          placeholder=""
          value={text}
          onIonChange={(e) => setText(e.detail.value!)}
        ></IonTextarea>

        <IonLabel
          style={{
            margin: "0",
            position: "relative",
            MarginTop: "60%",
            left: "10%",
            top: "50%",
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
            top: "50%",
            left: "10%",
            height: "50px",
            marginBottom: "3%",
          }}
          className="input"
          value={user}
          type="text"
          placeholder=""
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
        <Tabs />
      </IonContent>
    </>
  );
};

export default EditorSelection;
