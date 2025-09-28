import Benefits from "./components/sections/Benefits";
import Clases from "./components/sections/Clases";
import Coaches from "./components/sections/Coaches";
import Contact from "./components/sections/Contact";
import Locations from "./components/sections/Locations";
import Prices from "./components/sections/Prices";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import { BLACK_COLOR } from "./constants/colors";
import { AlertProvider } from "./providers/AlertProvider";


const App = () => {
  
  const sectionComponents = {
    'hero': Hero, 
    'clases': Clases,
    'entrenadores': Coaches,
    'ubicaciones': Locations,
    'precios': Prices,
    'beneficios' : Benefits,
    'contactos' : Contact,
  };

  return (
    <AlertProvider>
      <div style={{background: BLACK_COLOR}}>
        <Navbar sectionComponents={sectionComponents} />
      </div>
    </AlertProvider>
  );
};

export default App
