import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

import productionData from "../data/production_data.json";

const Smithing = () => {
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
  // If true, needed items are calculated using item XP + smelting bars XP
  const [smeltUsedBars, setSmeltUsedBars] = useState(false);

  const data = productionData["Smithing"];

  return (
    <>
      <Attribute
        maxValue={100}
        attributeName={"Your Smithing Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentXP}
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

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={smeltUsedBars}
              onChange={(e) => setSmeltUsedBars(e.target.checked)}
            />
          }
          label="Smelt used bars (include smelting XP in calculation)"
        />
      </Box>

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
        levelXP={currentXP}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Smithing"
        smeltBars={smeltUsedBars}
        smeltingData={productionData["Smelting"]}
      />
    </>
  );
};

export default Smithing;
