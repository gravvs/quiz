import quiz_tech from "../../assets/picture/quiz_tech.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Technologia = () => {
  return (
    <div className="technologia">
      <div className="technologia__letter">
        <p>Q</p>
      </div>
      <div className="technologia__feature">
        <div className="technologia__header-relative">
          <p>QUIZ</p>
          <Link to="/"><p className="technologia__arrow">&lt;</p></Link>
          <Link to='/'><p>&Chi;</p></Link>
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
