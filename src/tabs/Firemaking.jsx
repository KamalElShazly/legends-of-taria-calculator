import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";

import productionData from "../data/production_data.json";

const Firemaking = () => {
  // Person's current level
  const [currentLevel, setCurrentLevel] = useState(1);
  const updateCurrentLevel = (currentLevel) => {
    setCurrentLevel(currentLevel);
  };
  // Person's current total XP
  const [currentXP, setCurrentXP] = useState(0);
  const updateCurrentXP = (currentXP) => {
    setCurrentXP(currentXP);
  };
  // Person's target level
  const [targetLevel, setTargetLevel] = useState(1);
  const updateTargetLevel = (targetLevel) => {
    setTargetLevel(targetLevel);
  };
  // Person's target element
  const [element, setElement] = useState(["loading"]);
  const updateElement = (element) => {
    setElement(element);
  };

  const data = productionData["Firemaking"];

  return (
    <>
      <Attribute
        maxValue={100}
        attributeName={"Your Firemaking Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentXP}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={100}
        attributeName={"Target Firemaking Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons data={data} skill="Firemaking" currentLevel={currentLevel} updateElement={updateElement} />

      <Display
        levelXP={currentXP}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Firemaking"
      />
    </>
  );
};

export default Firemaking;
