import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { Toaster } from "sonner";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkMode = theme === "dark";

  return (
    <Theme appearance={theme}>
      <Navbar toggleTheme={() => setTheme(isDarkMode ? "light" : "dark")} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-products" element={<CreatePage />} />
      </Routes>
      <Toaster />
    </Theme>
  );
}

export default App;
