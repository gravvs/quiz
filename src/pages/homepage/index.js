import React from 'react';
import Menu from '../../components/Menu';
import Programowanie from '../../components/Programowanie';
import Programowanie2 from '../../components/Programowanie2';
import Motoryzacja from '../../components/Motoryzacja';
import Motoryzacja2 from '../../components/Motoryzacja2';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Historia from '../../components/Historia';
import Historia2 from '../../components/Historia2';
import Technologia from '../../components/Technologia';
import Technologia2 from '../../components/Technologia2';
import Kultura from '../../components/Kultura';
import Kultura2 from '../../components/Kultura2';




const Homepage = () => {

      return(
          <Router>
            <Switch>
              <Route exact path='/' component={Menu} />
              <Route exact path='/technologia' component={Technologia} />
              <Route exact path='/technologia/gra' component={Technologia2} />
              <Route exact path='/kultura' component={Kultura} />
              <Route exact path='/kultura/gra' component={Kultura2} />
              <Route exact path='/motoryzacja' component={Motoryzacja} />
              <Route exact path='/motoryzacja/gra' component={Motoryzacja2} />
              <Route exact path='/programowanie' component={Programowanie}/>
              <Route exact path='/programowanie/gra' component={Programowanie2} /> 
              <Route exact path='/historia' component={Historia} />
              <Route exact path='/historia/gra' component={Historia2} />
              </Switch>
          </Router>
      );
    }
    
    export default Homepage;