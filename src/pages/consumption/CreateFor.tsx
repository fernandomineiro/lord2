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

export const CreateFor = () => {
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
            position: "relative",
            MarginTop: "3%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Cod. de Barras do pallete
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
          Tipo
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
          Dep??sito
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
          Localiza????o
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
        <div
          style={{
            margin: "0",
            position: "relative",
            marginTop: "1%",
            left: "10%",
            height: "5px",
            marginBottom: "5px",
            backgroundColor: "black",
            width: "80%",
          }}
        ></div>
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
          N?? do volumes
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
          Q?? de apontamentos
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
          Peso Liquidos
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

export default CreateFor;
