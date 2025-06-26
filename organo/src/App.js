import Banner from './components/Banner'
import Formulario from './components/Fomulario';
import Time from './components/Time';



function App() {
  return (
    
    <div className="App">
      <Banner/>
      <Formulario />
      <Time titulo={'Programação'} />
      <Time titulo={'Front-End'} />
      <Time titulo={'Data Science'} />
    </div>
  );
}

export default App;
