import Benefits from "./components/Benefits";
import Clases from "./components/Clases"
import Coaches from "./components/Coaches";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar"
import Prices from "./components/Prices";
import Hero from "./components/Hero";


const App = () => {
  
  const sectionComponents = {
    'hero': Hero, 
    'clases': Clases,
    'entrenadores': Coaches,
    'ubicaciones': Locations,
    'precios': Prices,
    'beneficios' : Benefits
  };

  return (
    <div>
      <Navbar sectionComponents={sectionComponents} />
    </div>
  );
};

export default App
