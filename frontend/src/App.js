
import {Route} from 'react-router-dom';
import{ Home, login, SignUp, DashBord} from './pages';
import {NavBar} from './components'


function App(props) {
  return (
    <div>
        <NavBar/>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={login} exact/>
        <Route path='/SignUp' component={SignUp} exact/>
        <Route path='/DashBord' component={DashBord} exact/>
        
    </div>
  );
}

export default App;
