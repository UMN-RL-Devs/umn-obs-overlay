import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Overlay } from "./scenes/Overlay/Overlay";
import {
  DEFAULT_OVERLAY_CONTEXT,
  OverlayInfoContext,
} from "./contexts/OverlayInfoContext";
import { OverlayContext } from "./models/OverlayContext/OverlayContext";
import { OverlayConfig } from "./scenes/OverlayConfig/OverlayConfig";
import { ServiceContext } from "./contexts/ServiceContext";
import { WebsocketService } from "./services/websocketService";

interface ProviderProps {
  ctx: OverlayContext;
  setCtx: React.Dispatch<React.SetStateAction<OverlayContext>>;
}

const OverlayConfigWithProvider = (props: ProviderProps) => {
  const { ctx, setCtx } = props;

  return (
    <OverlayInfoContext.Provider
      value={{ overlayInfo: ctx, setOverlayInfo: setCtx }}
    >
      <OverlayConfig />
    </OverlayInfoContext.Provider>
  );
};

const App = () => {
  const [overlayInfo, setOverlayInfo] = useState(DEFAULT_OVERLAY_CONTEXT);

  useEffect(() => {
    WebsocketService.init(49322, false);
  }, []);

  return (
    <BrowserRouter>
      <ServiceContext.Provider value={WebsocketService}>
        <Routes>
          <Route
            path="/"
            element={
              <OverlayConfigWithProvider
                ctx={overlayInfo}
                setCtx={setOverlayInfo}
              />
            }
          />
          <Route
            path="/overlay"
            element={<Overlay configContext={overlayInfo} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ServiceContext.Provider>
    </BrowserRouter>
  );
};

export default App;
