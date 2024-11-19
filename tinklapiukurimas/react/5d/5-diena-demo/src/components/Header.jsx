import logo from "/Users/martyn/5-diena-demo/src/components/images/c4b0f1a320fcfcc4bc345d1c26ba7992.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src={logo}
        alt="kitty cutie"
        className="header-img w100 object-fit-cover"
      />
    </header>
  );
}