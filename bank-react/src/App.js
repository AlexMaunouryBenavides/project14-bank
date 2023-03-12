import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Sign-in";
import User from "./Pages/User";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="login/" element={<Login />} />
            <Route path="user/" element={<User />} />
         </Routes>
      </div>
   );
}

export default App;
