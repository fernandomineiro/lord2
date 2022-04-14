import { IonInput } from "@ionic/react";

const Input = (phrase: string) => {
  return (
    <>
      <IonInput placeholder={phrase}></IonInput>
    </>
  );
};

export default Input;
