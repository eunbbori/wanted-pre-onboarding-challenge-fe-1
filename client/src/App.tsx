import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AddTodo from "./pages/Todo/AddTodo/AddTodo";
import MainTodo from "./pages/Todo/MainTodo/MainTodo";

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<MainTodo />} />
          <Route path="todo/:id" element={<MainTodo />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="todo/create" element={<AddTodo />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default App;
