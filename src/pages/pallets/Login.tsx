import React, { useState } from "react";
import "../../theme/login.css";
import ImgHeader from "../../components/ImgHeader";
import ImgFooter from "../../components/ImgFooter";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonInput,
  IonList,
  IonItemDivider,
  IonButton,
  IonText,
  IonFooter,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

export const Login = () => {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<any>();
  return (
    <>
      <IonHeader class="ion-no-border">
        <ImgHeader />
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItemDivider className="titleLogin">Usuário</IonItemDivider>

          <IonInput
            className="input"
            value={user}
            type="email"
            placeholder="Entre com o email"
            onIonChange={(e) => setUser(e.detail.value!)}
          ></IonInput>

          <IonItemDivider className="titleLogin">Senha</IonItemDivider>

          <IonInput
            className="input"
            value={password}
            type="password"
            placeholder="Entre com a senha"
            onIonChange={(e) => setPassword(e.detail.value!)}
          ></IonInput>
          <div style={{ textAlign: "center" }}>
            <IonButton className="buttonLogin" color="medium">
              Logar
            </IonButton>
          </div>
        </IonList>
      </IonContent>
      <IonFooter class="ion-no-border">
        <ImgFooter />
      </IonFooter>
    </>
  );
};

export default Login;
