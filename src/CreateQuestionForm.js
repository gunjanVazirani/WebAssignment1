import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./CreateQuestionForm.css"; // Import the CSS file
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate

const CreateQuestionForm = () => {
  const [questionType, setQuestionType] = useState("");
  const [question, setQuestion] = useState(""); // Initialize with empty string
  const [options, setOptions] = useState([]);
  const [randomizeOptions, setRandomizeOptions] = useState(false);
  const [defaultPoints, setDefaultPoints] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSaveAndNext = () => {
    // Navigate to "/create-new-question" when clicking "Create New" button
    navigate("/associate-module");
  };

  const handleSaveAndNew = () => {
    navigate("/create-new-question");
  };

  const handleQuestionTypeChange = (event) => {
    const value = event.target.value;
    console.log("Selected question type:", value); // Add this line to check if the function is called
    setQuestionType(value);
    if (value === "TrueFalse") {
      // Set default options for True/False
      setOptions(["True", "False"]);
      console.log("Selected question type:", value); // Add this line to check if the function is called
    } else {
      // Reset options when question type changes
      setOptions([]);
    }
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    // For checkboxes
    if (questionType === "MultiSelect") {
      newSelectedOptions[index] = !newSelectedOptions[index];
    } else {
      // For MCQs (radio buttons)
      newSelectedOptions.fill(false); // Uncheck all other options
      newSelectedOptions[index] = true; // Check the clicked option
    }
    setSelectedOptions(newSelectedOptions);
  };
  const location = useLocation();
  const formData = location.state.formData;
  console.log(formData);
  return (
    <div className="create-question-container">
      <h2>Add Question</h2>

      <FormControl fullWidth>
        <InputLabel id="question-type-label">New</InputLabel>
        <Select
          labelId="question-type-label"
          id="question-type-select"
          value={questionType}
          label="New"
          onChange={handleQuestionTypeChange}
        >
          <MenuItem value={"MCQs"}>Multiple Choice Question(MCQs)</MenuItem>
          <MenuItem value={"TrueFalse"}>True/False</MenuItem>
          <MenuItem value={"FillBlank"}>Fill in the blank</MenuItem>
          <MenuItem value={"ShortQuestion"}>Short Question</MenuItem>
          <MenuItem value={"MultiSelect"}>Multi-Select Question</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Question"
        multiline
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      {(questionType === "MCQs" || questionType === "MultiSelect") && (
        <div>
          <RadioGroup>
            {options.map((option, index) => (
              <div key={index} className="option-row">
                {questionType === "MCQs" ? (
                  <FormControlLabel
                    value={index.toString()} // Use index as the value
                    control={<Radio />}
                    label={option}
                  />
                ) : (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    }
                    label={option}
                  />
                )}
                <TextField
                  className="option-text-field"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </div>
            ))}
          </RadioGroup>
          <Button variant="outlined" onClick={handleAddOption}>
            Add Option
          </Button>
          {questionType === "MCQs" && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={randomizeOptions}
                  onChange={(e) => setRandomizeOptions(e.target.checked)}
                />
              }
              label="Randomize options for each student"
            />
          )}
        </div>
      )}
      <TextField
        label="Default points"
        type="number"
        value={defaultPoints}
        onChange={(e) => setDefaultPoints(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <div className="button-container">
        <div className="save-add-button">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAndNew}
          >
            Save and Add New Question
          </Button>
        </div>
        <div className="save-next-button">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAndNext}
          >
            Save and Go to Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionForm;
