import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import Welcome from './components/Welcome/Welcome';
function App() {

  const [initialTextActive, setInitialTextActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("welcomeActive") !== "false") {
      setTimeout(() => {
        setInitialTextActive(true);
      }, 500);
    }
  }, []);

  return (
    <div className="App">
      <Welcome initialTextActive={initialTextActive} setInitialTextActive={setInitialTextActive} />
      <MainContent initialTextActive={initialTextActive}/>
    </div>
  );
}

export default App;
