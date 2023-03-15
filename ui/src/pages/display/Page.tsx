import NavigationPage from "../../components/NavigationPage";
import { Button, Divider } from "@mui/material";
import AsMap from "./views/AsMap";
import { useState } from "react";
import AsTree from "./views/AsTree";
export default function DisplayPage() {
  const [view, setView] = useState("map");
 
  return (
    <NavigationPage>
      <div>
         
        <ul>
          <li>
            <Button onClick={() => setView("map")}>Map</Button>
          </li>
          <li>
            <Button onClick={() => setView("tree")}>tree</Button>
          </li>
        </ul>
        <Divider /> 
        {view === "map" && <AsMap />}
        {view === "tree" && <AsTree />}
      </div>
    </NavigationPage>
  );
}
