import { useEffect, useState } from 'react';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
import SeventhScreen from './screens/SeventhScreen';
import { When } from './components/when/When';
import ByMe from './components/ByMe/ByMe';
function App() {

  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew />
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <ForthScreen/>
  <ThirdScreen/>
  <SixthScreen/>
  <SeventhScreen/>
  <FifthScreen/>
  <When/>
  <ByMe/>
  </>
}

export default App;
