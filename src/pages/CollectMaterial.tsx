import { IonContent } from "@ionic/react";
import "../theme/pallet.css";
import HeaderTab from "../components/HeaderTab";
import React, { useState } from "react";
const CollectMaterial = () => {
  const [desposit, setDesposit] = useState<string>();
  const [description, setDescription] = useState<any>();
  const a = "oi";
  return (
    <>
      <IonContent>
        <HeaderTab />
      </IonContent>
    </>
  );
};

export default CollectMaterial;
