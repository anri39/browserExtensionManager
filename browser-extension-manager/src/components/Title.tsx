import extensionIcon from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import "./Title.css";

type titleProps = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Title({ setDarkMode }: titleProps) {
  return (
    <div className="titlecontainer">
      <img src={extensionIcon} alt="logo" />
      <img
        src={moonIcon}
        alt="moonIcon"
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      />
    </div>
  );
}
