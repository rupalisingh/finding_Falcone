import "./App.css";
import Main from "./Main";
import AuthProvider from "./Context/AuthProvider";
import Result from "./Components/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path = '/' element={<Main/>} exact = {true} />
        <Route path = '/Result' element={<Result/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
