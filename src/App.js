import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Routes/Home";
import Dashboard from "./Routes/Dashboard";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Login/Register";
import { UserProvider } from "./components/UseContext/UserContext";
import BookDetails from "./Routes/BooksDetails";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(false);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/details" Component={BookDetails} />
            <Route path="/dashboard"element={ valor ? <Dashboard /> : <Navigate to="/" />} />
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/registrar" Component={RegisterPage} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
