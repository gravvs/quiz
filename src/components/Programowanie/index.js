import web_programming from "../../assets/picture/web_programming.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Programowanie = () => {
  return (
    <div className="programowanie">
      <div className="programowanie__letter">
        <p>Q</p>
      </div>
      <div className="programowanie__feature">
        <div className="programowanie__header-relative">
          <p>QUIZ</p>
          <Link to='/'><p className="programowanie__arrow">&lt;</p></Link>
          <Link to='/'><p>&Chi;</p></Link>
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
