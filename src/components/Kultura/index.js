import shakespeare from "../../assets/picture/shakespeare.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

const Kultura = () => {
  return (
    <div className="kultura">
      <div className="kultura__letter">
        <p>Q</p>
      </div>
      <div className="kultura__feature">
        <div className="kultura__header-relative">
          <p>QUIZ</p>
          <Link to='/'><img src={cofnij_x} className="kultura__arrow" alt="cofnij"/></Link>
          <Link to='/'><img src={zamknij_x} alt="zamknij"/></Link>
        </div>
        <div className="kultura__subheader">
          <p>WYBRANA KATEGORIA:</p>
        </div>
        <div className="kultura__categories">
          <div className="kultura__program-hidden">
            <div>
              <img src={shakespeare} alt="shakespeare" />
            </div>
            <p>KULTURA</p>
          </div>
        </div>
        <Link to='/kultura/gra'>
        <div className="kultura__button">        
          <p>ROZPOCZNIJ</p> <img src={button_strzałka} alt="button_strzalka" />          
        </div>
        </Link>
      </div>
    </div>
  );
};
export default Kultura;
