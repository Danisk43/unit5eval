import {Routes,Route} from "react-router-dom"
import './App.css';
import CreateEmployee from "./components/CreateEmployee";
import Home from "./components/Home";
import Login from "./components/Login";
import Employees from "./components/Employees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/employees/create" element={<CreateEmployee/>}/>
        <Route path="/employees/:id" element={<Employees/>}/>
        <Route path="/employees/:id/edit" element={<Employees/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
