import React, { useEffect } from "react";
import { WebsocketService } from "./services/websocketService";

const App = () => {
  useEffect(() => {
    WebsocketService.init(49322, true);
    WebsocketService.subscribe("game", "update_state", (data: any) => {
      console.log(data);
    });
  }, []);

  return <div>Overlay components here</div>;
};

export default App;
