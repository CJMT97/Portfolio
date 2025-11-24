// CSS Files
import "./App.css";

// Website Pages
import Header from "./assets/header.jsx";

// Other Imports
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>{/* <Route path="/" element={} /> */}</Routes>
    </>
  );
}
