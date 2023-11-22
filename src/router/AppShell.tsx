import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import LoginPage from "../components/pages/Login.Page";
import VerifyLoginPage from "../components/pages/VerifyLogin.Page";
import { useState } from "react";
import { SafeArea } from "capacitor-plugin-safe-area";

setupIonicReact({});

const AppShell = () => {
  const [height, setHeight] = useState<any>(0);
  SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
    setHeight(statusBarHeight);
  });
  return (
    <IonApp style={{ marginTop: height }}>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/login" exact component={LoginPage} />
          <Route path="/login/verify" component={VerifyLoginPage} />
          <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact={true}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
