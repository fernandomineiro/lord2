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

export const TransferPallet = () => {
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
            position: "relative",
            MarginTop: "3%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Cod de Barras Pallete
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
            marginBottom: "3%",
            left: "10%",
            height: "50px",
          }}
          className="input"
          value={user}
          type="text"
          placeholder=""
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>
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
          Depósito
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
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
          Localização
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
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

        <HeaderTab />
        <br />
        <IonLabel
          style={{
            margin: "0",
            position: "relative",
            MarginTop: "10%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Depósito
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
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
          Localização
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
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

export default TransferPallet;
