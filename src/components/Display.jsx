import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import expData from "../data/exp_data.json";

const Display = ({ level, levelPercentage, targetLevel, element, keywords, skill, switchValue }) => {
  const [expGap, setExpGap] = React.useState(0);

  const addCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  React.useEffect(() => {
    const currentLevelExp = parseInt(expData[level]) + (parseInt(expData[level + 1]) - parseInt(expData[level])) * levelPercentage;
    const targetLevelExp = expData[targetLevel];
    setExpGap(Math.ceil(targetLevelExp - currentLevelExp));
    // eslint-disable-next-line
  }, [expData, level, targetLevel, levelPercentage]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {expGap <= 0 || isNaN(parseFloat(expGap)) ? (
          <></>
        ) : (
          <List dense={true}>
            <ListItem>
              <ListItemText primary={"Total exp: " + addCommas(expGap)} secondary="" />
            </ListItem>
            <ListItem>
              {/* Render total number of selected attribute */}
              {/* Render empty component if no element is selected */}
              {element[0] === "loading" ? (
                <></>
              ) : (
                <ListItemText
                  primary={"Total " + keywords[0] + " " + element[0] + ": " + addCommas(Math.ceil(expGap / parseInt(element[1]["xp"])))}
                />
              )}
            </ListItem>

            {/* Render subelements */}
            {element[0] === "loading" ? (
              <></>
            ) : (
              Object.keys(element[1]["submaterials"]).map((subelement) => (
                <ListItem key={subelement}>
                  <ListItemText
                    primary={
                      "Total " +
                      subelement +
                      ": " +
                      addCommas(Math.ceil(expGap / parseInt(element[1]["xp"])) * element[1]["submaterials"][subelement])
                    }
                  />
                </ListItem>
              ))
            )}
          </List>
        )}
      </Box>
    </>
  );
};

export default Display;
