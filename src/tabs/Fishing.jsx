import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

import gatheringData from "../data/gathering_data.json";

const Fishing = () => {
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

  const data = gatheringData["Fishing"];

  return (
    <>
      <Attribute
        maxValue={100}
        attributeName={"Your Fishing Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={100}
        attributeName={"Target Fishing Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Group title="Net">
        <ToggleButtons data={data.Net} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Rod">
        <ToggleButtons data={data.Rod} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Cage">
        <ToggleButtons data={data.Cage} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Harpoon">
        <ToggleButtons data={data.Harpoon} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Fishing"
      />
    </>
  );
};

export default Fishing;
