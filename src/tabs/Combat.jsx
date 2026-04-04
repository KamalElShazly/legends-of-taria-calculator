import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";

import combatData from "../data/combat_data.json";

const Combat = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const updateCurrentLevel = (currentLevel) => {
    setCurrentLevel(currentLevel);
  };
  const [targetLevel, setTargetLevel] = useState(1);
  const updateTargetLevel = (targetLevel) => {
    setTargetLevel(targetLevel);
  };
  const [currentXP, setCurrentXP] = useState(0);
  const updateCurrentXP = (currentXP) => {
    setCurrentXP(currentXP);
  };
  const [element, setElement] = useState(["loading"]);
  const updateElement = (element) => {
    setElement(element);
  };

  const data = combatData;

  return (
    <>
      <Attribute
        maxValue={100}
        attributeName={"Your Combat Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentXP}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={100}
        attributeName={"Target Combat Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons data={data} currentLevel={currentLevel} updateElement={updateElement} restrictByLevel={false} />

      <Display
        levelXP={currentXP}
        targetLevel={targetLevel}
        element={element}
        keywords={["kills on "]}
        skill="Combat"
      />
    </>
  );
};

export default Combat;
