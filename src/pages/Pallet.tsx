import {
  IonBadge,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonInput,
  IonItemDivider,
  IonLabel,
  IonList,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../../theme/pallet.css";
import Input from "../components/Input";
import React, { useState } from "react";
const Pallet = () => {
  return (
    <>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/page/Inbox">
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );
};

export default Pallet;
