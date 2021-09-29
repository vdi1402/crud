
import './App.css';
import Navbar from './components/Navbar'
import Vdi from './components/Vdi';
import Allconfessions from './components/Allconfessions';
import Addconfessions from './components/Addconfessions';
import Notfound from './components/Notfound';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Editconfession from './components/Editconfession';

function App() {
  return (

  <BrowserRouter basename={process.env.PUBLIC_URL}>
 <Navbar />
 <Switch>
 <Route exact path="/" component={Vdi} />
 <Route exact path="/all" component={Allconfessions} />
 <Route exact path="/add" component={Addconfessions} />
 <Route exact path="/edit/:id"component={Editconfession} />
 <Route component={Notfound} />
</Switch>

</BrowserRouter>

  );
}

export default App;
