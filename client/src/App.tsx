import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/landing";
import Persona from "./pages/persona";
import Dashboard from "./pages/dashboard";
import Community from "./pages/community";
import Profile from "./pages/profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen w-screen overflow-hidden flex flex-col">
        <Header />
        <main className="flex-grow overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guest/:persona" element={<Persona />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
