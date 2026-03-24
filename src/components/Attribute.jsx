import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import expData from "../data/exp_data.json";

const Attribute = ({ maxValue, attributeName, updateAttribute, updateAttribute2, isCurrentLevel }) => {
  const [attribute, setAttribute] = React.useState(1);
  const [attribute2, setAttribute2] = React.useState(0);

  const getMaxTotalXp = () => parseInt(expData[String(maxValue)], 10);

  const getLevelFromTotalXp = (totalXp) => {
    const xp = Math.floor(totalXp);
    if (xp <= 0) return 1;
    if (xp >= getMaxTotalXp()) return maxValue;
    for (let level = maxValue; level >= 1; level--) {
      if (parseInt(expData[level], 10) <= xp) return level;
    }
    return 1;
  };

  const checkAndUpdateValue = (currentValue, newValue) => {
    let finalValue;
    newValue = Math.floor(newValue);
    if (newValue > 0 || newValue === null) {
      if (currentValue > maxValue || newValue >= maxValue) {
        finalValue = maxValue;
        setAttribute(maxValue);
      } else {
        finalValue = newValue;
        setAttribute(finalValue);
      }
    } else if (newValue < 0) {
      finalValue = 0;
      setAttribute(0);
    } else {
      setAttribute(newValue);
      finalValue = newValue;
    }
    if (isCurrentLevel) {
      const totalXpAtLevel = parseInt(expData[finalValue], 10);
      setAttribute2(totalXpAtLevel);
      updateAttribute2(totalXpAtLevel);
    }
    updateAttribute(finalValue);
  };

  const checkAndUpdateValue2 = (currentValue, newValue) => {
    if (Number.isNaN(newValue)) {
      setAttribute2(0);
      updateAttribute(1);
      updateAttribute2(0);
      return;
    }
    let totalXp = Math.floor(newValue);
    const maxXp = getMaxTotalXp();
    if (totalXp < 0) totalXp = 0;
    if (totalXp > maxXp) totalXp = maxXp;

    const level = getLevelFromTotalXp(totalXp);
    setAttribute(level);
    updateAttribute(level);

    setAttribute2(totalXp);
    updateAttribute2(totalXp);
  };

  const checkIfNaN = (value) => {
    if (Number.isNaN(value)) {
      setAttribute2(0);
      updateAttribute(1);
      updateAttribute2(0);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label={attributeName}
          type="number"
          value={attribute}
          onFocus={(event) => {
            event.target.select();
          }}
          onChange={function (event) {
            checkAndUpdateValue(attribute, event.target.valueAsNumber);
          }}
          sx={{
            "& > :not(style)": {
              margin: 1,
              maxWidth: "25ch",
              minWidth: "25ch",
            },
          }}
        />
        {isCurrentLevel ? (
          <TextField
            type="number"
            label="XP"
            value={attribute2}
            slotProps={{
              input: {
                inputProps: { min: 0, max: getMaxTotalXp() },
              },
            }}
            onFocus={(event) => {
              event.target.select();
            }}
            onBlur={function (event) {
              checkIfNaN(event.target.valueAsNumber);
            }}
            onChange={function (event) {
              checkAndUpdateValue2(attribute2, event.target.valueAsNumber);
            }}
            sx={{
              "& > :not(style)": {
                margin: 1,
                maxWidth: "25ch",
                minWidth: "25ch",
              },
            }}
          />
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Attribute;
