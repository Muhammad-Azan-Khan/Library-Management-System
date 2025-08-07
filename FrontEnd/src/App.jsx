import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contact from "./contact/Contact";
import About from "./about/About";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./components/ChangePassword";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Signup />
      <Toaster />
    </>
  );
}

export default App;
