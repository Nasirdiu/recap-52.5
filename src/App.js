import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Restotrent from "./components/Restotrent/Restotrent";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/image" element={<Images></Images>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/restotrent" element={<Restotrent></Restotrent>}></Route>
        <Route
          path="/meal/:mealId"
          element={<MealDetails></MealDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
