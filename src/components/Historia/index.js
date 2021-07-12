import history from "../../assets/picture/history.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Historia = () => {
  return (
    <div className="historia">
      <div className="historia__letter">
        <p>Q</p>
      </div>
      <div className="historia__feature">
        <div className="historia__header-relative">
          <p>QUIZ</p>
          <Link to='/'><img src={cofnij_x} className="historia__arrow" alt="cofnij"/></Link>
          <Link to='/'><img src={zamknij_x} alt="zamknij"/></Link>
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
