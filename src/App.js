import Navbar from "./components/Navbar";
import GlobalStyle from "./globalstyle";
import Slides from "./components/Slides";
import { SliderData } from "./data/SliderData";


function App() {
  return (
   <>
   <GlobalStyle/>
   <Navbar/>
   <Slides slide={SliderData}/>
   </>
  );
}

export default App;
