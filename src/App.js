import logo from "./logo.svg";
import "./App.css";
import Payment from "./Components/Payment";

function App() {

  const arr=[
         {
      date: "28/10/2020",
      case: "Case Study",
      arrow: "->",
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      heading: "Amazon Gift Pay",
      subheading: "Desktop - Mobile",
    },
  
     {
      date: "17 Sep 2020",
      case: "Case Study",
      arrow: "->",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      heading: "Apple Gift Payment",
      subheading: "MacOS - Mobile",
    },
    {
      date: "28/10/2020",
      case: "Case Study",
      arrow: "->",
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      heading: "Amazon Gift Pay",
      subheading: "Desktop - Mobile",
    },
  
     {
      date: "17 Sep 2020",
      case: "Case Study",
      arrow: "->",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      heading: "Apple Gift Payment",
      subheading: "MacOS - Mobile",
    },
  ]
  

  return <Payment data={arr} />;
}

export default App;
