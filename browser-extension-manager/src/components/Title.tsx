import extensionIcon from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import "./Title.css";

export default function Title() {
  return (
    <div className="titlecontainer">
      <img src={extensionIcon} alt="logo" />
      <img src={moonIcon} alt="moonIcon" />
    </div>
  );
}
