import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunc from "./components/HeaderFunc";
import HomeComponent from "./components/BaiTapLayOut/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import DatabindingFunc from "./DataBinding/DatabindingFunc";
import HandleEvent from "./HandleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      {/* <HeaderClass></HeaderClass>
      <HeaderFunc/> */}
      {/* <HomeComponent/> */}
      {/* <Databinding />
      <DatabindingFunc/> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
