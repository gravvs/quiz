import quiz_tech from "../../assets/picture/quiz_tech.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Technologia = () => {
  return (
    <div className="technologia">
      <div className="technologia__letter">
        <p>Q</p>
      </div>
      <div className="technologia__feature">
        <div className="technologia__header-relative">
          <p>QUIZ</p>
          <Link to="/"><img src={cofnij_x} className="technologia__arrow" alt="cofnij"/></Link>
          <Link to='/'><img src={zamknij_x} alt="zamknij"/></Link>
        </div>
        <div className="technologia__subheader">
          <p>WYBRANA KATEGORIA:</p>
        </div>
        <div className="technologia__categories">
          <div className="technologia__program-hidden">
            <div>
              <img src={quiz_tech} alt="tech_icon" />
            </div>
            <p>TECHNOLOGIA</p>
          </div>
        </div>
        <Link to='/technologia/gra'>
        <div className="technologia__button">        
          <p>ROZPOCZNIJ</p> <img src={button_strzałka} alt="button_strzalka" />          
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Technologia;
