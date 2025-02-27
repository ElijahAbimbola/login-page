import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Login  setUserData={setUserData} />}></Route> 
     <Route path="/Home" element={<Home userData={userData} />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
