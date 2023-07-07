import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./data/style/font";
function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
