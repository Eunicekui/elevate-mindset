import "./Hero.css"

function Hero (props) {
  return (
    <div className={props.className}>
      <div className="text-hero">
        <h1>{props.heading1}</h1>
        <h2>{props.heading2}</h2>
        <p>{props.text}</p>{" "}
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
      <div className="hero-card">
        <div className="chat">         
          <h2>{props.heading3}</h2>
          <p>{props.chatText}</p>
        </div>
        <div className="therapy">
          <h2>{props.heading4}</h2>
          <p>{props.cardText}</p>
        </div>
      </div>
    </div>
  );
}
 
export default Hero;