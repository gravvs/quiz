import history from "../../assets/picture/history.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Historia = () => {
  return (
    <div className="historia">
      <div className="historia__letter">
        <p>Q</p>
      </div>
      <div className="historia__feature">
        <div className="historia__header-relative">
          <p>QUIZ</p>
          <Link to='/'><p className="historia__arrow">&lt;</p></Link>
          <Link to='/'><p>&Chi;</p></Link>
        </div>
        <div className="historia__subheader">
          <p>WYBRANA KATEGORIA:</p>
        </div>
        <div className="historia__categories">
          <div className="historia__program-hidden">
            <div>
              <img src={history} alt="history_icon" />
            </div>
            <p>HISTORIA</p>
          </div>
        </div>
        <Link to='/historia/gra'>
        <div className="historia__button">        
          <p>ROZPOCZNIJ</p> <img src={button_strzałka} alt="button_strzalka" />          
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Historia;
