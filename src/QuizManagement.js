import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./QuizManagement.css"; // Import the CSS file

const QuizManagement = () => {
  // Mock data for quizzes
  const [quizzes] = useState([
    {
      id: 1,
      title: "Quiz 1",
      module: "Module A",
      createdBy: "User 1",
      points: 10,
      totalEmployees: 50,
    },
    {
      id: 2,
      title: "Quiz 2",
      module: "Module B",
      createdBy: "User 2",
      points: 20,
      totalEmployees: 60,
    },
    {
      id: 3,
      title: "Quiz 3",
      module: "Module C",
      createdBy: "User 3",
      points: 15,
      totalEmployees: 70,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Function to add a new quiz
  //   const addQuiz = () => {
  //     const newQuiz = {
  //       id: quizzes.length + 1,
  //       title: `Quiz ${quizzes.length + 1}`,
  //       module: "",
  //       createdBy: "",
  //       points: 0,
  //       totalEmployees: 0,
  //     };
  //     setQuizzes([...quizzes, newQuiz]);
  //   };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  // Filter quizzes based on search query
  const filteredQuizzes = quizzes.filter((quiz) =>
    Object.values(quiz).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(searchQuery);
      }
      return false;
    })
  );

  return (
    <div className="quiz-management-container">
      <h2>Quiz Management Dashboard</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Quiz Name</th>
            <th>Module Associated</th>
            <th>Created By</th>
            <th>Quiz Points</th>
            <th>Total Employees Attended</th>
            <th>More Quiz Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuizzes.map((quiz) => (
            <tr key={quiz.id}>
              <td>{quiz.title}</td>
              <td>{quiz.module}</td>
              <td>{quiz.createdBy}</td>
              <td>{quiz.points}</td>
              <td>{quiz.totalEmployees}</td>
              <td>
                <button>More...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-quiz" className="add-quiz-button">
        Add Quiz
      </Link>
    </div>
  );
};

export default QuizManagement;
