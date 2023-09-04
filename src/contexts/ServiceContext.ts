import { createContext } from "react";
import { WebsocketService } from "../services/websocketService";

export const ServiceContext = createContext(WebsocketService);
