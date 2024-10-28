import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import ListDogs from "./pages/ListDogs";
import Login from "./pages/Login";
import AuthDogs from "./pages/AuthDogs";
import { StateGlobalProvider } from "./context/StateGlobal";
function App() {
  return (
    <BrowserRouter>
      <StateGlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-dogs" element={<ListDogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth-dogs" element={<AuthDogs />} />
        </Routes>
      </StateGlobalProvider>
    </BrowserRouter>
  );
}

export default App;
