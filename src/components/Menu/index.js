import quiz_tech from "../../assets/picture/quiz_tech.svg";
import hand_brain from "../../assets/picture/shakespeare.svg";
import service from "../../assets/picture/service.svg";
import web_programming from "../../assets/picture/web_programming.svg";
import historia from "../../assets/picture/history.svg";
import {Link} from 'react-router-dom';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__letter">
        <p>Q</p>
      </div>
      <div className="menu__feature">
        <div className="menu__header">
          <p>QUIZ</p>
          <img src={zamknij_x} alt="zamknij"/>
        </div>
        <div className="menu__subheader">
          <p>10 PYTAŃ &#47; 5 KATEGORII</p>
        </div>
        <div className="menu__categories">
          <div className="menu__tech">
          <div className="menu__tech-bg">
            <Link to='../technologia'>
            <div>
              <img src={quiz_tech} alt="quiz_tech"/>
            </div>
            </Link>
            <p>TECHNOLOGIA</p>
          </div>
          </div>
          <div className="menu__culture">
          <div className="menu__culture-bg">
            <Link to='../kultura'>
            <div>
              <img src={hand_brain} alt="brain"/>
            </div>
            </Link>
            <p>KULTURA</p>
          </div>
          </div>
          <div className="menu__moto">
          <div className="menu__moto-bg">
            <Link to='../motoryzacja'>
            <div>
              <img src={service} alt="car"/>
            </div>
            <p>MOTORYZACJA</p>
            </Link>
          </div>
          </div>
          <div className="menu__program">
          <div className="menu__program-bg">
            <Link to='../programowanie'>
            <div>
              <img src={web_programming} alt="computer_icon"/>
            </div>
            <p>PROGRAMOWANIE</p>
            </Link>
          </div>
          </div>
          <div className="menu__history">
          <div className="menu__history-bg">
            <Link to='../historia'>
            <div>
              <img src={historia} alt="book"/>
            </div>
            </Link>
            <p>HISTORIA</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
