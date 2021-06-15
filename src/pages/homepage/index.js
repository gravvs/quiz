import React from 'react';
import FinalScore from '../../components/FinalScore';
import Menu from '../../components/Menu';
import Programowanie from '../../components/Programowanie';
import Programowanie2 from '../../components/Programowanie2';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




const Homepage = () => {

      return(
          <Router>
            <Menu />
              <Route exact path='/' component={Menu} />
              <Route path='/programowanie' component={Programowanie}/>
              <Route strict path='/programowanie/gra' component={Programowanie2} />          
          </Router>
      );
    }
    
    export default Homepage;