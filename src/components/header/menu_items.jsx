import Logo from "../../assets/images/logo-white.svg";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

function Menu_items() {
  return (
    <div className="header_nav">
      <img src={Logo} alt="logo" className="logo" />
      <ul className="list-row">
        <li>
          <a className="image-link" role="button" rel="nofollow" href="#0">
            Study
          </a>
        </li>
        <li>
          <a className="image-link" role="button" rel="nofollow" href="#0">
            Choose Hull
          </a>
        </li>
        <li className="international">
          <a className="image-link" role="button" rel="nofollow" href="#0">
            International
          </a>
        </li>
        <li className="research">
          <a className="image-link" role="button" rel="nofollow" href="#0">
            Research
          </a>
        </li>
        <li className="business">
          <a className="image-link" role="button" rel="nofollow" href="#0">
            Business
          </a>
        </li>
        <li className="work">
          <a className="image-link" role="button" rel="nofollow" href="#0">
            Work with us
          </a>
        </li>
        <li className="search">
          <a className="image-link" role="button" rel="nofollow" href="#0">
            <FaSearch />
          </a>
        </li>
      </ul>
      <div className="more_menu">
        <CgDetailsMore color="white" size={48} />
      </div>
    </div>
  );
}

export default Menu_items;
