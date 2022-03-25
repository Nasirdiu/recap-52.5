import "./App.css";
import Header from "./componoents/Header/Header";
import Product from "./componoents/Product/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  );
}

export default App;
