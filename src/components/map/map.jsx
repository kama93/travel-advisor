import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

import './map.style.scss';
import MapChart from "./MapChart";


function Map() {
    const [content, setContent] = useState("");
  return (
    <div className="container-map">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;