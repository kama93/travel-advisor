import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 160 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={()=>{
                    const { NAME } = geo.properties;
                    console.log(`${NAME}`)}}
                  style={{
                    default: {
                      fill: "#989898",
                      outline: "none"
                    },
                    hover: {
                      fill: "#87CEFA",
                      outline: "#AFEEEE"
                    },
                    pressed: {
                      fill: "#87CEFA",
                      outline: "#AFEEEE"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
