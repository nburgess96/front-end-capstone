//import logo from './logo.svg';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Navbottom from './components/Navbottom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
      </main>
    </ChakraProvider>
  );
}

export default App;



/* <Header />
<Specials />
<Testimonials />
<About />
<Navbottom /> */