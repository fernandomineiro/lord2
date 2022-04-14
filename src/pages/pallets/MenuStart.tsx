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
import ImgHeader from "../../components/ImgHeader";
import ImgFooter from "../../components/ImgFooter";

export const MenuStart = () => {
  const [myValues, setMyValues] = useState([
    "1 - PALLETE",
    "2 - EMBARQUE",
    "3 - RECEBIMENTO",
    "4 - CONSUMO MATERIAIS",
    "5 - INVENTÁRIO",
    "6 - SAIR",
  ]);
  return (
    <>
      <IonHeader class="ion-no-border">
        <ImgHeader />
      </IonHeader>
      <IonContent className="menuPallete">
        {myValues.map((values) => (
          <IonItem className="menuItens" button onClick={() => {}} detail>
            <IonLabel>{values}</IonLabel>
          </IonItem>
        ))}
      </IonContent>
      <IonFooter class="ion-no-border">
        <ImgFooter />
      </IonFooter>
    </>
  );
};

export default MenuStart;
