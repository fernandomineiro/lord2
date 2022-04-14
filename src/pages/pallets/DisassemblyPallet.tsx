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

export const DisassemblyPallet = () => {
  const [user, setUser] = useState<string>();

  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuQuery">
        <p
          style={{
            display: "flex",
            fontSize: "20px",
            left: "10%",
            position: "relative",
            fontWeight: "bold",
          }}
        >
          Pallete Nº:{" "}
          <span style={{ color: "red", marginLeft: "1%" }}>00001</span>
        </p>

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
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "90%",
            marginTop: "8%",
          }}
        >
          <IonLabel
            style={{
              margin: "0",
              position: "relative",
              MarginTop: "0%",
              top: "-12px",
              width: "100%",
              left: "11%",
              height: "50px",
              fontSize: "20px",
            }}
          >
            Pallet Destino
          </IonLabel>
          <IonInput
            style={{
              margin: "0",
              position: "absolute",
              top: "17%",
              left: "11%",
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
          <IonButton
            color="primary"
            style={{ height: "50px", top: "5px", float: "right" }}
          >
            Criar
          </IonButton>
        </div>

        <IonLabel
          style={{
            margin: "0",
            position: "relative",
            MarginTop: "0%",
            top: "2%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Qtda Materiais
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            top: "2%",
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

        <IonButton
          className="buttonLogin"
          style={{
            position: "relative",
            left: "10%",
            width: "80%",
            marginTop: "10%",
            height: "10%",
            fontSize: "30px",
          }}
          color="medium"
        >
          Demontar Pallet
        </IonButton>
        <Tabs />
      </IonContent>
    </>
  );
};

export default DisassemblyPallet;
