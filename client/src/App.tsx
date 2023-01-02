import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
