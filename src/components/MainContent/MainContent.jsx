import "./MainContent.css";
import Paragraph from "./Paragraph";
import { reasonTexts, waysTexts } from "../../constants/texts";
import { useState } from "react";

const MainContent = ({ initialTextActive }) => {

     //false for first choice true for second choice
     const [choiceSelected, setChoiceSelected] = useState(false);

     function handleChoiceSelected(choice) {
          setChoiceSelected(choice); 
     }

     return (
          <>
          <div className="phone-numbers"><span className="english-phone-number">English: 1-800-784-8669</span><span className="spanish-phone-number">Spanish: 1-855-335-3569</span></div>
          <div className={initialTextActive ? 'main' : 'main active'}>
          <div className='main-choice-selector'>
            <div className='main-choice-selector--choice' onClick={() => handleChoiceSelected(false)} style={!choiceSelected ? {backgroundColor:"#FFA458", color: "black"}:null}>
              10 <span style={{color: "white"}}>REASONS</span> to quit smoking
              </div>
            <div className='main-choice-selector--choice' onClick={() => handleChoiceSelected(true)} style={choiceSelected ? {backgroundColor:"#FFA458", color: "black"}:null}>
              10 <span style={{color: "white"}}>WAYS</span> to quit smoking
              </div>
               </div>   
               <div className='main-content'>
                    {!choiceSelected && !initialTextActive && reasonTexts.map((text, index) => (
                         <Paragraph key={index} title={text.title} text={text.text}/>
                    ))}
                    {choiceSelected && !initialTextActive && waysTexts.map((text, index) => (
                         <Paragraph key={index} title={text.title} text={text.text}/>
                    ))}
                    <div className="vertical-spacer"></div>
               </div>     
     </div></>
     );
}
     
export default MainContent;