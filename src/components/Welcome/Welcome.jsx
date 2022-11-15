import { useEffect, useState } from "react";
import "./Welcome.css";

const Welcome=({initialTextActive,setInitialTextActive}) => {
     
     const [displayHidden, setDisplayHidden] = useState(false);
     
     useEffect(() => {
          const welcomeActive = localStorage.getItem("welcomeActive");
               if (welcomeActive === "false") {
                    setDisplayHidden(true);
               }
     }, []);

     function handleContinueClicked() {
          setInitialTextActive(false);
          localStorage.setItem("welcomeActive", "false");
          setTimeout(() => {
               setDisplayHidden(true);
          }, 2000);
     }

     console.log(displayHidden)
     return (
          <div className={initialTextActive ? 'first-text active' : 'first-text'} style={displayHidden ? {display: "none"} : null}>
          <h1 id='first-text-1'>Welcome to <span id='howtoquitsmoking'>HowToQuitSmoking</span></h1>
          <h1 id='first-text-2'>Sit back and relax, this is a learning website</h1>
          <h1 id='first-text-3'>We all have been smokers</h1>
          <div className='continue-button' onClick={handleContinueClicked}>Continue</div>
        </div>
     );
};

export default Welcome;