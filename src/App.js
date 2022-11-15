import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Welcome from './components/Welcome/Welcome';

function App() {

  const [initialTextActive, setInitialTextActive] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("welcomeActive"))
    if (localStorage.getItem("welcomeActive") !== "false") {
      console.log("llego aqui what");
        setInitialTextActive(true);
    }
  }, []);

  return (
    <div className="App">
      <Welcome initialTextActive={initialTextActive} setInitialTextActive={setInitialTextActive} />
      <MainContent initialTextActive={initialTextActive}/>
    </div>
  )
}

export default App;
