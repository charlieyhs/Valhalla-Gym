import Benefits from "./components/Benefits";
import Clases from "./components/Clases"
import Coaches from "./components/Coaches";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar"
import Prices from "./components/Prices";
import Hero from "./components/Hero";
import { BLACK_COLOR } from "./constants/colors";
import Contact from "./components/Contact";
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
