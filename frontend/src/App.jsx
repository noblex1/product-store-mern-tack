import { Button } from "@radix-ui/themes";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import { Toaster } from "sonner";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Theme appearance={theme}> {/* ✅ Theme wrapper here */}
      <Navbar toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-products" element={<CreatePage />} />
      </Routes>
      <Toaster />
    </Theme>
  );
}

export default App;
