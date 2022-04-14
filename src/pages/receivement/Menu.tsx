import React, { useState } from "react";
import "../../theme/login.css";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import HeaderTab from "../../components/HeaderTab";
import ImgHeader from "../../components/ImgHeader";
import ImgFooter from "../../components/ImgFooter";

const BoardingConference = () => {
  const [myValues, setMyValues] = useState(["1 - SEPARAÇÃO", "2 - EMBARQUE"]);
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>
      <IonContent className="menuPallete">
        {myValues.map((values) => (
          <IonItem className="menuItens" button onClick={() => {}} detail>
            <IonLabel>{values}</IonLabel>
          </IonItem>
        ))}

        <IonItem
          className="menuItens"
          style={{ marginTop: "50px" }}
          button
          onClick={() => {}}
          detail
        >
          <IonLabel>VOLTAR AO MENU ANTERIOR</IonLabel>
        </IonItem>
      </IonContent>
    </>
  );
};

export default BoardingConference;
