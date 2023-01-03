import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AddTodo from "./pages/Todo/AddTodo/AddTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="todo/create" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
