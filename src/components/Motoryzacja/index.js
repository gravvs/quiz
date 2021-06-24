import service from "../../assets/picture/service.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Motoryzacja = () => {
  return (
    <div className="motoryzacja">
      <div className="motoryzacja__letter">
        <p>Q</p>
      </div>
      <div className="motoryzacja__feature">
        <div className="motoryzacja__header-relative">
          <p>QUIZ</p>
          <Link to='/'><p className="motoryzacja__arrow">&lt;</p></Link>
          <Link to='/'><p>&Chi;</p></Link>
        </div>
        <div className="motoryzacja__subheader">
          <p>WYBRANA KATEGORIA:</p>
        </div>
        <div className="motoryzacja__categories">
          <div className="motoryzacja__program-hidden">
            <div>
              <img src={service} alt="car_icon" />
            </div>
            <p>MOTORYZACJA</p>
          </div>
        </div>
        <Link to='/motoryzacja/gra'>
        <div className="motoryzacja__button">        
          <p>ROZPOCZNIJ</p> <img src={button_strzałka} alt="button_strzalka" />          
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Motoryzacja;
