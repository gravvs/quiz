import web_programming from "../../assets/picture/web_programming.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Programowanie = () => {
  return (
    <div className="programowanie">
      <div className="programowanie__letter">
        <p>Q</p>
      </div>
      <div className="programowanie__feature">
        <div className="programowanie__header-relative">
          <p>QUIZ</p>
          <Link to='/'><img src={cofnij_x} className="programowanie__arrow" alt="cofnij"/></Link>
          <Link to='/'><img src={zamknij_x} alt="zamknij"/></Link>
        </div>
        <div className="programowanie__subheader">
          <p>WYBRANA KATEGORIA:</p>
        </div>
        <div className="programowanie__categories">
          <div className="programowanie__program-hidden">
            <div>
              <img src={web_programming} alt="computer_icon" />
            </div>
            <p>PROGRAMOWANIE</p>
          </div>
        </div>
        <Link to='/programowanie/gra'>
        <div className="programowanie__button">        
          <p>ROZPOCZNIJ</p> <img src={button_strzałka} alt="button_strzalka" />          
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Programowanie;
