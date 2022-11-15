import "./MainContent.css";

function Paragraph({ title, text }) {

     return (
          <div className="paragraph">
          <div className="paragraph-title">
            {title}
          </div>
          <div className="paragraph-text">
               {text}
               </div>
          </div>
     );
}

export default Paragraph;