import service from "../../assets/picture/service.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Motoryzacja = () => {
  return (
    <div className="motoryzacja">
      <div className="motoryzacja__letter">
        <p>Q</p>
      </div>
      <div className="motoryzacja__feature">
        <div className="motoryzacja__header-relative">
          <p>QUIZ</p>
          <Link to='/'><img src={cofnij_x} className="motoryzacja__arrow" alt="cofnij"/></Link>
          <Link to='/'><img src={zamknij_x} alt="zamknij"/></Link>
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
