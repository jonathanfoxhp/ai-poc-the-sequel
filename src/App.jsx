import "./App.css";
import Search from "./Search";
import FullAudioSettings from "./FullAudioSettings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/audio" element={<FullAudioSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
