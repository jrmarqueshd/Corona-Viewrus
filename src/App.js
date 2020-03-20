import React from "react";

import GTM from "react-tag-manager";

import Global from "./Assets/Styles/Global";

import Menu from "./Components/Menu";

import Routes from "./Routes";

function App() {
  return (
    <GTM
      gtm={{
        id: "UA-47456504-4",
      }}
      settings={{
        sendPageView: true,
        pageView: {
          event: "pageview",
          data: {},
          settings: {
            locationProp: "pathname",
            sendAs: "https://coronaviewrus.ga",
          },
        },
      }}
    >
      <Global />
      <Menu />
      <Routes />
    </GTM>
  );
}

export default App;
