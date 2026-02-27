import React from "react";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "&.Mui-selected": {
    borderColor: "#2e7d32",
    borderRadius: 9,
  },
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    borderColor: "#bdbdbd",
    "&.Mui-disabled": {},
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
      borderColor: "#bdbdbd",
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
      borderColor: "#bdbdbd",
    },
  },
}));

const ToggleButtons = ({ data, currentLevel, updateElement }) => {
  const [selectedElement, setSelectedElement] = React.useState();

  const handleChange = (event, newElement) => {
    if (event.currentTarget.value !== "loading") {
      setSelectedElement(newElement);
      if (newElement === null) {
        updateElement(["loading"]);
      } else {
        updateElement([event.currentTarget.value, data[event.currentTarget.value]]);
      }
    }
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 450,
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
    >
      {data !== undefined ? (
        <StyledToggleButtonGroup
          size="small"
          value={selectedElement}
          exclusive
          onChange={handleChange}
          sx={{
            padding: 1,
          }}
        >
          {Object.keys(data).map((element) => (
            <ToggleButton
              key={element}
              value={element}
              disabled={currentLevel < parseInt(data[element]["level"])}
              onClick={handleChange}
              sx={{
                "& > :not(style)": {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              <Box
                sx={{
                  marginRight: 0.4,
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + `/images/${data[element]["image"]}`}
                  width="22"
                  height="22"
                  value={element}
                  alt=""
                  onError={(i) => (i.target.style.display = "none")}
                />
              </Box>
              {element}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      ) : (
        <ToggleButton value="loading">Loading...</ToggleButton>
      )}
    </Box>
  );
};

export default ToggleButtons;
