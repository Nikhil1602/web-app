import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import ReactDOM from "react-dom";
import Navigation from "./pages/navigation";
import PlaceDetails from "./components/piece/place-detail";
import Registration from "./pages/registration";
import Dashboard from "./pages/navigation/navigation-tabs/dashboard";

const App = () => {
  const [state, setState] = useState({
    showDate: true,
    showVehicle: true,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        ReactDOM.render(
          <>
            <Navigation
              showDate={state.showDate}
              showVehicle={state.showVehicle}
              getName={auth.currentUser.displayName}
            />
            <div id="header">
              <PlaceDetails />
            </div>
            <div id="screen">
              <Dashboard />
            </div>
          </>,
          document.getElementById("root")
        );
      } else {
        ReactDOM.render(
          <>
            <Registration />
            <div id="header"></div>
            <div id="screen"></div>
          </>,
          document.getElementById("root")
        );
      }
    });
  }, [state]);

  return <></>;
};

export default App;
