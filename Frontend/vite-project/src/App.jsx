import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Submitted from "./components/Submitted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/submitted" element={<Submitted />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
