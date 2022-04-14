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

export const QueryMenu = () => {
  const [user, setUser] = useState<string>();
  const [myValues, setMyValues] = useState([
    "1 - PALLETE",
    "2 - MATERIAL",
    "3 - SALDO DO ITEM",
  ]);
  return (
    <>
      <IonHeader class="ion-no-border">
        <HeaderTab />
      </IonHeader>

      <IonContent className="menuQuery">
        {myValues.map((values) => (
          <IonButton className="buttonQuery" color="success">
            {values}
          </IonButton>
        ))}
        <Tabs />
      </IonContent>
    </>
  );
};

export default QueryMenu;
