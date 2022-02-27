import Nav from "./components/nav";
import Home from './components/home';
import Instructions from './components/instructions';
import Rules from './components/rules';
import Contact from './components/contact';
import Footer from './components/footer'

import './css/style.css'
import './css/phone.css'
import './css/smallphone.css'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Instructions />
      <Rules />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
