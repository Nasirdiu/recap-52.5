import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Slider from "./components/Header/Slider/Slider";
import Footer from "./components/Footer/Footer";
import From from "./components/From/From";
function App() {
  return (
    <div className="App bg-light" >
      <Header></Header>
      <Card></Card>
      <Slider></Slider>
      <From></From>
      <Footer></Footer>
    </div>
  );
}

export default App;
