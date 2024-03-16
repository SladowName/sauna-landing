import {Header} from "./components/header/header.tsx";
import {SaunaElement} from "./components/sauna-element/sauna-element.tsx";
import './app.scss'
import first from '../src/components/sauna-element/images/1.jpg';
import second from '../src/components/sauna-element/images/2.jpg';
import third from '../src/components/sauna-element/images/3.jpg';
import fourth from '../src/components/sauna-element/images/4.jpg';
import fifth from '../src/components/sauna-element/images/5.jpg';
import sixth from '../src/components/sauna-element/images/6.jpg';
import seventh from '../src/components/sauna-element/images/7.jpg';
import eight from '../src/components/sauna-element/images/8.jpeg';
import ninety from '../src/components/sauna-element/images/9.jpg';
import tenth from '../src/components/sauna-element/images/10.jpg';
import eleventh from '../src/components/sauna-element/images/11.jpg';
import twelve from '../src/components/sauna-element/images/12.jpg';
import thirteenth from '../src/components/sauna-element/images/13.jpg';
import fourteenth from '../src/components/sauna-element/images/14.jpg';
import {Footer} from "./components/footer/footer.tsx";
import {Title} from "./components/title/title.tsx";
import {useEffect, useState} from "react";

const SAUNA_ELEMENTS = [
  {image: first, content: ''},
  {image: second, content: ''},
  {image: third, content: ''},
  {image: fourth, content: ''},
  {image: fifth, content: ''},
  {image: sixth, content: ''},
  {image: seventh, content: ''},
  {image: eight, content: ''},
  {image: ninety, content: ''},
  {image: tenth, content: ''},
  {image: eleventh, content: ''},
  {image: twelve, content: ''},
  {image: thirteenth, content: ''},
  {image: fourteenth, content: ''},
]

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    console.log('here2')
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(), { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="appWrapper">
      <Header position={scrollPosition}/>
      <Title/>
      <div className="saunaElementsWrapper">
        {SAUNA_ELEMENTS.map((element, index) => (
          <SaunaElement key={element.image} src={element.image} index={index}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App
