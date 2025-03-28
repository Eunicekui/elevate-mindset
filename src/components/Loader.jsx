import "./Loader.css";
import Logo1 from "../assets/logo1.png";

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={Logo1} alt="Elevate Mindset Logo" className="loader-logo" />
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    )
}
export default Loader;