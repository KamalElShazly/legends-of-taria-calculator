import * as React from "react";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
}));

const CustomSwitch = ({ value, updateValue, falseText, trueText, element }) => {
  const handleChange = () => {
    updateValue(!value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 1,
          marginTop: 1,
        }}
        spacing={0}
      >
        <Div>{falseText}</Div>
        <Grid item>
          <Switch checked={value} disabled={false} onChange={handleChange} color="default" />
        </Grid>
        <Div>{trueText}</Div>
      </Grid>
    </Box>
  );
};

export default CustomSwitch;
