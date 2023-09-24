import { BrowserRouter, Route, Routes } from "react-router-dom";
// Css
import "./App.css";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Pages
import Tasks from "./Pages/Tasks/Tasks";
// import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Tasks />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
