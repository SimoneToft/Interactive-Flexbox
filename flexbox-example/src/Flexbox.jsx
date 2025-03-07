import React, { useState } from "react";

function Flexbox() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("normal");
  const [alignItems, setAlignItems] = useState("normal");
  const [activeFlexDirection, setActiveFlexDirection] = useState("row");
  const [activeJustifyContent, setActiveJustifyContent] = useState("normal");
  const [activeAlignItems, setActiveAlignItems] = useState("normal");

  const handleFlexDirectionClick = (direction) => {
    setFlexDirection(direction);
    setActiveFlexDirection(direction);
  };

  const handleJustifyContentClick = (value) => {
    setJustifyContent(value);
    setActiveJustifyContent(value);
  };

  const handleAlignItemsClick = (value) => {
    setAlignItems(value);
    setActiveAlignItems(value);
  };

  const getAxisLabels = () => {
    if (flexDirection === "row" || flexDirection === "row-reverse") {
      return { mainAxis: "Main Axis", crossAxis: "Cross Axis" };
    } else {
      return { mainAxis: "Cross Axis", crossAxis: 'Main Axis' };
    }
  };

  const axisLabels = getAxisLabels();

  return (
    <div className="flexboxdiv" style={{display:"flex", justifyContent:"center",flexDirection:"column"}}>
      <h1 style={{ margin: "0.2em" }}>Flexbox Example</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <p style={{ marginLeft: "1em", marginRight: "1em" }}>{axisLabels.mainAxis}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"center",  marginLeft:"-48px"}}>
        <div style={{ display: "flex", flexDirection: "column", paddingRight: "10px", justifyContent: "center", alignItems: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
          <p style={{ width: "48px" }}>{axisLabels.crossAxis}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
        <div style={{ width: "40%", display: "flex", flexDirection, borderStyle: "solid", justifyContent, alignItems }}>
          <p style={{ backgroundColor: "lightblue", margin:"0" }}>One<br /> Also one</p>
          <p style={{ backgroundColor: "lightblue", margin:"0"  }}>Two</p>
          <p style={{ backgroundColor: "lightblue", margin:"0"  }}>Three</p>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: "0em" }}>Flex Direction</h2>
        <button
          onClick={() => handleFlexDirectionClick("row")}
          style={{ backgroundColor: activeFlexDirection === "row" ? "lightblue" : "white" }}
        >
          Row
        </button>
        <button
          onClick={() => handleFlexDirectionClick("column")}
          style={{ backgroundColor: activeFlexDirection === "column" ? "lightblue" : "white" }}
        >
          Column
        </button>
        <button
          onClick={() => handleFlexDirectionClick("row-reverse")}
          style={{ backgroundColor: activeFlexDirection === "row-reverse" ? "lightblue" : "white" }}
        >
          Row-Reverse
        </button>
        <button
          onClick={() => handleFlexDirectionClick("column-reverse")}
          style={{ backgroundColor: activeFlexDirection === "column-reverse" ? "lightblue" : "white" }}
        >
          Column-Reverse
        </button>
      </div>
      <div>
        <h2 style={{ marginBottom: "0em" }}>Justify Content</h2>
        <p style={{ margin: "0em" }}>controls alignment of all items on the main axis.</p>
        <button
          onClick={() => handleJustifyContentClick("center")}
          style={{ backgroundColor: activeJustifyContent === "center" ? "lightblue" : "white" }}
        >
          Center
        </button>
        <button
          onClick={() => handleJustifyContentClick("flex-start")}
          style={{ backgroundColor: activeJustifyContent === "flex-start" ? "lightblue" : "white" }}
        >
          Flex-start
        </button>
        <button
          onClick={() => handleJustifyContentClick("flex-end")}
          style={{ backgroundColor: activeJustifyContent === "flex-end" ? "lightblue" : "white" }}
        >
          Flex-end
        </button>
        <button
          onClick={() => handleJustifyContentClick("space-between")}
          style={{ backgroundColor: activeJustifyContent === "space-between" ? "lightblue" : "white" }}
        >
          Space-between
        </button>
        <button
          onClick={() => handleJustifyContentClick("space-around")}
          style={{ backgroundColor: activeJustifyContent === "space-around" ? "lightblue" : "white" }}
        >
          Space-around
        </button>
        <button
          onClick={() => handleJustifyContentClick("space-evenly")}
          style={{ backgroundColor: activeJustifyContent === "space-evenly" ? "lightblue" : "white" }}
        >
          Space-evenly
        </button>
      </div>

      <div>
        <h2 style={{ marginBottom: "0em" }}>Align Items</h2>
        <p style={{ margin: "0em" }}>controls alignment of all items on the cross axis.</p>
        <button
          onClick={() => handleAlignItemsClick("center")}
          style={{ backgroundColor: activeAlignItems === "center" ? "lightblue" : "white" }}
        >
          Center
        </button>
        <button
          onClick={() => handleAlignItemsClick("flex-start")}
          style={{ backgroundColor: activeAlignItems === "flex-start" ? "lightblue" : "white" }}
        >
          Flex-start
        </button>
        <button
          onClick={() => handleAlignItemsClick("flex-end")}
          style={{ backgroundColor: activeAlignItems === "flex-end" ? "lightblue" : "white" }}
        >
          Flex-end
        </button>
        <button
          onClick={() => handleAlignItemsClick("stretch")}
          style={{ backgroundColor: activeAlignItems === "stretch" ? "lightblue" : "white" }}
        >
          Stretch
        </button>
      </div>
    </div>
  );
}

export default Flexbox;