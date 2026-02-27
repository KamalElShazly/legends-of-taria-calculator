import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

import productionData from "../data/production_data.json";

const Smithing = () => {
  // Person's current level
  const [currentLevel, setCurrentLevel] = useState(1);
  const updateCurrentLevel = (currentLevel) => {
    setCurrentLevel(currentLevel);
  };
  // Person's current level percentage
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const updateCurrentPercentage = (currentPercentage) => {
    currentPercentage = currentPercentage / 100;
    setCurrentPercentage(currentPercentage);
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

  const data = productionData["Smithing"];

  return (
    <>
      <Attribute
        maxValue={100}
        attributeName={"Your Smithing Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={100}
        attributeName={"Target Smithing Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Group title="Bronze">
        <ToggleButtons data={data.Bronze} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Iron">
        <ToggleButtons data={data.Iron} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Mithril">
        <ToggleButtons data={data.Mithril} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Adamant">
        <ToggleButtons data={data.Adamant} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Smithing"
      />
    </>
  );
};

export default Smithing;
