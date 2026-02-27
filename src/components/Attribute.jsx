import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

const Attribute = ({ maxValue, attributeName, updateAttribute, updateAttribute2, isCurrentLevel }) => {
  const [attribute, setAttribute] = React.useState(1);
  const [attribute2, setAttribute2] = React.useState(0);

  const checkAndUpdateValue = (currentValue, newValue) => {
    let finalValue;
    newValue = Math.floor(newValue);
    // Check if value is above minimum or equal to undefined (when input is empty)
    if (newValue > 0 || newValue === null) {
      // Check if value is less than maximum
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
    // Update parent component attribute and attribute 2
    updateAttribute(finalValue);
  };

  const checkAndUpdateValue2 = (currentValue, newValue, maxValue) => {
    let finalValue;
    newValue = Math.floor(newValue);
    // Check if value is above minimum or equal to undefined (when input is empty)
    if (newValue > 0 || newValue === null) {
      // Check if value is less than maximum
      if (currentValue > maxValue || newValue >= maxValue) {
        finalValue = maxValue;
        setAttribute2(maxValue);
      } else {
        finalValue = newValue;
        setAttribute2(finalValue);
      }
    } else if (newValue < 0) {
      finalValue = 0;
      setAttribute2(0);
    } else {
      setAttribute2(newValue);
      finalValue = newValue;
    }
    // Update parent component attribute 2
    updateAttribute2(finalValue);
  };

  const checkIfNaN = (value) => {
    if (Number.isNaN(value)) {
      // Update attribute 2
      setAttribute2(0);
      // Update parent component attribute 2
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
            value={attribute2}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              },
            }}
            onFocus={(event) => {
              event.target.select();
            }}
            onBlur={function (event) {
              checkIfNaN(event.target.valueAsNumber);
            }}
            onChange={function (event) {
              checkAndUpdateValue2(attribute2, event.target.valueAsNumber, 99);
            }}
            sx={{
              "& > :not(style)": {
                margin: 1,
                minWidth: "8ch",
                maxWidth: "8ch",
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
