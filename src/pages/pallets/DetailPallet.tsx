import React, { useState } from "react";
import "../../theme/pallet.css";
import {
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
} from "@ionic/react";
import Tabs from "../../components/Tabs";
import HeaderTab from "../../components/HeaderTab";

export const DetailPallet = () => {
  const [user, setUser] = useState<string>();
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
            MarginTop: "5%",
            left: "10%",
            height: "50px",
            fontSize: "20px",
          }}
        >
          Item
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
          Material
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
          Descrição
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
                CP:
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
                Peso Líquido:
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
                Palete
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
                Quantidade:
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
                Dep/Local
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
            </IonCol>
          </IonRow>
        </IonGrid>
        <Tabs />
      </IonContent>
    </>
  );
};

export default DetailPallet;
