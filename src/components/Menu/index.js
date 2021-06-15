import quiz_tech from "../../assets/picture/quiz_tech.svg";
import hand_brain from "../../assets/picture/shakespeare.svg";
import service from "../../assets/picture/service.svg";
import web_programming from "../../assets/picture/web_programming.svg";
import historia from "../../assets/picture/history.svg";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__letter">
        <p>Q</p>
      </div>
      <div className="menu__feature">
        <div className="menu__header">
          <p>QUIZ</p>
          <p>&Chi;</p>
        </div>
        <div className="menu__subheader">
          <p>10 PYTAŃ &#47; 5 KATEGORII</p>
        </div>
        <div className="menu__categories">
          <div className="menu__tech">
            <div>
              <img src={quiz_tech} alt="quiz_tech"/>
            </div>
            <p>TECHNOLOGIA</p>
          </div>
          <div className="menu__culture">
            <div>
              <img src={hand_brain} alt="brain"/>
            </div>
            <p>KULTURA</p>
          </div>
          <div className="menu__moto">
            <div>
              <img src={service} alt="car"/>
            </div>
            <p>MOTORYZACJA</p>
          </div>
          <div className="menu__program">
            <Link to='../programowanie'>
            <div>
              <img src={web_programming} alt="computer_icon"/>
            </div>
            <p>PROGRAMOWANIE</p>
            </Link>
          </div>
          <div className="menu__history">
            <div>
              <img src={historia} alt="book"/>
            </div>
            <p>HISTORIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
