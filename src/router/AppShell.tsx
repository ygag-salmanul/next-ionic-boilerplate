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
import RegisterPage from "../components/pages/Register.Page";
import HomePage from "../components/pages/Home.Page";
import VerifyRegisterPage from "../components/pages/VerifyRegister.Page";

setupIonicReact({});

const AppShell = () => {
  const [height, setHeight] = useState<any>(0);
  SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
    setHeight(statusBarHeight);
  });
  return (
    <IonApp className={"main"} style={{ marginTop: height }}>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/signup" exact component={RegisterPage} />
          <Route path="/signup/verify" exact component={VerifyRegisterPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/login/verify" component={VerifyLoginPage} />
          <Route path="/home" component={HomePage} />
          <Route
            path="/"
            render={() => <Redirect to="/signup" />}
            exact={true}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
