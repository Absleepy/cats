import { BrowserRouter, Switch, Route } from "react-router-dom";
import Breeds from "./components/cat-container/Breeds";
import Cat from "./components/cat/Cat";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/breeds" component={Breeds} />
        <Route exact path="/images/:id" component={Cat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
