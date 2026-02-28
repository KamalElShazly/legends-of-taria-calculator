import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext } from '@mui/lab';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Woodcutting from "./tabs/Woodcutting";
import Mining from "./tabs/Mining";
import Fishing from "./tabs/Fishing";
import Smithing from "./tabs/Smithing";
import Cooking from "./tabs/Cooking";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header title="Legends of Taria Skills Calculator" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
          <TabContext value={pathname}>
            <Tabs value={pathname} variant="scrollable">
              <Tab label="Mining" component={Link} to="/mining" value="/mining" />
              <Tab label="Woodcutting" component={Link} to="/woodcutting" value="/woodcutting" />
              <Tab label="Fishing" component={Link} to="/fishing" value="/fishing" />
              <Tab label="Smithing" component={Link} to="/smithing" value="/smithing" />
              <Tab label="Cooking" component={Link} to="/cooking" value="/cooking" />
            </Tabs>
          </TabContext>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Navigate to="/mining" />} />
        <Route path="mining" element={<Mining />} />
        <Route path="woodcutting" element={<Woodcutting />} />
        <Route path="fishing" element={<Fishing />} />
        <Route path="smithing" element={<Smithing />} />
        <Route path="cooking" element={<Cooking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
