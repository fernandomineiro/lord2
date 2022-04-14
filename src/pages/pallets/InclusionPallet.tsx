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

export const InclusionPallet = () => {
  const [user, setUser] = useState<string>();
  const [text, setText] = useState<string>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

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
          Pallet Número
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "absolute",
            top: "5%",
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
            position: "absolute",
            top: "13%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Codº de Barras
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "absolute",
            top: "17%",
            left: "10%",
            height: "50px",
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
            position: "absolute",
            top: "25%",
            left: "10%",
            height: "200px",
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
          >
            Volumes coletados
          </IonLabel>
        </IonTextarea>

        <IonLabel
          style={{
            margin: "0",
            position: "absolute",
            top: "52%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Quebra
        </IonLabel>
        <IonInput
          style={{
            margin: "0",
            position: "absolute",
            top: "56%",
            left: "10%",
            height: "50px",
          }}
          className="input"
          value={user}
          type="text"
          placeholder=""
          onIonChange={(e) => setUser(e.detail.value!)}
        ></IonInput>

        <IonButton
          style={{
            margin: "0",
            position: "absolute",
            top: "68%",
            left: "10%",
            height: "70px",
            width: "80%",
          }}
          className="buttonQuery"
          color="success"
        >
          Fechar Pallete
        </IonButton>

        <Tabs />
      </IonContent>
    </>
  );
};

export default InclusionPallet;
