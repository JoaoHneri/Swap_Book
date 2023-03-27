import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";

import BookDetails from "./Routes/BooksDetails";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/details" Component={BookDetails}/>  
    </Routes>
  </Router>
  )
}

export default App
