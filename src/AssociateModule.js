import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import "./AssociateModule.css";
const AssociateModule = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedModules, setSelectedModules] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCheckboxChange = (module) => {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter((item) => item !== module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  // Dummy data for modules
  const modules = [
    "Module 1: New to Subway - Onboarding",
    "Module 2: New Sub - Veg Shammi Introduced",
    "Module 3: Security and Safety",
    "Module 4: Security of Employees",
    "Module 5: ABC to Subway",
    "Module 6: Team bonding among Employees",
  ];

  const filteredModules = modules.filter((module) =>
    module.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSave = () => {
    // Implement save logic here
    console.log("Selected modules:", selectedModules);
  };

  return (
    <div className="associate-module-container">
      <h2>Select the module you want to associate the quiz to (optional)</h2>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={handleSearchInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton></IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div className="module-list">
        {filteredModules.map((module, index) => (
          <div key={index} className="module-item">
            <FormControlLabel
              className="module-checkbox"
              control={
                <Checkbox
                  checked={selectedModules.includes(module)}
                  onChange={() => handleCheckboxChange(module)}
                />
              }
              label={module}
            />
          </div>
        ))}
      </div>
      <Button
        className="save-button"
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};

export default AssociateModule;
