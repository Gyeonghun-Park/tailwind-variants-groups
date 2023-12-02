import { createRoot } from "react-dom/client";
import Route from "./route";
import "./globals.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<Route />);
