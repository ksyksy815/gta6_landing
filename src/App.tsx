import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FirstVideo from './sections/FirstVideo';
import Hero from './sections/Hero';
import IntroText from './sections/IntroText';
import Jason from './sections/Jason';
import NavBar from './sections/NavBar';
import SecondVideo from './sections/SecondVideo';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <IntroText />
      <FirstVideo />
      <Jason />
      <SecondVideo />
    </main>
  );
};

export default App;
