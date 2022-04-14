import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Pallet from "./pages/Pallet";
import Tabs from "./components/Tabs";
import Login from "./pages/pallets/Login";

import DisassemblyOfPallet from "./pages/pallets/DisassemblyOfPallet";
import { ClosurePallet } from "./pages/pallets";
import QueryMenu from "./pages/pallets/QueryMenu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/menu"></Route>
        <Route exact path="/pallet">
          <DisassemblyOfPallet />
        </Route>
        <Route exact path="/a">
          <ClosurePallet />
        </Route>

        <Route exact path="/">
          <Redirect to="/a" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
