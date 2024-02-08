// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import QuizManagement from "./QuizManagement";
import ModuleManagement from "./ModuleManagement";
import AccessManagement from "./AccessManagement";
import Support from "./Support";
import UserSettingsButton from "./UserSettingButton";
import CreateQuizForm from "./CreateQuizForm";
import CreateQuestionForm from "./CreateQuestionForm";
import AssociateModule from "./AssociateModule";
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <UserSettingsButton />

      <Routes>
        {/* Define routes */}
        <Route path="/quiz-management" element={<QuizManagement />} />
        <Route path="/module-management" element={<ModuleManagement />} />
        <Route path="/access-management" element={<AccessManagement />} />
        <Route path="/support" element={<Support />} />
        <Route path="/add-quiz" element={<CreateQuizForm />} />
        <Route path="/create-new-question" element={<CreateQuestionForm />} />
        <Route path="/associate-module" element={<AssociateModule />} />

        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
