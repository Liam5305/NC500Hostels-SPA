import Nav from "./components/Navigation/Nav";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Hostels } from "./components/Pages/Hostels/Hostels";
import { Itineraries } from "./components/Pages/Itineraries/Itineraries";


function App() {
  return (
  <>
      <Nav />
  
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/hostels"><Hostels /></Route>
        <Route path="/itineraries"><Itineraries /></Route>
      </Switch>
      
  </>
  );
}

export default App;