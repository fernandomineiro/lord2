import React, { useState } from "react";
import "../../theme/pallet.css";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTextarea,
} from "@ionic/react";
import Tabs from "../../components/Tabs";
import HeaderTab from "../../components/HeaderTab";

export const DisassemblyOfPallet = () => {
  const [user, setUser] = useState<string>();
  const [text, setText] = useState<string>();

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
          Código de barras
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

        <IonTextarea
          style={{
            margin: "0",
            position: "relative",
            top: "1%",
            left: "10%",
            height: "20%",
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
        <IonGrid>
          <IonRow>
            <IonCol>
              {" "}
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
                Depósito:
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
              <IonButton color="primary">DETALHAR ITEM</IonButton>
            </IonCol>
            <IonCol>
              {" "}
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
                Pallet de Destino:
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
              <IonButton color="primary">CRIAR PALLET</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton style={{ left: "10%", width: "80%" }} color="primary">
          DESMONTAL TOTAL PALLET
        </IonButton>
        <Tabs />
      </IonContent>
    </>
  );
};

export default DisassemblyOfPallet;
